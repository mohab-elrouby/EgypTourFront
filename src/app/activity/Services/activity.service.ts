import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iactivity } from '../Models/Iactivity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  baseApiUrl :string = 'http://localhost:29475/';
  constructor(private http : HttpClient) {}

  // getAllactivity() : Observable<Iactivity[]>
  // {
  //   return this.http.get<Iactivity[]>(this.baseApiUrl + '/api/Activity');
  // }
  getactivityByTripId(id:string)
  {
    return this.http.get<Iactivity>(this.baseApiUrl + '/api/Activity/' + id);
  }
  addactivity(addactivity:Iactivity) : Observable<Iactivity>
  {
    return this.http.post<Iactivity>(this.baseApiUrl + '/api/Activity',addactivity);
  }
  updateactivity(id:string, activityUpdate:Iactivity): Observable<Iactivity>
  {
    return this.http.put<Iactivity>(this.baseApiUrl + '/api/Activity/'+ id, activityUpdate);
  }

  deleteactivity(id:string): Observable<Iactivity>
  {
    return this.http.delete<Iactivity>(this.baseApiUrl +'/api/Activity/' + id);
  }
}

