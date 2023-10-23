import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatService } from './cat.service';

@Controller('/cat')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Get()
  catMew(): string {
    return this.catService.mewmew();
  }
  @Get('/:word')
  catSay(@Req() req: Request): string {
    const word = req.params.word ? req.params.word : '';
    return this.catService.sayMew(word);
  }
}
