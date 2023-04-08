import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilocalreview } from 'src/app/local-review/Models/Ilocalreview';
import { Iservicereview } from '../Models/Iservicereview';

@Injectable({
  providedIn: 'root'
})
export class ServicereviewService {

  baseApiUrl :string = 'http://localhost:29475/';
  constructor(private http : HttpClient) {}
  addservicereview(addservicereview:Iservicereview) : Observable<Iservicereview>
  {
    return this.http.post<Iservicereview>(this.baseApiUrl + '/api/Servicereview',addservicereview);
  }
  updateservicereview(id:string, servicereviewUpdate:Iservicereview): Observable<Iservicereview>
  {
    return this.http.put<Iservicereview>(this.baseApiUrl + '/api/Servicereview/'+ id, servicereviewUpdate);
  }

  deleteservicereview(id:string): Observable<Iservicereview>
  {
    return this.http.delete<Iservicereview>(this.baseApiUrl +'/api/Servicereview/' + id);
  }
}



