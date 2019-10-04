/* eslint-disable no-unused-vars */
/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Bring key classes into scope, most importantly Fabric SDK network class
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { FileSystemWallet } = require('fabric-network');
const logger = require('./logger');
const txUtils = require('./txUtils');

const userName = 'User1@aim.ibm.com';
const channel = 'channel1';
const wallet = new FileSystemWallet(path.resolve(__dirname, './wallet'));
const connectionProfile = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, './gateway/channel1_aimcontract_profile.json')
  )
);
const connectionOptions = {
  discovery: { enabled: true, asLocalhost: false },
  identity: userName,
  wallet: wallet
};

let second = 0;
let disconnected = true;
let timer;
let network;
let connectionPromise;

const createTimer = () => {
  return setInterval(() => {
    // console.log('second:', second);
    if (second >= 60) {
      txUtils.disconnectNetwork();
      disconnected = true;
      second = 0;
    } else {
      second++;
    }
  }, 1000);
};

setInterval(() => {
  if (disconnected) {
    clearInterval(timer);
    timer = null;
  } else if (!timer) {
    timer = createTimer();
  }
}, 1000);

async function connectNetwork() {
  network = await txUtils.connectToNetwork(
    connectionProfile,
    connectionOptions,
    channel
  );
}

function initNetwork() {
  if (disconnected) {
    connectionPromise = connectNetwork();
  }
  disconnected = false;
  second = 0;
}

const placeOrder = async orderObj => {
  try {
    initNetwork();
    await connectionPromise;

    const orderContract = network.getContract('aimcontract', 'org.aim.order');

    const order = await txUtils.placeOrder(
      orderContract,
      JSON.stringify(orderObj)
    );

    logger.info('complete', order);

    return order;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const completeOrder = async orderId => {
  try {
    initNetwork();
    await connectionPromise;

    const orderContract = network.getContract('aimcontract', 'org.aim.order');

    const order = await txUtils.completeOrder(orderContract, orderId);

    logger.info('Complete order:', order);

    return order;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const queryOrderSorted = async queryObj => {
  try {
    initNetwork();
    await connectionPromise;

    const orderContract = network.getContract('aimcontract', 'org.aim.order');

    const res = await txUtils.queryOrder(
      orderContract,
      JSON.stringify(queryObj)
    );

    logger.info('complete.', res);

    return res;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const getOrderByOrderId = async orderId => {
  try {
    initNetwork();
    await connectionPromise;

    const orderContract = network.getContract('aimcontract', 'org.aim.order');

    const order = await txUtils.getOrderByOrderId(orderContract, orderId);

    if (order) {
      logger.info('Transaction has been evaluated, result is:', order);
    }

    return order;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const createLot = async lotObj => {
  try {
    initNetwork();
    await connectionPromise;

    const lotContract = network.getContract('aimcontract', 'org.aim.lot');

    const lot = await txUtils.createLot(lotContract, JSON.stringify(lotObj));

    logger.info('Transaction has been evaluated, result is:', lot);

    return lot;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const routeLot = async decisionObj => {
  try {
    initNetwork();
    await connectionPromise;

    const lotContract = network.getContract('aimcontract', 'org.aim.lot');

    const lot = await txUtils.routeLot(
      lotContract,
      JSON.stringify(decisionObj)
    );

    logger.info('Result is:', lot);

    return lot;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const queryLot = async queryObj => {
  try {
    initNetwork();
    await connectionPromise;

    const lotContract = network.getContract('aimcontract', 'org.aim.lot');

    const res = await txUtils.queryLot(lotContract, JSON.stringify(queryObj));

    logger.info('complete.', res);

    return res;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const inspect = async inspectionObj => {
  try {
    initNetwork();
    await connectionPromise;

    const inspectionContract = network.getContract(
      'aimcontract',
      'org.aim.inspection'
    );

    const inspection = await txUtils.inspect(
      inspectionContract,
      JSON.stringify(inspectionObj)
    );

    logger.info('Transaction has been evaluated, result is:', inspection);

    return inspection;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const queryInspection = async queryObj => {
  try {
    initNetwork();
    await connectionPromise;

    const inspectionContract = network.getContract(
      'aimcontract',
      'org.aim.inspection'
    );

    const res = await txUtils.queryInspection(
      inspectionContract,
      JSON.stringify(queryObj)
    );

    logger.info('complete.', res);

    return res;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const ship = async shipmentObj => {
  try {
    initNetwork();
    await connectionPromise;

    const shipmentContract = network.getContract(
      'aimcontract',
      'org.aim.shipment'
    );

    const shipment = await txUtils.ship(
      shipmentContract,
      JSON.stringify(shipmentObj)
    );

    logger.info('Transaction has been evaluated, result is:', shipment);

    return shipment;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

const queryShipment = async shipmentByOrderId => {
  try {
    initNetwork();
    await connectionPromise;

    const shipmentContract = network.getContract(
      'aimcontract',
      'org.aim.shipment'
    );

    const res = await txUtils.queryShipment(
      shipmentContract,
      JSON.stringify(shipmentByOrderId)
    );

    logger.info('complete.', res);

    return res;
  } catch (e) {
    logger.error('exception:', e);
  } finally {
    // txUtils.disconnectNetwork();
  }
};

module.exports = {
  placeOrder,
  completeOrder,
  queryOrderSorted,
  getOrderByOrderId,
  createLot,
  routeLot,
  queryLot,
  inspect,
  queryInspection,
  ship,
  queryShipment
};
