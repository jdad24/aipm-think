/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Utility class for collections of ledger states --  a state list
const StateList = require('../ledger-api/stateList');

const Lot = require('./lot');

class LotList extends StateList {

    constructor(ctx) {
        super(ctx, 'org.aim.lot');
        this.use(Lot);
    }

    async addLot(lot) {
        return this.addState(lot);
    }

    async getLot(key) {
        return this.getState(key);
    }

    async updateLot(lot) {
        return this.updateState(lot);
    }
}


module.exports = LotList;