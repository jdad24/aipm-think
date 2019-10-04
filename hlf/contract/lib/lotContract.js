/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Fabric smart contract classes
const { Contract, Context } = require('fabric-contract-api');

const Lot = require('./lot');
const LotList = require('./lotList');

/**
 * A custom context provides easy access to list of all lots
 */
class LotContext extends Context {
    constructor() {
        super();
        // All lots are held in a list of lots
        this.lotList = new LotList(this);
    }
}

/**
 * Define lot smart contract by extending Fabric Contract class
 *
 */
class LotContract extends Contract {
    constructor() {
        // Unique name when multiple contracts per chaincode file
        super('org.aim.lot');
    }

    /**
     * Define a custom context for lot
     */
    createContext() {
        return new LotContext();
    }

    /**
     * Instantiate to perform any setup of the ledger that might be required.
     * @param {Context} ctx the transaction context
     */
    async instantiate(ctx) {
        // No implementation required with this example
        // It could be where data migration is performed, if necessary
        console.log('Instantiate the contract', 'org.aim.lot');
    }

    /**
     * create lot
     *
     * @param {Context} ctx the transaction context
     * @param {String} data order object
     */
    async createLot(ctx, data) {
        const obj = JSON.parse(data);

        // create an instance of the lot
        let lot = Lot.createInstance(obj.lotId, obj.orderId, obj.quantity);

        lot.setPending();

        // Add the lot to the list of all similar lots in the ledger world state
        await ctx.lotList.addLot(lot);

        // Must return a serialized lot to caller of smart contract
        console.log('success', lot);

        return lot;
    }

    /**
     * make decision about lot
     *
     * @param {Context} ctx the transaction context
     * @param {String} decision order object
     */
    async routeLot(ctx, decision) {
        const obj = JSON.parse(decision);

        let key = Lot.makeKey([obj.lotId]);

        console.log('query order by key', key);

        let lot = await ctx.lotList.getLot(key);

        if (!lot) {
            throw new Error('Lot ' + obj.lotId + ' not found');
        }

        switch (obj.disposition) {
            case 'ACCEPTED':
                lot.setAccepted();
                break;
            case 'PENDING':
                lot.setPending();
                break;
            case 'REJECTED':
                lot.setRejected();
                break;
            default:
                break;
        }

        await ctx.lotList.updateLot(lot);

        // Must return a serialized lot to caller of smart contract
        console.log('success', lot);

        return lot;
    }

    /**
     * get lot by lot id
     *
     * @param {Context} ctx the transaction context
     * @param {String} id lot id
     */
    async getLotById(ctx, id) {
        let key = Lot.makeKey([id]);

        console.log('query order by key', key);

        let lot = await ctx.lotList.getLot(key);

        if (!lot) {
            throw new Error('Lot ' + id + ' not found');
        }

        return lot;
    }

    /**
     * get lot by query
     *
     * @param {Context} ctx the transaction context
     * @param {String} query the query string
     */
    async queryLots(ctx, query) {
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

module.exports = LotContract;
