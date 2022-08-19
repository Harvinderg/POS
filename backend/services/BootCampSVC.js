const Bootcamp = require('../models/BootCamp');

exports.getAllBootCamp = () => {
  return Bootcamp.find();
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

exports.deleteBootCamp = (id) => {
  return Bootcamp.findByIdAndDelete(id);
};
