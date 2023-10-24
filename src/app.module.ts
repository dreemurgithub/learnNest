import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatService } from './cat/cat.service';
import { CatController } from './cat/cat.controller';
import { MiddlewareController } from './middleware/middleware.controller';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MiddlewareController)
      // .forRoutes(CatController);
      .forRoutes(
        { path: 'cat', method: RequestMethod.POST },
        { path: 'cat', method: RequestMethod.GET },
        '/',
      );
  }
}
