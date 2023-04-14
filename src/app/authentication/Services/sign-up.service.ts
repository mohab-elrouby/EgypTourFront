import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private baseUrl = 'http://localhost:5275';

  constructor(private router: Router,
    private http: HttpClient) { }

    registerUser(userDTO: any){
      return this.http
        .post(`${this.baseUrl}/Tourist/add`, userDTO)
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
