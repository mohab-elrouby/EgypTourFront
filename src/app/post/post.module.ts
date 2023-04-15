import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './Components/post/post.component';
import { PostCardComponent } from './Components/post-card/post-card.component';
import { PostListComponent } from './Components/post-list/post-list.component';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { FileInputDirective } from './Directives/file-input.directive';

const routes:Routes = [
  { path:'posts', component: PostComponent }
];

@NgModule({
  declarations: [
    PostCardComponent,
    PostListComponent,
    AddPostComponent,
    FileInputDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AddPostComponent,
    PostListComponent,]
})
export class PostModule { }
