import { Component } from '@angular/core';
import {PostService} from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostService]
}
)
export class AppComponent {
  title:string;
  nombre:string;
  email:string;
  colores:string[];
  showcolor:boolean;
  //posts:IPost[];
  constructor(private postService:PostService){
    console.log('constructor works');
    this.title='Everis angular';
    this.nombre='jose dolores';
    this.email='Lole.Resendiz@gmail.com';
    this.colores=['rojo','verde','amarillo'];
    this.showcolor=false;
    
    
    postService.getPost().subscribe(posts=>{
      console.log(posts)
      //this.posts=posts;
    });
    
  }
  
  mostrarListaColores = false;

  funcion_enviar(valorColor) {
    console.log(valorColor.value);
    this.colores.push(valorColor.value);
    valorColor.value="";
    return false;
  }

  funcion_Mostrar(){
    this.mostrarListaColores=!this.mostrarListaColores;
  }

}


