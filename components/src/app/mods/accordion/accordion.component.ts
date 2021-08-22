import { Component, OnInit, Input } from '@angular/core';

interface IItem{
  title?:string;
  content?: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() items: IItem[] = []

  ind: number = 0

  constructor() { }

  ngOnInit(): void {
  }
  setIndex(index: number){
    this.ind = index
  }

}
