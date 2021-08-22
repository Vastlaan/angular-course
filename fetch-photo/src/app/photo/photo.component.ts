import { Component, OnInit } from '@angular/core';
import { PhotoProviderService } from '../photo-provider.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  url: string = ''
  name= "Beautiful image"

  constructor(private photoProvider: PhotoProviderService){}

  ngOnInit(): void {
  }

  changePhoto(){
    this.photoProvider.getPhoto().subscribe(url=>{
      this.url = url
    })
  }

}
