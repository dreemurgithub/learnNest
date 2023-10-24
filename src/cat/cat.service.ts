import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  mewmew(): string {
    return 'mew mew';
  }
  sayMew(word: string): string {
    return `say ${word}`;
  }
  catSecret({ email, password }: { email: string; password: string }): boolean {
    const data = [
      {
        email: 'catone@gmail.com',
        password: '1234',
      },
      {
        email: 'cattwo@gmail.com',
        password: '1234',
      },
    ];
    if (data.find((el) => el.email === email && el.password === password))
      return true;
    return false;
  }
}
