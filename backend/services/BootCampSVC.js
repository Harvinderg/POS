const Bootcamp = require('../models/BootCamp');

exports.getAllBootCamp = (
  queryString,
  fields,
  sortBy,
  page,
  limit,
  startIndex
) => {
  let query = Bootcamp.find(queryString)
    .populate('courses')
    .select(fields)
    .sort(sortBy)
    .skip(startIndex)
    .limit(limit);
  return query;
};

exports.getBootCamp = (id) => {
  return Bootcamp.findById(id);
};

exports.createBootCamp = (data) => {
  return Bootcamp.create(data);
};

exports.updateBootCamp = (id, data) => {
  return Bootcamp.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

exports.deleteBootCampById = (id) => {
  return Bootcamp.findByIdAndDelete(id);
};

exports.removeBootcampy = () => {
  Bootcamp.remove();
};
