import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World ROCKTSEAT_CRUD_NESTJS_HEROKU!';
  }
}
