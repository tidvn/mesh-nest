import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): string {
    return 'ok';
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }
}
