/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Utility class for ledger state
const State = require('../ledger-api/state');

// Enumerate order state values
const orderState = {
    PLACED: 1,
    ACKNOWLEDGED: 2,
    SHIPPED: 3,
    RECEIVED: 4,
    COMPLETED: 5
};

/**
 * Order class extends State class
 * Class will be used by application and smart contract to define a order
 */
class Order extends State {

    constructor(obj) {
        super(Order.getClass(), [obj.orderId]);
        Object.assign(this, obj);
    }

    /**
     * Basic getters and setters
    */
    getOrderId() {
        return this.orderId;
    }

    getMasterOrderId() {
        return this.masterOrderId;
    }

    // setMasterOrderId(masterOrderId) {
    //     this.masterOrderId = masterOrderId;
    // }

    getOrderDate() {
        return this.orderDate;
    }

    // setOrderDate(orderDate) {
    //     this.orderDate = orderDate;
    // }

    getDeliverBy() {
        return this.deliverBy;
    }

    // setDeliverBy(date) {
    //     this.deliverBy = date;
    // }

    getContractId() {
        return this.contractId;
    }

    // setContractId(Id) {
    //     this.contractId = Id;
    // }

    /**
     * Useful methods to encapsulate order states
     */
    setPlaced() {
        this.currentState = orderState.PLACED;
        this.status = 'PLACED';
    }

    setAcknowledged() {
        this.currentState = orderState.ACKNOWLEDGED;
        this.status = 'ACKNOWLEDGED';
    }

    setShipped() {
        this.currentState = orderState.SHIPPED;
        this.status = 'SHIPPED';
    }

    setReceived() {
        this.currentState = orderState.RECEIVED;
        this.status = 'RECEIVED';
    }

    setCompleted() {
        this.currentState = orderState.COMPLETED;
        this.status = 'COMPLETED';
    }

    isPlaced() {
        return this.currentState === orderState.PLACED;
    }

    isAcknowledged() {
        return this.currentState === orderState.ACKNOWLEDGED;
    }

    isShipped() {
        return this.currentState === orderState.SHIPPED;
    }

    isReceived() {
        return this.currentState === orderState.RECEIVED;
    }

    isCompleted() {
        return this.currentState === orderState.COMPLETED;
    }

    static fromBuffer(buffer) {
        return Order.deserialize(buffer);
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }

    /**
     * Deserialize a state data to order
     * @param {Buffer} data to form back into the object
     */
    static deserialize(data) {
        return State.deserializeClass(data, Order);
    }

    /**
     * Factory method to create a order object
     */
    static createInstance(orderId, masterOrderId, item, orderDate, deliverBy, supplierAddress, billTo, shipTo, contractId) {
        return new Order({ orderId, masterOrderId, item, orderDate, deliverBy, supplierAddress, billTo, shipTo, contractId });
    }

    static getClass() {
        return 'org.aim.order';
    }
}

module.exports = Order;
