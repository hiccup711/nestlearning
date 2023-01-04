import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db.service';
import { AppConfig, SelectService } from './config.service';
import { HdModule } from './hd/hd.module';
import { T1Module } from './t1/t1.module';

@Module({
  imports: [HdModule, T1Module],
  controllers: [AppController],
  providers: [
    AppService,
    SelectService,
    AppConfig,
    {
      provide: 'DbService',
      inject: ['AppConfig'],
      useFactory(appConfig) {
        return new DbService(appConfig.dbConfig);
      },
    },
  ],
})
export class AppModule {}
