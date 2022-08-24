const asyncHandler = require('express-async-handler');
const { JsonWebTokenError } = require('jsonwebtoken');

const BootcampSvc = require('../services/BootCampSVC');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getAllBootCampCtrl = asyncHandler(async (req, res, next) => {
  const reqQuery = { ...req.query };

  const removeFields = ['select', 'sort'];

  removeFields.forEach((param) => delete reqQuery[param]);

  let queryString = JSON.stringify(req.query);

  queryString = queryString.replace(
    /\b(gt|gte|lt|lte)\b/g,
    (match) => `$${match}`
  );

  let fields = [];
  if (req.query.select) {
    fields = req.query.select.split(',').join(' ');
  }

  let sortBy = [];
  if (req.query.sort) {
    sortBy = req.query.sort.split(',').join(' ');
  } else {
    sortBy = '-createdAt';
  }

  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 100;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const bootCamps = await BootcampSvc.getAllBootCamp(
    JSON.parse(queryString),
    fields,
    sortBy,
    page,
    limit,
    startIndex
  );
  res.status(200).json({
    success: true,
    count: bootCamps.length,
    message: bootCamps,
  });
});

// @desc    Get s bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getBootCampCtrl = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootcampSvc.getBootCamp(req.params.id);
  if (!bootcamp) {
    // return res.status(400).json({
    //   success: false,
    //   message: 'Bootcamp does not exists',
    // });
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ message: bootcamp });
});

const createBootCampCtrl = asyncHandler(async (req, res, next) => {
  const bootCamp = await BootcampSvc.createBootCamp(req.body);

  res.status(200).json({ success: true, message: bootCamp });
});

const updateBootCampCtrl = asyncHandler(async (req, res, next) => {
  const bootCamp = await BootcampSvc.updateBootCamp(req.params.id, req.body);
  console.log(' Updated bootcamp ', bootCamp);
  if (!bootCamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Bootcamp could not be updated as it does not exists',
    //  });
  }
  res.status(200).json({ success: true, message: bootCamp });
});

const deleteBootCampCtrl = asyncHandler(async (req, res, next) => {
  const bootCamp = await BootcampSvc.getBootCamp(req.params.id);
  if (!bootCamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  bootCamp.delete();
  res.status(200).json({ success: true, message: 'Bootcamp Deleted' });
});

module.exports = {
  getAllBootCampCtrl,
  createBootCampCtrl,
  updateBootCampCtrl,
  deleteBootCampCtrl,
  getBootCampCtrl,
};
