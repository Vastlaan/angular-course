import { Component } from '@angular/core';

interface Post{
  title: string;
  author: string;
  imageUrl: string;
  text: string;

} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  posts: Array<Post> = [
    {
      imageUrl : 'assets/img/image-1.jpg',
      title : 'This is the tree of life',
      author : 'Michal Antczak',
      text : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Delectus, voluptatibus libero! Nemo tenetur inventore iure dolor eaque temporibus quam pariatur.  
      `
    },
    {
      imageUrl : 'assets/img/image-2.jpg',
      title : 'Hiking bike, hyping vibe',
      author : 'Monika Antczak',
      text : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Delectus, voluptatibus libero! Nemo tenetur inventore iure dolor eaque temporibus quam pariatur.  
      `
    },
    {
      imageUrl : 'assets/img/image-3.jpg',
      title : 'This is the mountain',
      author : 'Gaga Gugu',
      text : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Delectus, voluptatibus libero! Nemo tenetur inventore iure dolor eaque temporibus quam pariatur.  
      `
    }
  ]
}
