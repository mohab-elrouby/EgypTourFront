import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itourist } from '../Models/Itourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  baseApiUrl :string = 'http://localhost:29475/';
  constructor(private http : HttpClient) {}
  addtourist(addtourist:Itourist) : Observable<Itourist>
  {
    return this.http.post<Itourist>(this.baseApiUrl + '/api/Tourist',addtourist);
  }
  updateTourist(id:string, TouristUpdate:Itourist): Observable<Itourist>
  {
    return this.http.put<Itourist>(this.baseApiUrl + '/api/Tourist/'+ id, TouristUpdate);
  }

  deleteTourist(id:string): Observable<Itourist>
  {
    return this.http.delete<Itourist>(this.baseApiUrl +'/api/Tourist/' + id);
  }
}


