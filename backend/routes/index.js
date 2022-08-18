const express = require('express');
const router = express.Router();

const { brandCtrl } = require('../controllers/brandCtrl');
const { bootCampRouter } = require('./bootcamps');

router.route('/indexRoute').get(brandCtrl);

module.exports = bootCampRouter;
