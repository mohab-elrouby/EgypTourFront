// import { Component, OnInit } from '@angular/core';
// import { CommentserviceService } from '../../Services/commentservice.service';
// import { IComment } from 'src/app/comment/Models/Icomment';


// @Component({
//   selector: 'app-comment-list',
//   templateUrl: './comment-list.component.html',
//   styleUrls: ['./comment-list.component.css']
// })
// export class CommentListComponent implements OnInit {
// comments :IComment[]=[];
// displayedColumns:string []=['comment','Date','Id'];
// datasource :IComment[]=[];
// constructor(private commentservices:CommentserviceService)
// {}
//   ngOnInit(): void {
//     this.commentservices.getAllcomment().subscribe({
// next: (comments)=>{
// this.comments=comments;
//   this.datasource=comments;
// },
// error: (Response)=>{console.log(Response);}
//     });
//   }
// }
