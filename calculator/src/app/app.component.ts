import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calculator';

  op1 : number = 0;
  op2 : number;
  operator : string;
  result : number = 0;
  output : string = "0";

  constructor(){}

  calculate() : void {
    if(this.op2 == null){
      this.result = this.op1;
      this.output = this.result.toString();
    }
    else {
      switch(this.operator){
        case '+':
          this.result = this.op1 + this.op2;
          break;
        case '-':
          this.result = this.op1 - this.op2;
          break;
        case '/':
          this.result = this.op1 / this.op2;
          break;
        case '*':
          this.result = this.op1 * this.op2;
          break;
      }
      this.op1 = this.result;
      this.op2 = null;
      this.operator = null;
      this.updateOutput();
    }
  }

  setOperand(n : number) : void {
    if(this.operator == null) {
      this.op1 *= 10;
      this.op1 += n;
    }
    else{
      if(this.op2 == null){
        this.op2 = n;
      }
      else {
        this.op2 *= 10;
        this.op2 += n;
      }
    }

    this.updateOutput();
  }

  setOperator(s : string) : void {
    if(this.operator != null) {
      this.calculate();
    }
    this.operator = s;

    this.updateOutput();
  }

  clear() : void {
    this.op1 = 0;
    this.op2 = null;
    this.result = 0;
    this.operator = null;
    this.updateOutput();
  }

  updateOutput() : void {
    this.output = this.op1 + ' ';
    if(this.operator != null) {
      this.output += this.operator + ' ';
    }
    if(this.op2 != null){
      this.output += this.op2;
    }
  }

  ngOnInit() : void {

  }
}
