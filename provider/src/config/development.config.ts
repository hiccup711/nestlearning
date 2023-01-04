import { AppConfigType } from '../types/AppConfigType';
import { DbConfigType } from '../types/DbConfigType';

export const appConfig: AppConfigType = {
  name: 'devName',
  url: 'www.google.test',
};

export const dbConfig: DbConfigType = {
  host: 'db',
  dbname: 'hdr',
  dbpwd: 'password',
};
