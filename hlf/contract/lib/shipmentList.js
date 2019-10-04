/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Utility class for collections of ledger states --  a state list
const StateList = require('../ledger-api/stateList');

const Shipment = require('./shipment');

class ShipmentList extends StateList {

    constructor(ctx) {
        super(ctx, 'org.aim.shipment');
        this.use(Shipment);
    }

    async addShipment(shipment) {
        return this.addState(shipment);
    }

    async getShipment(key) {
        return this.getState(key);
    }

    async updateShipment(shipment) {
        return this.updateState(shipment);
    }
}


module.exports = ShipmentList;