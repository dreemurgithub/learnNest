import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Mes {
    return { message: 'Hello World!' };
  }
  sayBack(word: string): Mes | string {
    if (word) return { message: word };
    return 'Bad Request';
  }
}

export interface Mes {
  message: string;
}
