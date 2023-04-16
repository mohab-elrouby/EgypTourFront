import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../Models/Ipost';
import { PostService } from './../../Services/post.service';
import { IComment } from 'src/app/comment/Models/Icomment';
import { CommentserviceService } from 'src/app/comment/Services/commentservice.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
isLiked:boolean = false;
post:Ipost[]=[];

comments:string[] = [];
comment = {
  Id: '',
  content: '',
  writerId:'',
  Date: Date.now().toLocaleString(),
  postId:'',
};

checkLiked():void {
  this.isLiked = !this.isLiked;
}
constructor(private postService:PostService , private commentService:CommentserviceService ){}
ngOnInit():void {
  this.postService.getAllPosts().subscribe({
    next: (posts:any[]) => {
      this.post = posts;
      this.comments = posts[4];
      console.log(this.post);
    },
    error : (response)=> {console.log(response)}
  })
}

addCommentToPost():void {
  this.commentService.addComment(this.comment).subscribe({
    next:(comment:any)=> {
      this.
    }
  })
}

getPostId(id:string){
this.comment.postId = id;
console.log(this.comment.postId)
}

}