import { Controller, Get, Post, Req, HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  @HttpCode(200)
  catMew(): string {
    return this.catService.mewmew();
  }
  @Get(':word')
  catSay(@Req() req: Request): string {
    const word = req.params.word ? req.params.word : '';
    return this.catService.sayMew(word);
  }
  @Post()
  @HttpCode(201)
  saysay(@Req() req: Request): boolean {
    const { email, password } = req.body;
    return this.catService.catSecret({ email, password }) as boolean;
  }
}
