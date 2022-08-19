import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    description: {
      type: String,
    },
    sku: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamp: true,
  }
);

module.export = companySchema('company', companySchema);
