import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {delay, filter, scan} from 'rxjs/operators'
import { MathValidator } from '../math-validator';

@Component({
  selector: 'app-equasion',
  templateUrl: './equasion.component.html',
  styleUrls: ['./equasion.component.scss']
})
export class EquasionComponent implements OnInit {

  averageResolvingTime = 0

  mathForm = new FormGroup({
    a: new FormControl(this.generateRandomValue()),
    b: new FormControl(this.generateRandomValue()),
    answer: new FormControl("")
  },[
    MathValidator.addition("answer", "a", "b")
  ])

  constructor() { }

  ngOnInit(): void {
    // statusChange is the Observable Subject which emits the value of the form being valid or not
    this.mathForm.statusChanges
      .pipe(
        filter(value=>value==="VALID"), // the rest of functions will run only if filter returns true
        delay(500),
        scan((acc)=>{
          return {
            numberSolutions: acc.numberSolutions + 1,
            startTime: acc.startTime
          }
        }, {numberSolutions: 0, startTime: new Date().getTime()})
      )
      .subscribe(({numberSolutions, startTime})=>{
       
        this.averageResolvingTime = (
          new Date().getTime() - startTime
        ) / numberSolutions / 1000
        // this.mathForm.controls.answer.setValue("")
        // this.mathForm.controls.a.setValue(this.generateRandomValue())
        // this.mathForm.controls.b.setValue(this.generateRandomValue())
        this.mathForm.setValue({
          a: this.generateRandomValue(),
          b: this.generateRandomValue(),
          answer: ""
        })
      })

  }

  get a(){
    return this.mathForm.value.a  // equivalent of this.mathForm.get('a') or this.mathForm.controls.a.value
  }
  get b(){
    return this.mathForm.value.b
  }

  generateRandomValue(){
    return Math.floor(Math.random() * 10)
  }

}
