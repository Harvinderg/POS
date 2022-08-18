// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getAllBootCampCtrl = (req, res, next) => {
  res.status(200).json({ message: 'Show All Boot Camp' });
};

// @desc    Get s bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getBootCampCtrl = (req, res, next) => {
  res.status(200).json({ message: ` Find Boot Camp ${req.param.id}` });
};

const createBootCampCtrl = (req, res, next) => {
  res.status(200).json({ message: 'Create Boot Camp' });
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
