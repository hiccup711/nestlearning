import { Controller, Get, Inject } from '@nestjs/common';
import { HdService } from './hd.service';

@Controller('hd')
export class HdController {
  constructor(
    private readonly hdService: HdService,
    @Inject('AsyncTestService')
    private readonly asyncService,
  ) {}
  @Get('show')
  getShow() {
    return this.hdService.getShow2();
  }

  @Get('async')
  getAsync() {
    return this.asyncService;
  }
}
