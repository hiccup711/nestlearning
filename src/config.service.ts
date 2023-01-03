import { DevService } from './dev.service';
import { HdService } from './hd.service';
import * as developmentConfig from './config/development.config';
import * as productionConfig from './config/production.config';
import { config } from 'dotenv';
import * as path from 'path';
config({
  path: path.join(__dirname, '../.env'),
});
export const SelectService = {
  provide: 'AutoService',
  useClass: process.env.NODE_ENV == 'development' ? DevService : HdService,
};

export const AppConfig = {
  provide: 'AppConfig',
  useValue:
    process.env.NODE_ENV == 'development'
      ? developmentConfig
      : productionConfig,
};
