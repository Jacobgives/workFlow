import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor() {
    this.reg(req){
    }
  }

  ngOnInit() {
  }
  reg(){
    this.reg(req);
  }
}
