/* eslint-disable prettier/prettier */
import { Log } from '../entities/log.entity';
import * as mongoose from 'mongoose';
export const LogSchema = new mongoose.Schema<Log>(
  {
    log: String,
  },
  { timestamps: true },
);
