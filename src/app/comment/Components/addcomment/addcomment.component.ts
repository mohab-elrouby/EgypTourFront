import { Component } from '@angular/core';
import { IComment } from '../../Models/Icomment';
import { CommentserviceService } from '../../Services/commentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent {
  addcomment: IComment = {
    comment:'',
    Date:,
    Id:0
      }
      constructor(private commentservice:CommentserviceService,private router: Router)
      {}
      addcommentcomponents() {
        this.commentservice.addComment(this.addcomment).subscribe({
          next: (comment) => this.router.navigate(['/comment/comment']),
          error: (err) => console.log(err)
    
        });
      }
    }
    

