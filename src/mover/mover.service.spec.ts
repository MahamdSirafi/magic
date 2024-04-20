import { Test, TestingModule } from '@nestjs/testing';
import { MoverService } from './mover.service';

describe('MoverService', () => {
  let service: MoverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoverService],
    }).compile();

    service = module.get<MoverService>(MoverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
