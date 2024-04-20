import { IsNumber, IsString, Length } from 'class-validator';
// import { IsUnique } from '../../common/decorators';
// import { Entities } from '../../common/enums';
import { ApiProperty } from '@nestjs/swagger';
export class CreateItemDto {
  @ApiProperty()
  @Length(1, 33)
  @IsString()
  name: string;
  @ApiProperty()
  @IsNumber()
  weight: number;
}
