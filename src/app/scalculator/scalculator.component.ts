import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scalculator',
  templateUrl: './scalculator.component.html',
  styleUrls: ['./scalculator.component.css']
})
export class SCalculatorComponent implements OnInit {

  value1
  value2
  result
  operator

  constructor() {

    this.value1 = 50
    this.value2 = 10
  }

  ngOnInit() {
    // this.result=this.value1+this.value2
  }
  calculate(i) {
    // console.log("calculate called" + i)
    this.result = parseInt(this.value1) + parseInt(this.value2)

  }

}
