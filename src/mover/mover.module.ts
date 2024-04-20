import { Module } from '@nestjs/common';
import { MoverService } from './mover.service';
import { MoverSchema } from './schemas/mover.schema';
import { MoverController } from './mover.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from 'src/log/schemas/log.schema';
import { MiModule } from 'src/mi/mi.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Mover', schema: MoverSchema }]),
    MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }]),
    MiModule,
  ],
  controllers: [MoverController],
  providers: [MoverService],
})
export class MoverModule {}
