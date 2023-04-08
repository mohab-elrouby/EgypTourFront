import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilocalreview } from '../Models/Ilocalreview';

@Injectable({
  providedIn: 'root'
})
export class LocalreviewService {

  baseApiUrl :string = 'http://localhost:29475/';
  constructor(private http : HttpClient) {}
  addlocalreview(addlocalreview:Ilocalreview) : Observable<Ilocalreview>
  {
    return this.http.post<Ilocalreview>(this.baseApiUrl + '/api/Localreview',addlocalreview);
  }
  updatelocalreview(id:string, localreviewUpdate:Ilocalreview): Observable<Ilocalreview>
  {
    return this.http.put<Ilocalreview>(this.baseApiUrl + '/api/Localreview/'+ id, localreviewUpdate);
  }

  deletelocalreview(id:string): Observable<Ilocalreview>
  {
    return this.http.delete<Ilocalreview>(this.baseApiUrl +'/api/Localreview/' + id);
  }
}



