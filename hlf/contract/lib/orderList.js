/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Utility class for collections of ledger states --  a state list
const StateList = require('../ledger-api/stateList');

const Order = require('./order');

class OrderList extends StateList {

    constructor(ctx) {
        super(ctx, 'org.aim.order');
        this.use(Order);
    }

    async addOrder(order) {
        return this.addState(order);
    }

    async getOrder(key) {
        return this.getState(key);
    }

    async updateOrder(order) {
        return this.updateState(order);
    }
}


module.exports = OrderList;