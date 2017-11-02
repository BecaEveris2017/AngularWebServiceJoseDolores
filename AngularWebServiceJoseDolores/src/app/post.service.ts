import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{   
    constructor(private http:Http){
        console.log('post_service');
    }
    getPost(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(Response=> Response.json());
    }
    getComments(){
        return this.http.get('https://jsonplaceholder.typicode.com/comments').map(Response=> Response.json());
    }
    getAlbums(){
        return this.http.get('https://jsonplaceholder.typicode.com/albums').map(Response=> Response.json());
    }
    getPhotos(){
        return this.http.get('https://jsonplaceholder.typicode.com/photos').map(Response=> Response.json());
    }
    getTodos(){
        return this.http.get('https://jsonplaceholder.typicode.com/todos').map(Response=> Response.json());
    }
    getUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users').map(Response=> Response.json());
    }
    
}