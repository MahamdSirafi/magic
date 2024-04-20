import { Module } from '@nestjs/common';
import { MiService } from './mi.service';
import { MiController } from './mi.controller';
import { MiSchema } from './schemas/mi.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MoverSchema } from 'src/mover/schemas/mover.schema';
import { LogSchema } from 'src/log/schemas/log.schema';
import { ItemSchema } from 'src/item/schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Mi', schema: MiSchema }]),
    MongooseModule.forFeature([{ name: 'Mover', schema: MoverSchema }]),
    MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }]),
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),
  ],
  controllers: [MiController],
  providers: [MiService],
  exports: [MiService],
})
export class MiModule {}
