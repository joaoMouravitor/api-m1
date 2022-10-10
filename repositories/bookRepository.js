'use strict'

const firebase = require('../db');
const Book = require('../models/book');
const firestore = firebase.firestore();

class bookRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('books').doc().set(data);
        return res;
    }

    async update(id, data) {
        let book = await firestore.collection('books').doc(id);
        let res = await book.update(data);
        return res;
    }

    async getAll() {
        let book = await firestore.collection('books');
        let res = await book.get();
        const bookArray = [];
        res.forEach( doc => {
            const book = new book(
                //doc.id,
                doc.data().name,
                doc.data().author,
                doc.data().description,
                doc.data().publisher
            );
            bookArray.push(book);
        })
        return bookArray;
    }

    async getById(id) {
        let book = await firestore.collection('books').doc(id);
        let res = await book.get();
        return res.data();
    }

    async delete(id) {
        return await firestore.collection('books').doc(id).delete();
    }
}

module.exports = bookRepository;