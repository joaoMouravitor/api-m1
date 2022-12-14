'use strict'

const express = require('express');
const controller = require('../controllers/bookController');
const router = express.Router();

let _ctrl = new controller();

router.get('/', _ctrl.get);
router.post('/', _ctrl.post);
router.get('/:id', _ctrl.getById);
router.put('/:id', _ctrl.put);
router.delete('/:id', _ctrl.delete);

module.exports = router;
