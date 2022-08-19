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
