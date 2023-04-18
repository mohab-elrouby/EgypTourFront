import { Component } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { Ipost } from '../../Models/Ipost';
import { ITouristPost } from '../../Models/itouristPost';
import { IComment } from 'src/app/comment/Models/Icomment';
import { IAddPost } from '../../Models/iadd-post';
import { IAddImage } from '../../Models/iadd-image';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  caption: string ='';
  imgUrl:string ='';
  loggedUserObj = localStorage.getItem('loggedUser');
loggedUserId = JSON.parse(this.loggedUserObj!).id;
loggedUserFname = JSON.parse(this.loggedUserObj!).fname;
loggedUserLname = JSON.parse(this.loggedUserObj!).lname;

  // post:Ipost={
  //   id:0,
  //   pictureIds: [] as string[],
  //   datePosted: new Date(),
  //   likersIds:[] as number[],
  //   comments: [] as IComment[],
  //   content: '',
  //   writer:{
  //     id: Number(this.loggedUserId),
  //     fname: this.loggedUserFname,
  //     lname: this.loggedUserLname,
  //     profilePictureUrl: '',
  //    } as ITouristPost
  //   };
  postDTO ={
    id:0,
    datePosted: new Date(),
    writerId:Number(this.loggedUserId),
    content: '',
  } as IAddPost
  imageUrl = {
    pictureIds: [],
  } as IAddImage

  constructor(private postService:PostService ){}

  addPost():void {
    this.postDTO.content = this.caption;
    this.postService.addPost(this.postDTO).subscribe()
    console.log(this.caption, this.imgUrl)
    
    // this.postService.addImageTOPost(this.imageUrl).subscribe
    
  }
} 
