import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogSchema } from './schemas/log.schema';
import { Log } from './entities/log.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }])],
  providers: [LogService, Log],
})
export class LogModule {}
