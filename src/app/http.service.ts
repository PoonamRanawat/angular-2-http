import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://angular-2-sample-app.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('https://angular-2-sample-app.firebaseio.com/data.json', body, {
      headers : headers
    })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://angular-2-sample-app.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }
}
