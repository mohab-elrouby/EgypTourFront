import { Injectable } from '@angular/core';
import { ISearchService } from '../Models/ISearchService';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '../Models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

constructor(private httpClient:HttpClient) { }

baseApiUrl:string="http://localhost:5275/";

getAllServices(city:number,skip:number,take:number):Observable<IResponse> {
  return this.httpClient.get<IResponse>(this.baseApiUrl+`Service/GetAllByCity/${city}/?skip=${skip}&take=${take}`);
}
}
