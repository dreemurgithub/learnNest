import { Test, TestingModule } from '@nestjs/testing';
import { MiddlewareController } from './middleware.controller';

describe('MiddlewareController', () => {
  let controller: MiddlewareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiddlewareController],
    }).compile();

    controller = module.get<MiddlewareController>(MiddlewareController);
  });
  describe('exists', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });
});
