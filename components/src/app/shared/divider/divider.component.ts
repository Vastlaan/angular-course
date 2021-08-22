import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {

  constructor(private element: ElementRef) { 
  }

  @Input() set color(color: string){
    
    this.element.nativeElement.children[0].style.boxShadow = `0 0 3px ${color}`;
    this.element.nativeElement.children[0].style.color = color;
    this.element.nativeElement.children[0].children[0].style.boxShadow = `0 1px 2px ${color}`;
    this.element.nativeElement.children[0].children[2].style.boxShadow = `0 1px 2px ${color}`;
  }

  ngOnInit(): void {
  }

}
