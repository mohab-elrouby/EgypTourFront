import { Component, OnInit } from '@angular/core';
import { IComment } from '../../Models/Icomment';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentserviceService } from '../../Services/commentservice.service';

@Component({
  selector: 'app-updatecomment',
  templateUrl: './updatecomment.component.html',
  styleUrls: ['./updatecomment.component.css']
})
export class UpdatecommentComponent implements OnInit {
commentDetails :IComment={
  comment:'',
  Date: ,
  Id:0
};
commentFrom : FormGroup;

constructor(private route : ActivatedRoute, private router
  : Router, private commentservices: CommentserviceService)
  {this.commentFrom = new FormGroup({
    comment : new FormControl('' , [Validators.required, Validators.minLength(2)]),
    Id: new FormControl('', [Validators.required]),
    Date : new FormControl('' , [Validators.required])
  });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params)=>
      {
        const id = params.get('id');
        if(id)
        {
          this.commentservices.getcommentById(id).subscribe({
            next : (response) =>
            {
              this.commentDetails = response;
              this.commentFrom.setValue({
         comment:this.commentDetails.comment,
         Date:this.commentDetails.Date,
         Id:this.commentDetails.Id
              });
              this.commentFrom.valueChanges.subscribe({
                next: data => this.commentDetails = data
              })
            }
          })
        }
      }
    });
  }
}
