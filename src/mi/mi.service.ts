import {
  Injectable,
  BadRequestException,
  NotImplementedException,
} from '@nestjs/common';
import { CreateMiDto } from './dto/create-mi.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mover } from '../mover/entities/mover.entity';
import { Item } from '../item/entities/item.entity';
import { Mi } from './entities/mi.entity';
import { Log } from '../log/entities/log.entity';
@Injectable()
export class MiService {
  constructor(
    @InjectModel('Mi') private readonly MIModel: Model<Mi>,
    @InjectModel('Item') private readonly ItemModel: Model<Item>,
    @InjectModel('Mover') private readonly MoverModel: Model<Mover>,
    @InjectModel('Log') private readonly LogModel: Model<Log>,
  ) {}
  public async create(createMiDto: CreateMiDto) {
    await this.LogModel.create({
      log: `The Mover that owns the number :${createMiDto.mover}. has been loaded with item that owns the number :${createMiDto.item}`,
    });
    const mover = await this.MoverModel.findById(createMiDto.mover);
    if (mover && mover.state !== 'loading') {
      throw new BadRequestException('This mover is not loading');
    }
    const IdItems = await this.MIModel.find({
      mover: createMiDto.mover,
      done: false,
    });
    let sum_weight: number = 0;
    const thisitem = await this.ItemModel.findById(createMiDto.item);
    console.log(thisitem);
    if (thisitem) sum_weight += thisitem.weight;
    for (let i = 0; i < IdItems.length; i++) {
      const thisitem = await this.ItemModel.findById(IdItems[i].item);
      if (thisitem) sum_weight += thisitem.weight;
    }
    console.log(mover.weight_limi, sum_weight);
    if (mover && mover.weight_limi < sum_weight)
      throw new BadRequestException(
        `This mover cannot load this item because the weight limit has been exceeded`,
      );
    const doc = await this.MIModel.create(createMiDto);
    if (doc) {
      await this.LogModel.create({
        log: `The Mover that owns the number :${createMiDto.mover}. has been loaded with item that owns the number :${createMiDto.item}`,
      });
      // return doc;
      return this.ItemModel.find();
    } else throw new NotImplementedException('loading failed');
  }
  public async update(id: string) {
    return await this.MIModel.updateMany(
      { mover: id },
      { $set: { done: true } },
    );
  }
}
