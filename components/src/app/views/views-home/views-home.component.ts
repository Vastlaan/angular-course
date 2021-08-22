import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  stats=[
    { value: 200, label: 'Users'},
    { value: 5300, label: 'Deals'},
    { value: 1203, label: 'Reviews'},
  ]

  items = [
    {
      imageUrl: 'assets/img/image-1.jpg',
      title: 'Tree of life',
      description: 'Touch the sky through the window. O rose thou art sick.'
    },
     {
      imageUrl: 'assets/img/image-2.jpg',
      title: 'Bike like a pro',
      description: 'Invisible worm, the vision and the void. Touch the sky through the window. O rose thou art sick.'
    },
     {
      imageUrl: 'assets/img/image-3.jpg',
      title: 'Beautiful landscapes',
      description: 'Touch the sky through the window. O rose thou art sick. Touch the sky through the window. O rose thou art sick. Touch the sky through the window. O rose thou art sick.'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
