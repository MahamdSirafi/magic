/* eslint-disable prettier/prettier */
import { Mi } from '../entities/mi.entity';
import * as mongoose from 'mongoose';
export const MiSchema = new mongoose.Schema<Mi>(
  {
    mover: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mover',
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
