'use strict'

const firebase = require('../db');
const Library = require('../models/library');
const firestore = firebase.firestore();

class libraryRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('librarys').doc().set(data);
        return res;
    }

    async update(id, data) {
        let library = await firestore.collection('librarys').doc(id);
        let res = await library.update(data);
        return res;
    }

    async getAll() {
        let library = await firestore.collection('librarys');
        let res = await library.get();
        const libraryArray = [];
        res.forEach( doc => {
            const library = new library(
                doc.id,
                doc.data().registration,
                doc.data().loan,
                doc.data().escription,
                doc.data().devolution
               
            );
            libraryArray.push(library);
        })
        return libraryArray;
    }

    async getById(id) {
        let library = await firestore.collection('librarys').doc(id);
        let res = await library.get();
        return res.data();
    }

    async delete(id) {
        return await firestore.collection('librarys').doc(id).delete();
    }
}

module.exports = libraryRepository;