import { ApiProperty } from '@nestjs/swagger';
export class Item {
  @ApiProperty()
  name: string;
  @ApiProperty()
  weight: number;
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}
