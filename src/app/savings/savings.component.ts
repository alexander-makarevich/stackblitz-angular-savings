import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SavingsService, Row } from './savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css'],
  providers: [SavingsService]
})
export class SavingsComponent implements OnInit {
  income = new FormControl(30000);
  interestRate = new FormControl(0.02);

  rows: Row[] = [];
  displayedColumns = ['month', 'account', 'interest', 'totalInterest', 'savedMonthsCount'];

  constructor(private service: SavingsService) { }

  calculate() {
    this.rows = this.service.calculate(this.income.value, this.interestRate.value);
  }

  ngOnInit() {
    this.calculate();
  }

}