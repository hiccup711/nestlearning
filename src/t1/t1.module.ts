import { Module } from '@nestjs/common';
import { T1Service } from './t1.service';
import { T1Controller } from './t1.controller';

@Module({
  providers: [T1Service],
  controllers: [T1Controller],
  exports: [T1Service],
})
export class T1Module {}
