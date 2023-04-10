import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { CommentListComponent } from './Components/comment-list/comment-list.component';
// import { AddcommentComponent } from './Components/addcomment/addcomment.component';
// import { UpdatecommentComponent } from './Components/updatecomment/updatecomment.component'

const routes:Routes=[];

@NgModule({
  declarations: [
    // CommentListComponent,
    // AddcommentComponent,
    // UpdatecommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommentModule { }
