'use strict'

require('../models/library');
const repository = require('../repositories/libraryRepository');

function libraryController () {

}

libraryController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

libraryController.prototype.put = async (req,res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

libraryController.prototype.get = async (req,res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}

libraryController.prototype.getById = async (req,res) => {
    let library = await new repository().getById(req.params.id);
    res.status(200).send(library);
}

libraryController.prototype.delete = async (req,res) => {
    let library = await new repository().delete(req.params.id);
    res.status(200).send(library);
}

module.exports = libraryController;