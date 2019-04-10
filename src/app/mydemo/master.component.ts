import { Component, OnInit, ViewChild } from '@angular/core';
import { RightChildComponent } from './right-child.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  @ViewChild(RightChildComponent)
  private rightChild : RightChildComponent;

  masterLeft: string = "Master left";
  masterRight: string = "Master right";

  response: any = [1,2,3,4];
  constructor() { }

  ngOnInit() {
  }

  leftListener(event:any){
    // console.log(event);
    this.response = event.ok;
    this.rightChild.refresh();
  }
  rightListener(event:any){
    console.log(event);
  }

}
