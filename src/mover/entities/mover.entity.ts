import { ApiProperty } from '@nestjs/swagger';
export class Mover {
  @ApiProperty()
  state: string;
  @ApiProperty()
  weight_limi: number;
  @ApiProperty()
  energy: number;
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}
