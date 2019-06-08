import { Injectable } from '@angular/core';


export interface Row {
  month: number;
  account: number;
  interest: number;
  totalInterest: number;
  savedMonthsCount: number;
}

@Injectable()
export class SavingsService {
  readonly income = 30000;
  readonly interestRate = 0.02 / 12;
  readonly years = 30;

  constructor() { }

  calculate(): Row[] {
    let account = 0;
    let totalInterest = 0;
    const rows: Row[] = [];
    for (let m = 0; m < this.years * 12; ++m) {
      const interest = account * this.interestRate;
      account = account + this.income + interest;
      totalInterest += interest;
      const savedMonthsCount = totalInterest / this.income;

      rows.push({
        month: m,
        account: account,
        interest: interest,
        totalInterest: totalInterest,
        savedMonthsCount: savedMonthsCount
      });
    }
    return rows;
  }

}