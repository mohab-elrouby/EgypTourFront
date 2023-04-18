import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'src/app/Search/Models/IResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeSearchService {

  constructor(private httpClient:HttpClient) { }

  baseApiUrl:string="http://localhost:5275";
  
  getAllServices(searchInput:string,city:number,skip:number,take:number):Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.baseApiUrl+`/Service/Search`);
  }
  }
