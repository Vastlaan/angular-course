import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pages: any[] = []

  constructor(private wikipedia: WikipediaService){}
  
  onTerm(term: string){
    // wikipedia service has search method, which returns Observable. 
    // we can subscribe to any value emmited from this Observable
    this.wikipedia.search(term).subscribe((pages)=>{
      this.pages = pages
    })
    
  }
}
