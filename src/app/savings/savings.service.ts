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
  readonly years = 30;

  constructor() { }

  calculate(income: number, interestRate: number): Row[] {
    interestRate = interestRate / 12;
    let account = 0;
    let totalInterest = 0;
    const rows: Row[] = [];
    for (let m = 0; m < this.years * 12; ++m) {
      const interest = account * interestRate;
      account = account + income + interest;
      totalInterest += interest;
      const savedMonthsCount = totalInterest / income;

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