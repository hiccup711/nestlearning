import { Injectable } from '@nestjs/common';
import { DbConfigType } from './types/DbConfigType';

@Injectable()
export class DbService {
  private dbConfig: DbConfigType;
  constructor(dbConfig: DbConfigType) {
    this.dbConfig = dbConfig;
  }

  public connect() {
    return `<h1>链接数据库：主机地址 ${this.dbConfig.host}，主机名称：${this.dbConfig.dbname}，主机密码：${this.dbConfig.dbpwd}</h1>`;
  }
}
