'use strict'

require('../models/loan');
const repository = require('../repositories/loanRepository');

function loanController () {

}

loanController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

loanController.prototype.put = async (req,res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

loanController.prototype.get = async (req,res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}

loanController.prototype.getById = async (req,res) => {
    let loan = await new repository().getById(req.params.id);
    res.status(200).send(loan);
}

loanController.prototype.delete = async (req,res) => {
    let loan = await new repository().delete(req.params.id);
    res.status(200).send(loan);
}

module.exports = loanController;