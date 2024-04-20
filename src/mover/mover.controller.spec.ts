import { Test, TestingModule } from '@nestjs/testing';
import { MoverController } from './mover.controller';
import { MoverService } from './mover.service';

describe('MoverController', () => {
  let controller: MoverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoverController],
      providers: [MoverService],
    }).compile();

    controller = module.get<MoverController>(MoverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
