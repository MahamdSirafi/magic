/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ItemModule } from './item/item.module';
import { MoverModule } from './mover/mover.module';
import { MiModule } from './mi/mi.module';
@Module({
  imports: [DatabaseModule, ItemModule, MoverModule, MiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
