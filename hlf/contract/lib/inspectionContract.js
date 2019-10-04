/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Fabric smart contract classes
const { Contract, Context } = require('fabric-contract-api');

const Inspection = require('./inspection');
const InspectionList = require('./inspectionList');

/**
 * A custom context provides easy access to list of all inspections
 */
class InspectionContext extends Context {
    constructor() {
        super();
        // All inspections are held in a list of inspections
        this.inspectionList = new InspectionList(this);
    }
}

/**
 * Define inspection smart contract by extending Fabric Contract class
 *
 */
class InspectionContract extends Contract {
    constructor() {
        // Unique name when multiple contracts per chaincode file
        super('org.aim.inspection');
    }

    /**
     * Define a custom context for inspection
     */
    createContext() {
        return new InspectionContext();
    }

    /**
     * Instantiate to perform any setup of the ledger that might be required.
     * @param {Context} ctx the transaction context
     */
    async instantiate(ctx) {
        // No implementation required with this example
        // It could be where data migration is performed, if necessary
        console.log('Instantiate the contract', 'org.aim.inspection');
    }

    /**
     * Inspect
     *
     * @param {Context} ctx the transaction context
     * @param {String} data inspection object
     */
    async inspect(ctx, data) {
        const obj = JSON.parse(data);

        // create an instance of the inspection
        let inspection = Inspection.createInstance(
            obj.inspectionId,
            obj.orderId,
            obj.lotId,
            obj.inspectionData
        );

        // Add the inspection to the list of all similar inspections in the ledger world state
        await ctx.inspectionList.addInspection(inspection);

        // Must return a serialized inspection to caller of smart contract
        console.log('success', inspection);

        return inspection;
    }

    /**
     * get inspection by query
     *
     * @param {Context} ctx the transaction context
     * @param {String} query the query string
     */
    async queryInspections(ctx, query) {
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

module.exports = InspectionContract;
