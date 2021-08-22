import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,  // this is simply reference to the DOM element which use this directive
                                              // it is like ElementRef, but more powerful
    private template: TemplateRef<any>        // this is reference to all childs of viewContainer
  ) {}
  
  @Input('appTimes') set render(times: number){
    this.viewContainer.clear()

    for(let i=0; i < times; i++){
      // the second object is an context which holds key: value pairs ready for ALIASING
      // they are not ready to use in the template, but might be accessed after ; on calling this directive
      // for example [appTimes] = "10 ; let index=iteration" 
      this.viewContainer.createEmbeddedView(this.template, {
        iteration: i                            
      })
    }
  }
}
