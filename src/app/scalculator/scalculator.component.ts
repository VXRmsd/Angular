import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scalculator',
  templateUrl: './scalculator.component.html',
  styleUrls: ['./scalculator.component.css']
})
export class SCalculatorComponent implements OnInit {
value1
value2="0"
temp=""
temp2=""
finalresult
result
operator=""

  constructor() { 
   // this.value1=50
    //this.value2=10
  }

  ngOnInit() {
   // this.result=this.value1+this.value2
  }
  calculate(i){
    //console.log("calculate called"+i)
    if (this. operator==""){

   
    this.temp=this.temp+i
    this.value1=this.temp
    this.finalresult=this.value1

  }else{
    this.temp=this.temp+i
    this.value1=this.temp
    this.temp2=this.temp2+i
    this.value2=this.temp2
      //this.value2=this.value2+i

      if (this.operator=="+"){
        this.result=parseInt(this.finalresult) + parseInt(this.value2)
      }
      else if(this.operator=="-"){
        this.result=parseInt(this.finalresult) - parseInt(this.value2)
      }
      else if(this.operator=="*"){
        this.result=parseInt(this.finalresult) * parseInt(this.value2)
      }
      else if(this.operator=="/"){
        this.result=parseInt(this.finalresult) / parseInt(this.value2)
      }
     
  }
   
  }
  getOperand(i){
    this.operator=i
    this.temp=this.temp+i
    this.value1=this.temp
    if(this.value2=="0"){
     this.temp2="0"
      this.value2=this.temp2
    }
    if(this.operator=="c"){
      this.value1=""
      this.value2="0"
      this.temp=""
      this.temp2=""
      this.finalresult=""
      this.result=""
      this.operator=""
    }
    //this.calculate(i)
   
    
   
   // this. operator=""
  }
}