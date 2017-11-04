import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers:[PostService]
})
export class CommentsComponent implements OnInit {
  comments:IComments[]; 
    constructor(private postService:PostService) {
      postService.getComments().subscribe(
        comment=>{
          console.log(comment);
          this.comments=comment;
      });
     }
  
    ngOnInit() {
  }
  
}
interface IComments{
  postId:string;
  id:string;
  name:string;
  email:string;
  body:string;
}
