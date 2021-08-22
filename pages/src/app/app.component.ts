import { Component } from '@angular/core';

interface IImages{
  title: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentPage: number = 0
  images: IImages[] = [
     {
      title: "Country Peace",
      url: "assets/img/image-1.jpg"
    },
     {
      title: "High mountains",
      url: "assets/img/image-3.jpg"
    },
     {
      title: "Retro bike",
      url: "assets/img/image-2.jpg"
    },
    {
      title: "At the beach",
      url: "assets/img/image-4.jpg"
    },
     {
      title: "Country Peace",
      url: "assets/img/image-1.jpg"
    },
     {
      title: "High mountains",
      url: "assets/img/image-3.jpg"
    },
     {
      title: "Retro bike",
      url: "assets/img/image-2.jpg"
    },
    {
      title: "At the beach",
      url: "assets/img/image-4.jpg"
    },
  ]

  displayPages(index: number):boolean{

    if(index<3){
      return index > this.currentPage - 2 && index < this.currentPage + 4?true:false
    }else if (this.currentPage===this.images.length-1){
      return index > this.currentPage - 3?true: false
    }else{
      return index > this.currentPage - 2 && index < this.currentPage + 2 ? true : false
    }
  }

  updateCurrentPage(page: number | string){
    if(typeof page === 'number'){
      this.currentPage = page;
    }else{
      page==='up'?this.currentPage===this.images.length-1?this.currentPage=0:this.currentPage+=1:
      this.currentPage===0?this.currentPage=this.images.length-1:this.currentPage-=1
    }
  }
}
