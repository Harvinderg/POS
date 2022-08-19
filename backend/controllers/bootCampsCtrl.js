const BootcampSvc = require('../services/BootCampSVC');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getAllBootCampCtrl = async (req, res, next) => {
  console.log(' Get all boot camps');
  try {
    const bootCamps = await BootcampSvc.getAllBootCamp();
    res.status(200).json({
      success: true,
      message: bootCamps,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get s bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getBootCampCtrl = async (req, res, next) => {
  try {
    const bootcamp = await BootcampSvc.getBootCamp(req.params.id);
    console.log('--------- ' + bootcamp);
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        message: 'Bootcamp does not exists',
      });
    }
    res.status(200).json({ message: bootcamp });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const createBootCampCtrl = async (req, res, next) => {
  try {
    const bootCamp = await BootcampSvc.createBootCamp(req.body);

    res.status(200).json({ success: true, message: bootCamp });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBootCampCtrl = (req, res, next) => {
  res.status(200).json({ message: 'Update Boot Camp' });
};

const deleteBootCampCtrl = (req, res, next) => {
  res.status(200).json({ message: 'Delete Boot Camp' });
};

module.exports = {
  getAllBootCampCtrl,
  createBootCampCtrl,
  updateBootCampCtrl,
  deleteBootCampCtrl,
  getBootCampCtrl,
};
