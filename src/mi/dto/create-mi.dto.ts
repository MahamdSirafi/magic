import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMiDto {
  @ApiProperty()
  @IsString()
  mover: string;
  @ApiProperty()
  @IsString()
  item: string;
}
