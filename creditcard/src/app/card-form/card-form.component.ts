import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  // FormGroup is actual an abstraction of the <form> element, it takes properities to handle as an argument
  cardForm= new FormGroup({
    // FormControl is a single form properity, it takes as first arg an initial value, second arg is an array of validations
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]
    ),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[0-9]|1[0-2])\/\d{2}$/)]),
    controlNumber: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  })

  constructor() { 
    // log it out just to be aware of what the actual fromControl returns
    console.log(this.cardForm.get('name'))
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

  resetForm(){
    console.log('clicked')
    this.cardForm.reset()
  }

}
