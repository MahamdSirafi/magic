import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Model } from 'mongoose';
import { Item } from './entities/item.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemService {
  constructor(@InjectModel('Item') private readonly ItemModule: Model<Item>) {}
  public async create(createItemDto: CreateItemDto) {
    return await this.ItemModule.create(createItemDto);
  }
}
