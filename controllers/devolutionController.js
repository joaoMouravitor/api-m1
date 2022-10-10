'use strict'

require('../models/devolution');
const repository = require('../repositories/devolutionRepository');

function devolutionController () {

}

devolutionController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
}

devolutionController.prototype.put = async (req,res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
}

devolutionController.prototype.get = async (req,res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
}

devolutionController.prototype.getById = async (req,res) => {
    let devolution = await new repository().getById(req.params.id);
    res.status(200).send(devolution);
}

devolutionController.prototype.delete = async (req,res) => {
    let devolution = await new repository().delete(req.params.id);
    res.status(200).send(devolution);
}

module.exports = devolutionController;