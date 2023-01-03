import { Controller, Get } from '@nestjs/common';
import { T1Service } from './t1.service';

@Controller('t1')
export class T1Controller {
  constructor(private readonly t1Service: T1Service) {}
  @Get('show')
  getShow() {
    return this.t1Service.getShow();
  }
}
