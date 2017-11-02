import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[PostService]
})
export class TodosComponent implements OnInit {
todos:ITodos[];
  constructor(private postService:PostService) { 

      postService.getTodos().subscribe(
      todos=>{
        console.log(todos);
        this.todos=todos;
    });
  }

  ngOnInit() {
  }

}
interface ITodos{
  userId:string;
  id:string;
  title:string;
  complete:string;
} 
