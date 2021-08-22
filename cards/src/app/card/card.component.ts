import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imageUrl: string = 'assets/img/image-1.jpg'
  @Input() title: string = 'This is the tree of life'
  @Input() author: string = 'Michal Antczak'
  @Input() text: string = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Delectus, voluptatibus libero! Nemo tenetur inventore iure dolor eaque temporibus quam pariatur.  
  `

  constructor() { }

  ngOnInit(): void {
  }

}
