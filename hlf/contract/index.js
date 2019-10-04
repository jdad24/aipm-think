/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

const inspectionContract = require('./lib/inspectionContract.js');
const lotContract = require('./lib/lotContract.js');
const orderContract = require('./lib/orderContract.js');
const shipmentContract = require('./lib/shipmentContract.js');

module.exports.contracts = [
    inspectionContract,
    lotContract,
    orderContract,
    shipmentContract
];
