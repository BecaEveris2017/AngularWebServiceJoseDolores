import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[PostService]
})

export class UsersComponent implements OnInit {
  users:IUsers[]; 
  constructor(private postService:PostService) {
    postService.getUsers().subscribe(
      user=>{
        console.log( user);
        this.users=user;
    });
   }
  ngOnInit() {
  }
}
interface IUsers{
  id:string;
  name:string;
  username:string;
  email:string;
  address:string;
} 