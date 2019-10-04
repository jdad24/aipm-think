/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Utility class for collections of ledger states --  a state list
const StateList = require('../ledger-api/stateList');

const Inspection = require('./inspection');

class InspectionList extends StateList {

    constructor(ctx) {
        super(ctx, 'org.aim.inspection');
        this.use(Inspection);
    }

    async addInspection(inspection) {
        return this.addState(inspection);
    }

    async getInspection(key) {
        return this.getState(key);
    }

    async updateInspection(inspection) {
        return this.updateState(inspection);
    }
}


module.exports = InspectionList;