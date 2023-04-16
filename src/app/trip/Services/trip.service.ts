import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itrip } from '../Models/Itrip';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TripService {
  baseApiUrl :string = 'http://localhost:5275/';
  constructor(private http : HttpClient) {}
  GetById(id:number)
  {
    return this.http.get<Itrip>(this.baseApiUrl+`Trip/GetByID/${id}`);
  }
  addtrip(addtrip:Itrip) : Observable<Itrip>
  {
    return this.http.post<Itrip>(this.baseApiUrl + '/api/Trip',addtrip);
  }
  updatetrip(id:string, tripUpdate:Itrip): Observable<Itrip>
  {
    return this.http.put<Itrip>(this.baseApiUrl + '/api/Trip/'+ id, tripUpdate);
  }

  deletetrip(id:string): Observable<Itrip>
  {
    return this.http.delete<Itrip>(this.baseApiUrl +'/api/Trip/' + id);
  }
}



