import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostService]
})
export class PostsComponent implements OnInit{
  posts:IPosts[];
  constructor(private postService:PostService){
        //console.log();
    postService.getPost().subscribe(
          post=>{
            console.log(post);
          this.posts=post;
        });
    }
    ngOnInit() {
    }
  }
interface IPosts{
  id:string;
  title:string;
  body:string;
} 