import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class MiddlewareController implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('request url...', req.url);
    next();
  }
}
