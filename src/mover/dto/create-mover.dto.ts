import { IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMoverDto {
  @ApiProperty()
  @Length(1, 33)
  @IsString()
  state: string;
  @ApiProperty()
  @IsNumber()
  weight_limi: number;
  @ApiProperty()
  @IsNumber()
  energy: number;
}
