import { Directive, ElementRef, Input } from '@angular/core';

interface IClass{
  [key: string]: boolean;
}

@Directive({
  selector: '[applyClass]'
})
export class ApplyClassDirective {

  
  constructor(private element: ElementRef) { 
    
    element.nativeElement.style.margin = '2.7rem'
    element.nativeElement.style.padding = '1.4rem'
    element.nativeElement.style.color = 'white'
  }

  @Input('applyClass') set className(classObj: IClass){

    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key)
      }else{
        this.element.nativeElement.classList.remove(key)
      }
    }
  }
  
  // @Input() set backgroundColor(color: string){
  //   this.element.nativeElement.style.backgroundColor = color
  // }

  // // below we use applyClass directive selector 
  // // to assign (set) backgroundColor property (set backgroundColor is an equivalent of this.backgroundColor=...)
  // // and at the same time sepecify applyClass selector in html template in html file
  // @Input('applyClass') set backgroundColor(color: string){
  //   this.element.nativeElement.style.backgroundColor = color
  // }
}
