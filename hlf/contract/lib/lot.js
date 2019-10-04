/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Utility class for ledger state
const State = require('../ledger-api/state');

const lotDisposition = {
    PENDING: 1,
    ACCEPTED: 2,
    REJECTED: 3
};
/**
 * Lot class extends State class
 * Class will be used by application and smart contract to define a lot
 */
class Lot extends State {
    constructor(obj) {
        super(Lot.getClass(), [obj.lotId]);
        Object.assign(this, obj);
    }

    /**
     * Basic getters and setters
     */
    getLotId() {
        return this.lotId;
    }

    getOrderId() {
        return this.orderId;
    }

    getQuantity() {
        return this.quantity;
    }

    /**
     * Useful methods to encapsulate lot states
     */
    setPending() {
        this.currentState = lotDisposition.PENDING;
    }

    setAccepted() {
        this.currentState = lotDisposition.ACCEPTED;
    }

    setRejected() {
        this.currentState = lotDisposition.REJECTED;
    }

    isPending() {
        return this.currentState === lotDisposition.PENDING;
    }

    isAccepted() {
        return this.currentState === lotDisposition.ACCEPTED;
    }

    isRejected() {
        return this.currentState === lotDisposition.REJECTED;
    }

    static fromBuffer(buffer) {
        return Lot.deserialize(buffer);
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }

    /**
     * Deserialize a state data to lot
     * @param {Buffer} data to form back into the object
     */
    static deserialize(data) {
        return State.deserializeClass(data, Lot);
    }

    /**
     * Factory method to create a lot object
     */
    static createInstance(lotId, orderId, quantity) {
        return new Lot({ lotId, orderId, quantity });
    }

    static getClass() {
        return 'org.aim.lot';
    }
}

module.exports = Lot;
