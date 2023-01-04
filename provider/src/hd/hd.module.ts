import { Module } from '@nestjs/common';
import { HdService } from './hd.service';
import { HdController } from './hd.controller';
import { T1Module } from '../t1/t1.module';

@Module({
  imports: [T1Module],
  providers: [
    HdService,
    {
      provide: 'AsyncTestService',
      // 此处虽然是异步加载，但并不是调用时异步，而是在框架启动时执行的异步，必须等待它完成框架才能启动成功
      async useFactory() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('Say hello');
          }, 3500);
        });
      },
    },
  ],
  controllers: [HdController],
})
export class HdModule {}
