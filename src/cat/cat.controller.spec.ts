import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
// s

describe('CatController', () => {
  let catController: CatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [CatService],
    }).compile();

    catController = module.get<CatController>(CatController);
  });
  describe('exist', () => {
    it('should be defined', () => {
      expect(catController).toBeDefined();
    });
  });
  describe('get cat', () => {
    it('should "mew mew', () => {
      expect(catController.catMew()).toBe('mew mew');
    });
  });
});
