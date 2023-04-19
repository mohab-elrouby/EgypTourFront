import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Ipost } from '../../Models/Ipost';
import { PostService } from './../../Services/post.service';
import { CommentserviceService } from 'src/app/comment/Services/commentservice.service';
import { IComment } from './../../../comment/Models/Icomment';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
isLiked:boolean = false;
ProcessingComment:boolean = false;
post:Ipost[]=[];
baseUrl:string = 'http://localhost:5275';

commentDetails:any[] = [
  {content: '',
   date: '',
   fname:'',
   lname:'',
}
];
loggedUserObj = localStorage.getItem('loggedUser');
loggedUserId = JSON.parse(this.loggedUserObj!).id;
loggedUserFname = JSON.parse(this.loggedUserObj!).fname;
loggedUserLname = JSON.parse(this.loggedUserObj!).lname;
comments:IComment[] = [];
comment = {
  id: 0,
  content: '',
  writerId:0,
  date: new Date(),
  postId:0,
  fname:'',
  lname:'',

} as IComment;


@ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
@ViewChild('commentInput') commentInput!:ElementRef<HTMLInputElement>;
constructor(private postService:PostService , private commentService:CommentserviceService,public dialog: MatDialog ){}
ngOnInit():void {
  this.refreshPosts();
}
checkLiked(postId:number):void {
  this.postService.addLike(postId,this.loggedUserId).subscribe();
}
 toggleLike(post:Ipost):void {
  post.isLiked = !post.isLiked;
  this.refreshPosts();
}

refreshPosts():void { 
  this.postService.getAllPosts().subscribe({
    next: (posts:Ipost[]) => {
      this.post = posts;
      this.post.forEach((p:Ipost) => {
        p.pictureIds[0] = this.baseUrl + p.pictureIds;
        p.writer.profilePictureUrl = this.baseUrl+ p.writer.profilePictureUrl;
        if(p.likersIds.includes(this.loggedUserId)){
          p.isLiked = true;
        }
        console.log(p)
        this.comments.push({
          id:0,
          content: '',
          writerId:Number(this.loggedUserId),
          date: new Date(),
          postId:p.id,
          fname:this.loggedUserFname,
          lname:this.loggedUserLname,
        }as IComment); 
      })    
    },
    error : (response)=> {console.log(response)}
  })
}


addCommentToPost(comment:IComment):void {
  this.ProcessingComment = true;
  this.commentService.addComment(comment,comment.postId).subscribe(c=>{
    this.post.find(x=>x.id == comment.postId)?.comments.unshift(comment);
    this.commentInput.nativeElement.value = '';
    this.ProcessingComment = false;
    console.log( this.post.find(x=>x.id == comment.postId));
  });
}


getPostId(id:number){
this.comment.postId = id;
this.comment.writerId = this.loggedUserId;
this.comment.fname = this.loggedUserFname;
this.comment.lname = this.loggedUserLname;
}
openDialog(postId:number , commentIndex:number,writerId:number) {
  var commentId= this.post.find(x=>x.id == postId)?.comments[commentIndex].id

  const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {restoreFocus: false,data:{postId,commentId,writerId}});
  // Manually restore focus to the menu trigger since the element that
  // opens the dialog won't be in the DOM any more when the dialog closes.
  dialogRef.afterClosed().subscribe(x=>{
    // var arr =this.post.find(x=>x.id == postId);
    //  arr?.comments.splice(commentIndex,1);
    this.refreshPosts();
  });
}
}

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog-from-menu-example-dialog.html',
})
export class DialogFromMenuExampleDialog {
  comment2!:IComment;
  constructor(private commentService:CommentserviceService,@Inject(MAT_DIALOG_DATA) public data:{postId:number,commentId:number,writerId:number}) {
  }
  loggedUserObj = localStorage.getItem('loggedUser');
  loggedUserId = JSON.parse(this.loggedUserObj!).id;
  deleteComment() {
    if(this.data.writerId ==this.loggedUserId){
      this.commentService.deleteComment(this.data.postId,this.data.commentId).subscribe();
    }
  }
}
