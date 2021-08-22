import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // this catches events called from parent component
  @Output() close = new EventEmitter()

  @Input() title: string = ""
  @Input() content: string = ''
  @Input() button: string = ''

  constructor(private el: ElementRef) {
  }

  ngOnInit(){
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(){
    this.el.nativeElement.remove()
  }

  removeComponent(){
    // it calls acutal method passed from the parent component
    this.close.emit()
  }

  // removeComponent():void{
  //   const modal = document.querySelector('.modal') as HTMLElement
  //   modal.style.display = 'none'
  // }
  // showComponent():void{
  //   const modal = document.querySelector('.modal') as HTMLElement
  //   document.body.appendChild(modal)
  //   modal.style.display = 'flex'
  // }
  // // below fn is called on component build
  // ngOnInit(): void {
  //   const modal = document.querySelector('.modal') as HTMLElement
  //   modal.style.display = 'none'
  // }

  // ngOnDestroy():void{
  //   const modal = document.querySelector('.modal') as HTMLElement
  //   document.body.removeChild(modal)
  // }

}
