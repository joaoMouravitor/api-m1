'use strict'

require('../models/user');
const repository = require('../repositories/userRepository');

function userController () {

}

userController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

userController.prototype.put = async (req,res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

userController.prototype.get = async (req,res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}

userController.prototype.getById = async (req,res) => {
    let user = await new repository().getById(req.params.id);
    res.status(200).send(user);
}

userController.prototype.delete = async (req,res) => {
    let user = await new repository().delete(req.params.id);
    res.status(200).send(user);
}

module.exports = userController;