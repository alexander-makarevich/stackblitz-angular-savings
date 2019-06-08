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
  income = new FormControl(0);
  interestRate = new FormControl(0);

  rows: Row[] = [];
  displayedColumns = ['month', 'account', 'interest', 'totalInterest', 'savedMonthsCount'];

  constructor(private service: SavingsService) { }

  calculate() {
    this.rows = this.service.calculate();
  }

  ngOnInit() {
    this.rows = this.service.calculate();
  }

}