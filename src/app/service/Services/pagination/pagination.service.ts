import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IserviceReview } from '../../Models/iservice-review';
@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  baseApiUrl :string = 'http://localhost:29475/';
  constructor( private http : HttpClient) { }

  getReviews(id:string) : Observable<IserviceReview[]> {
    return this.http.get<IserviceReview[]>(this.baseApiUrl + '/ServiceReview/GetAllByServiceId/'+id);
  }
}
