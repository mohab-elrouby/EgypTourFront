import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itrip } from '../Models/Itrip';
import { Observable, catchError, throwError } from 'rxjs';
import { IActivity } from '../Models/IActivity';

@Injectable({
  providedIn: 'root'
})

export class TripService {
  baseApiUrl :string = 'http://localhost:5275/';
  constructor(private http : HttpClient) {}
  GetAll(id:number)
  {
    return this.http.get<Observable<Itrip>[]>(this.baseApiUrl+`Trip/GetAllTrips/${id}`);
  }
  GetById(id:number)
  {
    return this.http.get<Itrip>(this.baseApiUrl+`Trip/GetByID/${id}`);
  }
  addtrip(addtrip:Itrip) : Observable<Itrip>
  {
    return this.http.post<Itrip>(this.baseApiUrl + 'Trip/Add',addtrip);
  }

  updatetrip(id:number, tripUpdate:Itrip): Observable<string>
  {
    return this.http.put<string>(this.baseApiUrl + `Trip/Update/?id=${id}`,tripUpdate).pipe(
      catchError(error=>{
        return throwError(error.status);
      })
    );
  }

  deletetrip(id:string): Observable<Itrip>
  {
    return this.http.delete<Itrip>(this.baseApiUrl +`Trip/Delete/${id}`);
  }

  AddActivity(tripId:number,activity:IActivity):Observable<string>{
     return this.http.post<string>(this.baseApiUrl+`Trip/AddActivity/?tripId=${tripId}`,activity).pipe(
      catchError(error=>{
      return throwError(error.status);
    })
    );
  }

  UpdateActiviy(id:number,activity:IActivity):Observable<string>{
    return this.http.put<string>(this.baseApiUrl+`Activity/UpdateActivity/${id}`,activity).pipe(
     catchError(error=>{
     return throwError(error.status);
   })
   );
 }


}



