import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-form';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  _url = 'http://localhost:3500/form';
  constructor( private _http: HttpClient) { }

  send(user: User){
    return this._http.post<any>(this._url, user);
  }
}
