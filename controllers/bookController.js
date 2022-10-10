'use strict'

require('../models/book');
const repository = require('../repositories/bookRepository');

function bookController () {

}

bookController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

bookController.prototype.put = async (req,res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

bookController.prototype.get = async (req,res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}

bookController.prototype.getById = async (req,res) => {
    let book = await new repository().getById(req.params.id);
    res.status(200).send(book);
}

bookController.prototype.delete = async (req,res) => {
    let book = await new repository().delete(req.params.id);
    res.status(200).send(book);
}

module.exports = bookController;