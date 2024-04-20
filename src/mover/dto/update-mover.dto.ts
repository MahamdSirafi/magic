import { PartialType } from '@nestjs/swagger';
import { CreateMoverDto } from './create-mover.dto';

export class UpdateMoverDto extends PartialType(CreateMoverDto) {}
