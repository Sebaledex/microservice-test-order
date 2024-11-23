import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
});

OrderSchema.index({ name: 1 }, { unique: true });
