/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Fabric smart contract classes
const { Contract, Context } = require('fabric-contract-api');

const Shipment = require('./shipment');
const ShipmentList = require('./shipmentList');
// orderNet specifc classes
const Order = require('./order');
const OrderList = require('./orderList');

/**
 * A custom context provides easy access to list of all shipments
 */
class ShipmentContext extends Context {
    constructor() {
        super();
        // All shipments are held in a list of shipments
        this.shipmentList = new ShipmentList(this);
        this.orderList = new OrderList(this);
    }
}

/**
 * Define shipment smart contract by extending Fabric Contract class
 *
 */
class ShipmentContract extends Contract {
    constructor() {
        // Unique name when multiple contracts per chaincode file
        super('org.aim.shipment');
    }

    /**
     * Define a custom context for shipment
     */
    createContext() {
        return new ShipmentContext();
    }

    /**
     * Instantiate to perform any setup of the ledger that might be required.
     * @param {Context} ctx the transaction context
     */
    async instantiate(ctx) {
        // No implementation required with this example
        // It could be where data migration is performed, if necessary
        console.log('Instantiate the contract', 'org,aim.shipment');
    }

    /**
     * Ship
     *
     * @param {Context} ctx the transaction context
     * @param {String} data shipment object
     */
    async ship(ctx, data) {
        const obj = JSON.parse(data);

        // create an instance of the shipment
        let shipment = Shipment.createInstance(
            obj.shipmentId,
            obj.orderId,
            obj.lotId,
            obj.shipDate,
            obj.shipFrom,
            obj.shipTo,
            obj.item
        );

        // Add the shipment to the list of all similar shipments in the ledger world state
        await ctx.shipmentList.addShipment(shipment);

        // Must return a serialized shipment to caller of smart contract
        console.log('success', shipment);

        let orderKey = Order.makeKey([obj.orderId]);

        let order = await ctx.orderList.getOrder(orderKey);

        if (!order) {
            throw new Error('Order ' + obj.orderId + ' not found');
        }

        if (order.isShipped()) {
            throw new Error('Order ' + obj.orderId + 'already shipped');
        }

        order.setShipped();

        await ctx.orderList.updateOrder(order);

        return shipment;
    }

    /**
     * get shipment by query
     *
     * @param {Context} ctx the transaction context
     * @param {String} query the query string
     */
    async queryShipments(ctx, query) {
        const iterator = await ctx.stub.getQueryResult(query);

        const allResults = [];
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

}

module.exports = ShipmentContract;
