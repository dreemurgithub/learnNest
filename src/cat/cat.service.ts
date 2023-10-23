import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  mewmew(): string {
    return 'mew mew';
  }
  sayMew(word: string): string {
    return `say ${word}`;
  }
}
