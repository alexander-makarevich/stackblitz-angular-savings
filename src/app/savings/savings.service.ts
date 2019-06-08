import { Injectable } from '@angular/core';


interface Row {
  year: number;
  month: number;
  economy: number;
  interest: number;
  sumPerMonth: number;
  sumInterest: number;
}

@Injectable()
export class SavingsService {
  readonly income = 30000;
  readonly interestRate = 0.02;
  readonly years = 30;

  constructor() { }

  calculate(): string {
    let account = 0;
    const sumInterest = 0;
    for (let m = 0; m < this.years * 12; ++m) {
      const interest = account * this.interestRate;
      account += interest;
      const monthsSaved = 0;
    }
    return 'SavingsService->calculate()';
  }

}