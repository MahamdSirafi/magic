import { Test, TestingModule } from '@nestjs/testing';
import { MiService } from './mi.service';

describe('MiService', () => {
  let service: MiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiService],
    }).compile();

    service = module.get<MiService>(MiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
