import { ApiProperty } from '@nestjs/swagger';
import { Item } from '../../item/entities/item.entity';
import { Mover } from '../../mover/entities/mover.entity';
export class Mi {
  @ApiProperty()
  mover: Mover;
  @ApiProperty()
  item: Item;
  @ApiProperty()
  done: boolean;
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}
