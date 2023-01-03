import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HdService } from './hd.service';
import { DevService } from './dev.service';
import { config } from 'dotenv';
import * as path from 'path';
import { developmentConfig } from './config/development.config';
import { productionConfig } from './config/production.config';
import { DbService } from './db.service';
config({
  path: path.join(__dirname, '../.env'),
});

const selectService = {
  provide: 'AutoService',
  useClass: process.env.NODE_ENV == 'development' ? DevService : HdService,
};

const appConfig = {
  provide: 'AppConfig',
  useValue:
    process.env.NODE_ENV == 'development'
      ? developmentConfig
      : productionConfig,
};
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, selectService, appConfig, DbService],
})
export class AppModule {}
