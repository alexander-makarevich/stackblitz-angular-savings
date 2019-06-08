import { Injectable } from '@angular/core';

@Injectable()
export class SavingsService {

  constructor() { }

  calculate(): string {
    return 'SavingsService->calculate()';
  }

}