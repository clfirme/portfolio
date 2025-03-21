import { Injectable } from '@nestjs/common';
import { x } from '@core' // localizado em tsconfig.json

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + x;
  }
}
