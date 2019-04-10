import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-child',
  templateUrl: './right-child.component.html',
  styleUrls: ['./right-child.component.css']
})
export class RightChildComponent implements OnInit {

  niceJson : string = "ovo je nice";

  @Input() someObj = {
    abc : 1,
    xyz : 2,
    niz : [ 3,4,5,6,7]
  }

  @Input() rightVariable : string = "Right variable";
  @Output() rightEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.niceJson = JSON.stringify(this.someObj,null, "  ");
  }

  refresh(){
    console.log("Refreshed");
    this.ngOnInit();
  }

}
