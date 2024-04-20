import { Test, TestingModule } from '@nestjs/testing';
import { MiController } from './mi.controller';
import { MiService } from './mi.service';

describe('MiController', () => {
  let controller: MiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiController],
      providers: [MiService],
    }).compile();

    controller = module.get<MiController>(MiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
