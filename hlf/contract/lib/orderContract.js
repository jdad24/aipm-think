/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Fabric smart contract classes
const { Contract, Context } = require('fabric-contract-api');

// orderNet specifc classes
const Order = require('./order');
const OrderList = require('./orderList');

/**
 * A custom context provides easy access to list of all orders
 */
class OrderContext extends Context {
    constructor() {
        super();
        // All orders are held in a list of orders
        this.orderList = new OrderList(this);
    }
}

/**
 * Define order smart contract by extending Fabric Contract class
 *
 */
class OrderContract extends Contract {
    constructor() {
        // Unique name when multiple contracts per chaincode file
        super('org.aim.order');
    }

    /**
     * Define a custom context for order
     */
    createContext() {
        return new OrderContext();
    }

    /**
     * Instantiate to perform any setup of the ledger that might be required.
     * @param {Context} ctx the transaction context
     */
    async instantiate(ctx) {
        // No implementation required with this example
        // It could be where data migration is performed, if necessary
        console.log('Instantiate the contract', 'org.aim.order');
    }

    /**
     * Place order
     *
     * @param {Context} ctx the transaction context
     * @param {String} data order object
     */
    async placeOrder(ctx, data) {
        const obj = JSON.parse(data);

        if (!obj.orderDate) {
            obj.orderDate = new Date();
        } else {
            obj.orderDate = new Date(obj.orderDate);
        }

        if (!obj.deliverBy) {
            const clonedDate = new Date(obj.orderDate.getTime());
            obj.deliverBy = new Date(
                clonedDate.setDate(obj.orderDate.getDate() + 30)
            );
        } else {
            obj.deliverBy = new Date(obj.deliverBy);
        }

        // create an instance of the order
        let order = Order.createInstance(
            obj.orderId,
            obj.masterOrderId,
            obj.item,
            obj.orderDate.toISOString(),
            obj.deliverBy.toISOString(),
            obj.supplierAddress,
            obj.billTo,
            obj.shipTo,
            obj.contractId
        );

        // Smart contract, rather than order, moves order into PLACED state
        order.setPlaced();

        // Add the order to the list of all similar orders in the ledger world state
        await ctx.orderList.addOrder(order);

        // Must return a serialized order to caller of smart contract
        console.log('success', order);

        return order;
    }

    /**
     * ship order
     *
     * @param {Context} ctx the transaction context
     * @param {String} orderId order id
     */
    async shipOrder(ctx, orderId) {
        let orderKey = Order.makeKey([orderId]);

        let order = await ctx.orderList.getOrder(orderKey);

        if (!order) {
            throw new Error('Order ' + orderId + ' not found');
        }

        if (order.isShipped()) {
            throw new Error('Order ' + orderId + 'already shipped');
        }

        order.setShipped();

        await ctx.orderList.updateOrder(order);

        return order;
    }

    /**
     * complete order
     *
     * @param {Context} ctx the transaction context
     * @param {String} orderId order id
     */
    async completeOrder(ctx, orderId) {
        let orderKey = Order.makeKey([orderId]);

        let order = await ctx.orderList.getOrder(orderKey);

        if (!order) {
            throw new Error('Order ' + orderId + ' not found');
        }

        // Check order is not COMPLETED
        if (order.isCompleted()) {
            throw new Error('Order ' + orderId + ' already completed');
        }

        order.setCompleted();

        await ctx.orderList.updateOrder(order);

        return order;
    }

    /**
     * get order
     *
     * @param {Context} ctx the transaction context
     * @param {String} orderId order id
     */
    async getOrder(ctx, orderId) {
        let orderKey = Order.makeKey([orderId]);

        console.log('query order by key', orderKey);

        let order = await ctx.orderList.getOrder(orderKey);

        if (!order) {
            throw new Error('Order ' + orderId + ' not found');
        }

        return order;
    }

    /**
     * get order by query
     *
     * @param {Context} ctx the transaction context
     * @param {String} query the query string
     */
    async queryOrders(ctx, query) {
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

module.exports = OrderContract;
