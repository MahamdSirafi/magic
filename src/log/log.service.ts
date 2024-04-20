import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './entities/log.entity';
@Injectable()
export class LogService {
  constructor(@InjectModel('Log') private readonly LogModel: Model<Log>) {}
  public async create(createLogDto: CreateLogDto) {
    await this.LogModel.create(createLogDto);
  }
}
