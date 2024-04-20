import { ApiProperty } from '@nestjs/swagger';
export class Log {
  @ApiProperty()
  log: string;
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}
