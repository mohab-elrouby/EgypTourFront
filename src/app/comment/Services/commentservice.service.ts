import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../Models/Icomment';

@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {
  baseApiUrl :string = 'http://localhost:29475';
  constructor(private http : HttpClient) {}

  // getAllcomment() : Observable<IComment[]>
  // {
  //   return this.http.get<IComment[]>(this.baseApiUrl + '/api/Comment');
  // }
  getcommentByPostId(id:string)
  {
    return this.http.get<IComment>(this.baseApiUrl + '/api/Comment/' + id);
  }
  addComment(addcomment:IComment) : Observable<IComment>
  {
    //addcomment.Id = 8;
    return this.http.post<IComment>(this.baseApiUrl + '/api/Comment', addcomment);
  }
  updateComment(id:string, commentUpdate:IComment): Observable<IComment>
  {
    return this.http.put<IComment>(this.baseApiUrl + '/api/Comment/'+ id, commentUpdate);
  }

  deleteComment(id:string): Observable<IComment>
  {
    return this.http.delete<IComment>(this.baseApiUrl +'/api/Comment/' + id);
  }
}

