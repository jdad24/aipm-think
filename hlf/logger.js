'use strict';

const path = require('path');

const logger = require('electron-log');

logger.transports.file.file = path.resolve(__dirname, '../log.log');
// console.log(logger.transports.file.findLogPath());

module.exports = logger;
