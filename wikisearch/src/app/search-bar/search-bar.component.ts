import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() submittedForm = new EventEmitter<string>()

  term: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any){
    event.preventDefault()
    // this will be send out and available to every parent component, which can call (submittedForm)="parentFunction($event)"
    this.submittedForm.emit(this.term) 
  }

}
