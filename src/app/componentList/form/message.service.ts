import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user-form';
import { Observable, throwError, observable } from 'rxjs';
import { catchError } from 'rxjs/operators'


const _url = 'http://localhost:3500/form';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

 
  constructor( private _http: HttpClient) { }


  send(user: User): Observable<any>{
    return this._http.post<any>(_url, user).pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
