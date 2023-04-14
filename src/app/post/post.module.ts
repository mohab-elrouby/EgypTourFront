import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './Components/post/post.component';
import { PostCardComponent } from './Components/post-card/post-card.component';
import { PostListComponent } from './Components/post-list/post-list.component';

const routes:Routes = [
  { path:'posts', component: PostComponent }
];

@NgModule({
  declarations: [
    PostCardComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PostListComponent]
})
export class PostModule { }
