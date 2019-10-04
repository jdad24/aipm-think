/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Utility class for ledger state
const State = require('../ledger-api/state');

/**
 * Inspection class extends State class
 * Class will be used by application and smart contract to define a inspection
 */
class Inspection extends State {

    constructor(obj) {
        super(Inspection.getClass(), [obj.inspectionId]);
        Object.assign(this, obj);
    }

    /**
     * Basic getters and setters
    */
    getInspectionId() {
        return this.inspectionId;
    }

    getOrderId() {
        return this.orderId;
    }

    getLotId() {
        return this.lotId;
    }

    getInspectionData() {
        return this.inspectionData;
    }

    static fromBuffer(buffer) {
        return Inspection.deserialize(buffer);
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }

    /**
     * Deserialize a state data to inspection
     * @param {Buffer} data to form back into the object
     */
    static deserialize(data) {
        return State.deserializeClass(data, Inspection);
    }

    /**
     * Factory method to create a inspection object
     */
    static createInstance(inspectionId, orderId, lotId, inspectionData) {
        return new Inspection({ inspectionId, orderId, lotId, inspectionData });
    }

    static getClass() {
        return 'org.aim.inspection';
    }
}

module.exports = Inspection;
