const express = require('express')
const router = express.Router()

const {brandCtrl}  =require('../controllers/brandCtrl')



router.route('/indexRoute')
      .get(brandCtrl)

module.exports = router