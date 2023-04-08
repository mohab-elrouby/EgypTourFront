import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iservice } from '../Models/Iservice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseApiUrl :string = 'http://localhost:29475/';
  constructor(private http : HttpClient) {}
  addService(addService:Iservice) : Observable<Iservice>
  {
    return this.http.post<Iservice>(this.baseApiUrl + '/api/Service',addService);
  }
  updateService(id:string, ServiceUpdate:Iservice): Observable<Iservice>
  {
    return this.http.put<Iservice>(this.baseApiUrl + '/api/Service/'+ id, ServiceUpdate);
  }

  deleteTourist(id:string): Observable<Iservice>
  {
    return this.http.delete<Iservice>(this.baseApiUrl +'/api/Service/' + id);
  }
}



