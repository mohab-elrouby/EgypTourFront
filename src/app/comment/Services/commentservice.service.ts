import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,throwError } from 'rxjs';
import { IComment } from '../Models/Icomment';

@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {
  baseApiUrl :string = 'http://localhost:5275';
  constructor(private http : HttpClient) {}

  // getAllcomment() : Observable<IComment[]>
  // {
  //   return this.http.get<IComment[]>(this.baseApiUrl + '/api/Comment');
  // }
  getcommentByPostId(id:number)
  {
    return this.http.get<IComment>(this.baseApiUrl + '/Comment/' + id);
  }
  addComment(addcomment:IComment,id:number) : Observable<IComment>
  {
    //addcomment.Id = 8;
    return this.http.patch<IComment>(this.baseApiUrl +`/Post/${id}/Comment`, addcomment);
  }

  deleteComment(postId:number,commentId:number): Observable<string>
  {
    return this.http.delete<string>(this.baseApiUrl +`/Post/${postId}/uncomment?commentId=${commentId}`).pipe(
      catchError(error=>{
        return throwError(error.status);
      })
    );
  }
}

