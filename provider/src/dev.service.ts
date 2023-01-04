import { Injectable } from '@nestjs/common';

@Injectable()
export class DevService {
  get(): string {
    return 'DevService';
  }
}
