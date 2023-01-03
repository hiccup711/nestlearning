import { Injectable } from '@nestjs/common';
import { T1Service } from '../t1/t1.service';

@Injectable()
export class HdService {
  constructor(private readonly t1Service: T1Service) {}
  getShow() {
    return 'show me how good you are! ';
  }

  getShow2() {
    return this.getShow() + this.t1Service.getShow();
  }
}
