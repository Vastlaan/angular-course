import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {pluck} from 'rxjs/operators'

interface IApi{
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoProviderService {

  constructor(private http: HttpClient) { }

  getPhoto(){
    return this.http.get<IApi>(`https://dog.ceo/api/breeds/image/random`).pipe(pluck('message'))
  }
}
