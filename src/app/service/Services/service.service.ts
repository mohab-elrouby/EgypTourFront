import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IserviceReview } from '../Models/iservice-review';
import { IResponse } from '../Models/iresponse';
import { ISearchService } from 'src/app/Search/Models/ISearchService';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient:HttpClient) { }

  baseApiUrl:string="http://localhost:5275";
  
  getServiceReviews(serviceId:number,skip:number,take:number):Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.baseApiUrl+`/ServiceReview/GetAllByServiceId/${serviceId}/?skip=${skip}&take=${take}`);
  }

  getService(serviceId:number):Observable<ISearchService> {
    return this.httpClient.get<ISearchService>(this.baseApiUrl+`/Service/GetByIdWithAvg/${serviceId}`);
  }
  
  writeServiceReview(serviceId:number, userId:number, review: IserviceReview){
    const httpOptions = {
      headers: new HttpHeaders({
        'serviceId': serviceId.toString(),
        'userId': userId.toString(),
      })
    };
    return this.httpClient.post<IResponse>(this.baseApiUrl+`/Service/AddReview`,review, httpOptions);
  }
}
