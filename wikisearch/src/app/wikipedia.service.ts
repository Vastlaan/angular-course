import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators'

interface WikipediaResponse{
  query:{
    search: {
      title: string;
      snippet: string;
      wordcount: number;
      pageid: number;
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string){

    // the http module has get method which returns Observable,
    // so this whole method returns RxJs Observable (consumed in app.component.ts - for further reviews)
    return this.http.get<WikipediaResponse>("https://en.wikipedia.org/w/api.php", {
      // object params will be turned into query parameters like: ?key=value&key2=value2 and so on
      params:{
        action: "query",
        list: "search",
        utf8: "1",
        srsearch: term,
        format: "json",
        origin: "*"
      }
    })
    .pipe(
      pluck('query', 'search')
    )
  }
}
