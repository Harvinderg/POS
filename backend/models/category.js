import mongoose from 'mongoose';
import validator from 'validator';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category Name  is required.'],
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
    },
    active: {
      type: Boolean,
      default: false,
    },

    dateExpires: Date,
  },
  {
    timestamps: true,
  }
);

categorySchema.pre('save', async (next) => {
  this.dateExpires = Date.now() + 7 * 24 * 60 * 60 * 1000;
});
module.exports = mongoose.model('Category', categorySchema);
