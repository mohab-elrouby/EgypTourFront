import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost } from '../Models/Ipost';
import { Observable } from 'rxjs';
import { ILike } from '../Models/ilike';
import { IAddPost } from '../Models/iadd-post';
import { IAddImage } from '../Models/iadd-image';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseApiUrl :string = 'http://localhost:5275';
  constructor(private http : HttpClient) {}
  addPost(addpost:IAddPost) : Observable<IAddPost>
  {
    return this.http.post<IAddPost>(this.baseApiUrl + '/Post',addpost);
  }
  updatePost(id:string, PostUpdate:Ipost): Observable<Ipost>
  {
    return this.http.put<Ipost>(this.baseApiUrl + '/Post/'+ id, PostUpdate);
  }

  deletePost(id:string): Observable<Ipost>
  {
    return this.http.delete<Ipost>(this.baseApiUrl +'/Post/' + id);
  }
  getAllPosts(): Observable<Ipost[]>
  {
    return this.http.get<Ipost[]>(this.baseApiUrl + '/Post');
  }
  getByPostId(id:string)
  {
    return this.http.get<Ipost>(this.baseApiUrl + '/Post/' + id);
  }
  addLike(postId:number,likerId:number):Observable<ILike> {
    return this.http.patch<ILike>(this.baseApiUrl + `/Post/${postId}/like`,likerId);
  }
  removeLike(postId:number,likerId:number):Observable<ILike> {
    return this.http.patch<ILike>(this.baseApiUrl + `/Post/${postId}/unlike`,likerId);
  }
  addImageTOPost(file:File , postId:number):Observable<IAddImage> {
    return this.http.post<IAddImage>(this.baseApiUrl + `/Post/${postId}/AddImage`, file);
  }
}




