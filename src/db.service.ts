import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  public connect() {
    return `<h1>链接数据库</h1>`;
  }
}
