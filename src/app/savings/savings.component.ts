import { Component, OnInit } from '@angular/core';
import { FormControl, Validators
 } from '@angular/forms';

import { SavingsService, Row } from './savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css'],
  providers: [SavingsService]
})
export class SavingsComponent implements OnInit {
  income = new FormControl(30000, [
    Validators.required,
    Validators.pattern("^[0-9.]*$"),
    Validators.min(0),
    Validators.max(100000)
  ]);
  interestRate = new FormControl(0.02, [
    Validators.required,
    Validators.pattern('^[0-9.]*$'),
    Validators.min(0),
    Validators.max(100)
  ]);

  rows: Row[] = [];
  displayedColumns = ['month', 'account', 'interest', 'totalInterest', 'savedMonthsCount'];

  constructor(private service: SavingsService) { }

  calculate() {
    this.rows = this.service.calculate(+this.income.value, +this.interestRate.value);
  }

  ngOnInit() {
    this.calculate();
  }

}