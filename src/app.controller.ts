import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('auto')
  getHd(): string {
    return this.appService.getAutoService();
  }

  @Get('name')
  getAppName(): string {
    return this.appService.getAppName();
  }

  @Get('dbconnect')
  getDbConnect(): string {
    return this.appService.getDb();
  }
}
