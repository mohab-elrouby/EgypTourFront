import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './Components/post/post.component';
import { DialogFromMenuExampleDialog, PostCardComponent } from './Components/post-card/post-card.component';
import { PostListComponent } from './Components/post-list/post-list.component';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { FileInputDirective } from './Directives/file-input.directive';
import { TimeOnlyPipe } from './Components/Pipes/time-only.pipe';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
const routes:Routes = [
  { path:'posts', component: PostComponent }
];

@NgModule({
  declarations: [
    PostCardComponent,
    PostListComponent,
    AddPostComponent,
    FileInputDirective,
    TimeOnlyPipe,
    DialogFromMenuExampleDialog
  ],
  imports: [
  CommonModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    TextFieldModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AddPostComponent,
    PostListComponent,
    TimeOnlyPipe
  ]
})
export class PostModule { }
