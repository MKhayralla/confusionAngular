import { Injectable } from '@angular/core';
const api = 'https://localhost:3443'
@Injectable()
export class ConfigService {
  url = api ;

  constructor() { }

}
