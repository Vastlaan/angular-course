import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {

  @Input() header: boolean = true;
  @Input() lines: number = 4;

  constructor() { }

  ngOnInit(): void {
  }

  counter(){
    return new Array(this.lines)
  }

}
