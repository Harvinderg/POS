const express = require('express');
const router = express.Router();

const {
  getAllBootCampCtrl,
  getBootCampCtrl,
  createBootCampCtrl,
  updateBootCampCtrl,
  deleteBootCampCtrl,
} = require('../controllers/bootCampsCtrl');

router.route('/').get(getAllBootCampCtrl).post(createBootCampCtrl);

router
  .route('/:id')
  .get(getBootCampCtrl)
  .put(updateBootCampCtrl)
  .delete(deleteBootCampCtrl);

module.exports = router;
