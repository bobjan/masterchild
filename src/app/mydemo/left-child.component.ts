import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-left-child',
  templateUrl: './left-child.component.html',
  styleUrls: ['./left-child.component.css']
})
export class LeftChildComponent implements OnInit {
  resource: Array<string> = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

  url: string = 'http://www.somaku.com/';


  @Input() leftVariable : string = "Left variable";
  @Output() leftEvent = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  fetchData(idx: number) {
    // console.log(this.resource[idx] + " to be fetched");
    this.http.get(this.url + this.resource[idx])
      .subscribe(
        (res) => {
          console.log(res);
          this.leftEvent.emit({ ok : res});
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log("FINISHED!");
        }
      )
  }
}
