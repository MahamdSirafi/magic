/* eslint-disable prettier/prettier */
import { Item } from '../entities/item.entity';
import * as mongoose from 'mongoose';
export const ItemSchema = new mongoose.Schema<Item>(
  {
    name: String,
    weight: Number,
  },
  { timestamps: true },
);
