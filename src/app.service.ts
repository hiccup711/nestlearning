import { Inject, Injectable } from '@nestjs/common';
import { AppConfigType } from './types/AppConfigType';

@Injectable()
export class AppService {
  constructor(
    @Inject('AutoService')
    private readonly hd,
    @Inject('AppConfig')
    private readonly appConfig: AppConfigType,
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
}
