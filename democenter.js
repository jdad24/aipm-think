'use strict'

/**
 * Use the democenter-loader.js middleware to load the latest democenter.js
 * middleware into a NodeJS application. Including this file directly into
 * NodeJS application when there are several applications can become difficult
 * when updating or fixing requiring all applications to be updated.
 */

var http = require('http');
var https = require('https');
var crypto = require('crypto');
var express = require('express');

/**
 * opts.cookie_name = HTTP Cookie Name for Session
 * opts.solution_id = Solution ID
 * opts.demo_center_url = Market specific Demo Center URL
 * opts.demo_center_key = Market specific Demo Center PEM Formated Public Key
 */
module.exports = exports = function(opts) {
  var cookieName = opts.cookie_name;
  var solutionId = opts.solution_id;
  var demoCenterUrl = opts.demo_center_url;
  var demoCenterKey = opts.demo_center_key;
  var loginUrl = demoCenterUrl + '/login?solution_id=' + solutionId;
  var accessTokenUrl = demoCenterUrl + '/access-token/';
  var sessions = {};
  var app = express();

  app.set('etag', false);
  app.set('trust proxy', true);

  app.get('/sessions', function(req, res, next) {
    cleanSessions(sessions);
    res.json(sessions);
  });

  app.use(function(req, res, next) {
    var session = getSession(req, cookieName, sessions);
    if (req.query.access_code && req.query.access_code.trim()) {
      get(accessTokenUrl + req.query.access_code.trim(), function(err, _res, body) {
        if (err) {
          console.error(err);
          return res.status(500).json({statusCode: 500, error: err});
        }
        if (_res.statusCode !== 200) {
          return res.status(_res.statusCode).json({statusCode: 500, error: err});
        }
        verify(body.access_token, demoCenterKey, function(err, isValid, claims) {
          if (err) {
            console.error(err);
            return res.status(500).json(err);
          }
          if (isValid) {
            var session = {
              id: generateSessionId(sessions),
              expiration_ts: claims.exp * 1000,
              access_claims: claims,
              access_token: body.access_token
            };
            sessions[session.id] = session;
            res.cookie(cookieName, session.id, {
              maxAge: session.expiration_ts - Date.now(),
              httpOnly: true
            });
            return res.redirect(303, req.originalUrl
              .replace(/access_code=[^&]*&?/, '')
              .replace(/(\?|&)+/, ''));
          }
          res.redirect(loginUrl);
        });
      });
    } else if (session) {
      req.demo_center_claims = session.access_claims;
      next();
    } else {
      res.redirect(loginUrl);
    }
  });

  return app
}

function generateSessionId(sessions) {
  var min = 100000000000000;
  var max = 999999999999999;
  var sessionId = Math.floor(Math.random() * max) + min;
  return sessions[sessionId] ? generateSessionId(sessions) : sessionId;
}

function cleanSessions(sessions) {
  var sessionIds = Object.keys(sessions);
  for (let index = sessionIds.length - 1; index > -1; index--) {
    var sessionId = sessionIds[index];
    var session = sessions[sessionId];
    if (session.expiration_ts < Date.now()) {
      delete sessions[sessionId];
    }
  }
}

function getSession(req, cookieName, sessions) {
  cleanSessions(sessions);
  var cookies = String(req.headers.cookie).trim().split(';');
  for (let index = cookies.length - 1; index > -1; index--) {
    var cookie = cookies[index].trim().split('=');
    if (cookie[0] === cookieName) {
      return sessions[cookie[1]];
    }
  }
}

function verify(accessToken, key, callback) {
  try {
    var data = accessToken.split('.');
    var header = data[0];
    var payload = data[1];
    var signature = data[2];
    var verify = crypto.createVerify('RSA-SHA256');
    verify.update(header + '.' + payload, 'utf8');
    var isValid = verify.verify(key,
      Buffer.from(signature.replace(/_/g, '/').replace(/-/g, '+'), 'base64')
    );
    if (isValid) {
      callback(null, true, JSON.parse(Buffer.from(
        payload.replace(/_/g, '/').replace(/-/g, '+'), 'base64').toString('utf8')));
    } else {
      callback(null, false);
    }
  } catch (err) {
    callback(err);
  }
}

function get(url, callback) {
  (/^https/i.test(url) ? https : http).get(url, function(res) {
    var body = Buffer.alloc(0);
    res.on('data', function(data) {
      body = Buffer.concat([body, data]);
    });
    res.on('error', function(err) {
      console.error(err);
      callback(err);
    });
    res.on('end', function() {
      try {
        callback(null, res, JSON.parse(body.toString('utf8')));
      } catch (err) {
        console.error(err);
        callback(null, res, body);
      }
    });
  }).on('error', function(err) {
    console.error(err);
    callback(err);
  });
}
