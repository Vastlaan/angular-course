import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Options{
  label: string;
  placeholder: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control : FormControl | any
  @Input() options: Options | any

  constructor() { }

  ngOnInit(): void {
  }

}
