import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { MiService } from '../mi/mi.service';
import { MoverService } from './mover.service';
import { CreateMoverDto } from './dto/create-mover.dto';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Mover } from './entities/mover.entity';
@ApiTags('movers')
@Controller('movers')
export class MoverController {
  constructor(
    private readonly Miservice: MiService,
    private readonly moverService: MoverService,
  ) {}
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiOkResponse({ type: Mover })
  @Post()
  create(@Body() createMoverDto: CreateMoverDto) {
    return this.moverService.create(createMoverDto);
  }
  @ApiOkResponse({ type: Mover, isArray: true })
  @Get('/done')
  findAll() {
    return this.moverService.findAll();
  }
  @ApiNotFoundResponse({ description: 'data not found' })
  @ApiOkResponse({ type: Mover })
  @Patch(':id/resting')
  resting(@Param('id') id: string) {
    return this.moverService.update(id, { state: 'resting' });
  }
  @ApiNotFoundResponse({ description: 'data not found' })
  @ApiOkResponse({ type: Mover })
  @Patch(':id/loading')
  loading(@Param('id') id: string) {
    return this.moverService.update(id, { state: 'loading' });
  }
  @ApiNotFoundResponse({ description: 'data not found' })
  @ApiOkResponse({ type: Mover })
  @Patch(':id/on_mission')
  update(@Param('id') id: string) {
    return this.moverService.update(id, { state: 'on a mission' });
  }
  @ApiNotFoundResponse({ description: 'data not found' })
  @ApiOkResponse({ type: Mover })
  @Patch(':id/done')
  updatedDone(@Param('id') id: string) {
    this.Miservice.update(id);
    return this.moverService.update(id, { state: 'done' });
  }
}
