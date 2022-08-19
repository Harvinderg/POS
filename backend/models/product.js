import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

module.export = productSchema('Product', productSchema);
