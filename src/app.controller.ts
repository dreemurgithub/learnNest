import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService, Mes } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Mes {
    return this.appService.getHello();
  }

  @Post()
  sayBack(@Req() req: Request): Mes | string {
    const word = req.body && req.body.word ? req.body.word : '';
    return this.appService.sayBack(word);
  }
}
