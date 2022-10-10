'use strict'

const firebase = require('../db');
const Devolution = require('../models/devolution');
const firestore = firebase.firestore();

class devolutionRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('devolutions').doc().set(data);
        return res;
    }

    async update(id, data) {
        let devolution = await firestore.collection('devolutions').doc(id);
        let res = await devolution.update(data);
        return res;
    }

    async getAll() {
        let devolution = await firestore.collection('devolutions');
        let res = await devolution.get();
        const devolutionArray = [];
        res.forEach( doc => {
            const devolution = new devolution(
                //doc.id,
                doc.data().name,
                doc.data().telephone,
                doc.data().book,
                doc.data().author,
                doc.data().date
            );
            devolutionArray.push(devolution);
        })
        return devolutionArray;
    }

    async getById(id) {
        let devolution = await firestore.collection('devolutions').doc(id);
        let res = await devolution.get();
        return res.data();
    }

    async delete(id) {
        return await firestore.collection('devolutions').doc(id).delete();
    }
}

module.exports = devolutionRepository;