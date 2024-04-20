import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMoverDto } from './dto/create-mover.dto';
import { UpdateMoverDto } from './dto/update-mover.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mover } from './entities/mover.entity';
import { Log } from 'src/log/entities/log.entity';
@Injectable()
export class MoverService {
  constructor(
    @InjectModel('Log') private readonly LogModel: Model<Log>,
    @InjectModel('Mover') private readonly MoverModel: Model<Mover>,
  ) {}
  public async create(createMoverDto: CreateMoverDto): Promise<Mover> {
    return await this.MoverModel.create(createMoverDto);
  }

  public async findAll(): Promise<Mover[]> {
    return await this.MoverModel.find({ quest_state: 'done' });
  }

  public async update(
    id: string,
    updateMoverDto: UpdateMoverDto,
  ): Promise<Mover> {
    const doc = await this.MoverModel.findByIdAndUpdate(id, updateMoverDto, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      throw new NotFoundException('not found docmant with this id');
    }
    switch (updateMoverDto.state) {
      case 'loading': {
        await this.LogModel.create({
          log: `The Mover that owns the number :${id}. has quest state is loading`,
        });
        break;
      }
      case 'on a mission': {
        await this.LogModel.create({
          log: `The Mover that owns the number :${id}. has quest state is on a mission`,
        });
        break;
      }
      case 'done': {
        await this.LogModel.create({
          log: `The Mover that owns the number :${id}. has quest state is done`,
        });
        break;
      }
    }
    return doc;
  }
}
