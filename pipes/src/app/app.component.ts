import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  name: string = ''
  date: string = ''
  amount: number = 0
  distance: number = 0

  updateName(event: Event){
    const target = event.target as HTMLInputElement
    const name = target.value
    this.name = name
  }
  updateDate(event: Event){
    const target = event.target as HTMLInputElement
    const dateArray = target.value.split('-')
    const date = dateArray.join('/')
    this.date = date
  }
  updateAmount(event: Event){
    const target = event.target as HTMLInputElement
    const amount = +target.value
    this.amount = amount
  }

  updateDistance(event: Event){
    const target = event.target as HTMLInputElement
    const distance = +target.value
    this.distance = distance
  }
}
