import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost } from '../Models/Ipost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseApiUrl :string = 'http://localhost:29475/';
  constructor(private http : HttpClient) {}
  addPost(addpost:Ipost) : Observable<Ipost>
  {
    return this.http.post<Ipost>(this.baseApiUrl + '/api/Post',addpost);
  }
  updatePost(id:string, PostUpdate:Ipost): Observable<Ipost>
  {
    return this.http.put<Ipost>(this.baseApiUrl + '/api/Post/'+ id, PostUpdate);
  }

  deletePost(id:string): Observable<Ipost>
  {
    return this.http.delete<Ipost>(this.baseApiUrl +'/api/Post/' + id);
  }
}




