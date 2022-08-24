const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  getAllBootCampCtrl,
  getBootCampCtrl,
  createBootCampCtrl,
  updateBootCampCtrl,
  deleteBootCampCtrl,
} = require('../controllers/bootCampsCtrl');

const courseRouter = require('./courses');

//Reroute to other resources
router.use('/:bootcampId/courses', courseRouter);

router.route('/').get(getAllBootCampCtrl).post(createBootCampCtrl);

router
  .route('/:id')
  .get(getBootCampCtrl)
  .put(updateBootCampCtrl)
  .delete(deleteBootCampCtrl);

module.exports = router;
