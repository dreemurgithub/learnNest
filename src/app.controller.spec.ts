import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Request } from 'express';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
  describe('exist', () => {
    it('should be defined', () => {
      expect(appController).toBeDefined();
    });
  });

  describe('root', () => {
    it('should return "Hello"', () => {
      expect(appController.getHello()).toStrictEqual({
        message: 'Hello World!',
      });
    });
  });
  describe('Post message', () => {
    const req = { body: { word: 'Hello' } } as unknown as Request;
    it('should return "{message: Hello}!"', () => {
      expect(appController.sayBack(req)).toStrictEqual({
        message: 'Hello',
      });
    });
  });
  describe('Post null', () => {
    const req = { body: { word: '' } } as unknown as Request;
    const req1 = { body: { word: null } } as unknown as Request;
    const req2 = { body: {} } as unknown as Request;
    it('should return "Hello!"', () => {
      expect(appController.sayBack(req)).toBe('Bad Request');
      expect(appController.sayBack(req1)).toBe('Bad Request');
      expect(appController.sayBack(req2)).toBe('Bad Request');
    });
  });
});
