import { Inject, Injectable } from '@nestjs/common';
import { AppConfigType } from './types/AppConfigType';
import { DbService } from './db.service';

@Injectable()
export class AppService {
  constructor(
    @Inject('AutoService')
    private readonly hd,
    @Inject('AppConfig')
    private readonly appConfig: AppConfigType,
    @Inject('DbService')
    private readonly dbService: DbService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  getAppName(): string {
    return this.appConfig.name + this.appConfig.url;
  }

  getAutoService(): string {
    return this.hd.get();
  }

  getDb(): string {
    return this.dbService.connect();
  }
}
