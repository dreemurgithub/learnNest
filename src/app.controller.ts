import { Controller, Get, HttpCode, Post, Put, Req } from '@nestjs/common';
import { AppService, Mes } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): Mes {
    return this.appService.getHello();
  }

  @Post()
  @HttpCode(201)
  sayBack(@Req() req: Request): Mes | string {
    const word = req.body && req.body.word ? req.body.word : '';
    return this.appService.sayBack(word);
  }

  @Post('/a')
  @HttpCode(400)
  saysay(): string {
    return this.appService.sayBack('') as string;
  }

  @Put()
  @HttpCode(400)
  sayBad(): string {
    return 'Nah mate';
  }
}
