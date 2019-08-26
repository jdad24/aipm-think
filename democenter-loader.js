'use strict';

/**
 * This middleware will pull the latest version of the Demo Center middleware
 * for NodeJS applications. Include this middleware into a NodeJS app as the
 * first route and set all opts values.
 */

var fs = require('fs');
var http = require('http');
var https = require('https');

/**
 * opts.cookie_name = HTTP Cookie Name for Session
 * opts.solution_id = Solution ID
 * opts.demo_center_url = Market specific Demo Center URL
 * opts.demo_center_key = Market specific Demo Center PEM Formated Public Key
 */
module.exports = exports = function(opts) {
  opts = JSON.parse(JSON.stringify(opts));
  var democenter = function(req, res, next) {next()};
  get(opts.demo_center_url + '/democenter.js', function(err, _res, body) {
    fs.writeFile('./democenter.js', body, function(err) {
      if (err) {
        console.error(err);
      } else {
        democenter = require('./democenter')(opts);
      }
    });
  });
  return function(req, res, next) {
    democenter(req, res, next);
  };
};

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
      callback(null, res, body); 
    });
  }).on('error', function(err) {
    console.error(err);
    callback(err);
  });
}
