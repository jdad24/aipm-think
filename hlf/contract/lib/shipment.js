/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Utility class for ledger state
const State = require('../ledger-api/state');

/**
 * Shipment class extends State class
 * Class will be used by application and smart contract to define a shipment
 */
class Shipment extends State {
    constructor(obj) {
        super(Shipment.getClass(), [obj.shipmentId]);
        Object.assign(this, obj);
    }

    /**
     * Basic getters and setters
     */
    getShipmentId() {
        return this.shipmentId;
    }

    getOrderId() {
        return this.orderId;
    }

    getLotId() {
        return this.lotId;
    }

    getShipDate() {
        return this.shipDate;
    }

    getShipFrom() {
        return this.shipFrom;
    }

    getShipTo() {
        return this.shipTo;
    }

    getItem() {
        return this.item;
    }

    static fromBuffer(buffer) {
        return Shipment.deserialize(buffer);
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }

    /**
     * Deserialize a state data to shipment
     * @param {Buffer} data to form back into the object
     */
    static deserialize(data) {
        return State.deserializeClass(data, Shipment);
    }

    /**
     * Factory method to create a shipment object
     */
    static createInstance(
        shipmentId,
        orderId,
        lotId,
        shipDate,
        shipFrom,
        shipTo,
        item
    ) {
        return new Shipment({
            shipmentId,
            orderId,
            lotId,
            shipDate,
            shipFrom,
            shipTo,
            item
        });
    }

    static getClass() {
        return 'org.aim.shipment';
    }
}

module.exports = Shipment;
