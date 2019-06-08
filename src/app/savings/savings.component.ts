import { Component, OnInit } from '@angular/core';

import { SavingsService, Row } from './savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css'],
  providers: [SavingsService]
})
export class SavingsComponent implements OnInit {
  rows: Row[];
  displayedColumns = ['month', 'account', 'interest', 'totalInterest', 'savedMonthsCount'];

  constructor(private service: SavingsService) { }

  ngOnInit() {
    this.rows = this.service.calculate();
  }

}