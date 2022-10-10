'use strict'

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();

class userRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('users').doc().set(data);
        return res;
    }

    async update(id, data) {
        let user = await firestore.collection('users').doc(id);
        let res = await user.update(data);
        return res;
    }

    async getAll() {
        let user = await firestore.collection('users');
        let res = await user.get();
        const userArray = [];
        res.forEach( doc => {
            const user = new User(
                //doc.id,
                doc.data().name,
                doc.data().address,
                doc.data().cpf,
                doc.data().telephone
                
            );
            userArray.push(user);
        })
        return userArray;
    }

    async getById(id) {
        let user = await firestore.collection('users').doc(id);
        let res = await user.get();
        return res.data();
    }

    async delete(id) {
        return await firestore.collection('users').doc(id).delete();
    }
}

module.exports = userRepository;