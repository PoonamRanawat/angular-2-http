import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';

import {HttpService} from "./http.service";
import {letProto} from "rxjs/operator/let";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent implements OnInit{
  items: any[] = [];
  asyncString = this.httpSvc.getData();
  constructor(private httpSvc: HttpService) {}

  ngOnInit() {
    this.httpSvc.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }

  onSubmit(username: string, email: string) {
    this.httpSvc.sendData({username: username, email: email})
      .subscribe(
        (data: any) => console.log(data),
        (error: any)  => console.log(error)
      );
  }

  onGetOwnData() {
    this.httpSvc.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for(let key in data) {
            myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }
}
