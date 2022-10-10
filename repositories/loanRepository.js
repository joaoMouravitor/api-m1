'use strict'

const firebase = require('../db');
const Loan = require('../models/loan');
const firestore = firebase.firestore();

class loanRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('loans').doc().set(data);
        return res;
    }

    async update(id, data) {
        let loan = await firestore.collection('loans').doc(id);
        let res = await loan.update(data);
        return res;
    }

    async getAll() {
        let loan = await firestore.collection('loans');
        let res = await loan.get();
        const loanArray = [];
        res.forEach( doc => {
            const loan = new loan(
                //doc.id,
                doc.data().name,
                doc.data().telephone,
                doc.data().book,
                doc.data().author,
                doc.data().date
            );
            loanArray.push(loan);
        })
        return loanArray;
    }

    async getById(id) {
        let loan = await firestore.collection('loans').doc(id);
        let res = await loan.get();
        return res.data();
    }

    async delete(id) {
        return await firestore.collection('loans').doc(id).delete();
    }
}

module.exports = loanRepository;