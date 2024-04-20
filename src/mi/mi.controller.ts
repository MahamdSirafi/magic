import { Controller, Post, Body } from '@nestjs/common';
import { MiService } from './mi.service';
import { CreateMiDto } from './dto/create-mi.dto';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Mi } from './entities/mi.entity';
@ApiTags('M I')
@Controller('mi')
export class MiController {
  constructor(private readonly miService: MiService) {}
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiOkResponse({ type: Mi })
  @Post()
  create(@Body() createMiDto: CreateMiDto) {
    return this.miService.create(createMiDto);
  }
}
