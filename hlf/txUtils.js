/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

const { Gateway } = require('fabric-network');
const logger = require('./logger');
const Inspection = require('./contract/lib/inspection');
const Lot = require('./contract/lib/lot');
const Order = require('./contract/lib/order');
const Shipment = require('./contract/lib/shipment');

const gateway = new Gateway();

exports.connectToNetwork = async (
  connectionProfile,
  connectionOptions,
  channel
) => {
  // Connect to gateway using application specified parameters
  logger.info('Connect to Fabric gateway.');

  await gateway.connect(connectionProfile, connectionOptions);

  logger.info('Use network channel:', channel);

  const network = await gateway.getNetwork(channel);

  return network;
};

exports.disconnectNetwork = async () => {
  logger.info('Disconnect from Fabric gateway.');
  gateway.disconnect();
};

/**
 * create inspection
 * @param {String} inspectionObj serialized object
 */
exports.inspect = async (contract, inspectionObj) => {
  const response = await contract.submitTransaction('inspect', inspectionObj);

  const inspection = Inspection.fromBuffer(response);

  logger.info(`inspection : ${inspection.inspectionId} successfully placed`);
  return inspection;
};

/**
 * query inspection
 * @param {String} query the query string
 */
exports.queryInspection = async (contract, query) => {
  const data = await contract.evaluateTransaction('queryInspections', query);

  const res = Inspection.fromBuffer(data);

  return res;
};

/**
 * create lot
 * @param {String} lotObj serialized object
 */
exports.createLot = async (contract, lotObj) => {
  const response = await contract.submitTransaction('createLot', lotObj);

  const lot = Lot.fromBuffer(response);

  logger.info(`Lot : ${Lot.lotId} successfully created`);
  return lot;
};

/**
 * make decision about lot
 * @param {String} decisionObj serialized object
 */
exports.routeLot = async (contract, decisionObj) => {
  const response = await contract.submitTransaction('routeLot', decisionObj);

  const lot = Lot.fromBuffer(response);

  logger.info(`Successfully made decision about lot : ${lot.lotId}`);
  return lot;
};

/**
 * query lot by lotId
 * @param {String} lotId key
 */
exports.queryLotByLotId = async (contract, lotId) => {
  try {
    const result = await contract.evaluateTransaction('getLotById', lotId);

    const lot = Lot.fromBuffer(result);

    return lot;
  } catch (error) {
    logger.error(`Error processing transaction. ${error}`);
  }
};

/**
 * query lot
 * @param {String} query the query string
 */
exports.queryLot = async (contract, query) => {
  const data = await contract.evaluateTransaction('queryLots', query);

  const res = Lot.fromBuffer(data);

  return res;
};

/**
 * Place order
 * @param {String} orderObj serialized object
 */
exports.placeOrder = async (contract, orderObj) => {
  logger.info('Submit place order transaction.');

  const placeOrderResponse = await contract.submitTransaction(
    'placeOrder',
    orderObj
  );

  const order = Order.fromBuffer(placeOrderResponse);

  logger.info(`order : ${order.orderId} successfully placed`);

  return order;
};


/**
 * Ship order
 * @param {String} orderId order Id
 */
exports.shipOrder = async (contract, orderId) => {
  logger.info('Ship order');

  const shipOrderResponse = await contract.submitTransaction(
    'shipOrder',
    orderId
  );

  const order = Order.fromBuffer(shipOrderResponse);

  logger.info(`order : ${order.orderId} successfully shipped`);

  return order;
};


/**
 * Place order
 * @param {String} orderId order Id
 */
exports.completeOrder = async (contract, orderId) => {
  logger.info('Complete order');

  const completeOrderResponse = await contract.submitTransaction(
    'completeOrder',
    orderId
  );

  const order = Order.fromBuffer(completeOrderResponse);

  logger.info(`order : ${order.orderId} successfully completed`);

  return order;
};

/**
 * query order by orderId
 * @param {String} orderId key
 */
exports.getOrderByOrderId = async (contract, orderId) => {
  const result = await contract.evaluateTransaction('getOrder', orderId);
  logger.info('result', result);
  const order = Order.fromBuffer(result);

  return order;
};

/**
 * query order
 * @param {String} query the query string
 */
exports.queryOrder = async (contract, query) => {
  const data = await contract.evaluateTransaction('queryOrders', query);

  const res = Order.fromBuffer(data);

  return res;
};

/**
 * create shipment
 * @param {String} shipmentObj serialized object
 */
exports.ship = async (contract, shipmentObj) => {
  const response = await contract.submitTransaction('ship', shipmentObj);

  const shipment = Shipment.fromBuffer(response);

  logger.info(`shipment : ${shipment.shipmentId} successfully created`);
  return shipment;
};

/**
 * query shipment
 * @param {String} query the query string
 */
exports.queryShipment = async (contract, query) => {
  const data = await contract.evaluateTransaction('queryShipments', query);

  const res = Shipment.fromBuffer(data);

  return res;
};
