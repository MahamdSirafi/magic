/* eslint-disable prettier/prettier */
import { Mover } from '../entities/mover.entity';
import * as mongoose from 'mongoose';
export const MoverSchema = new mongoose.Schema<Mover>(
  {
    weight_limi: { type: Number, required: [true, 'Enter weight limit'] },
    energy: {
      type: Number,
      required: [true, 'Enter total magic power'],
    },
    state: {
      type: String,
      enum: ['resting', 'loading', 'on a mission', 'done'],
      // default: 'resting',
    },
  },
  { timestamps: true },
);
