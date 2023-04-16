import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IUser } from '../Models/iuser';
import { LoginRequest } from '../Models/login-request';
import { LoginResponse } from '../Models/login-response';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private baseUrl = 'http://localhost:5275';

  constructor(private router: Router,
    private http: HttpClient) { }

    registerUser(userDTO: IUser){
      return this.http
        .post(`${this.baseUrl}/Tourist/add`, userDTO)
        .pipe( 
        catchError(this.handleError));
    }

    loginUser(request: LoginRequest):Observable<any>{
      let params = new HttpParams()
      .set('username', request.username)
      .set('password', request.password)
      return this.http
        .post(`${this.baseUrl}/Tourist/login`, request)
        .pipe( 
        catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse)
    {
      let errorMeassage='';
      if(err.error instanceof ErrorEvent)
      // client side
      {
        errorMeassage = `an error : ${err.error.message}`;
      }
      else // back-end
      {
        errorMeassage = `server return code ${err.status} , error message: ${err.message}`
      }
      console.log(errorMeassage);
      return throwError (()=> errorMeassage);
  
    }
}
