import mongoose, { Mongoose } from 'mongoose';

const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongooseSchema('Brand', brandSchema);
