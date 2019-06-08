import { Component, OnInit } from '@angular/core';

import { SavingsService } from './savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css'],
  providers: [SavingsService]
})
export class SavingsComponent implements OnInit {

  constructor(private service: SavingsService) { }

  ngOnInit() {
    console.log(this.service.calculate());
  }

}