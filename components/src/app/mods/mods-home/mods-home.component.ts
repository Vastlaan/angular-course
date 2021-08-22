import { Component, OnInit } from '@angular/core';

interface IItem{
  title?:string;
  content?: string;
}

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {

  showModal : boolean = false
  accordionItems :IItem[] = [
    {
      title : "What is love",
      content: "Baby don't hurt me. No more."
    },
    {
      title : "Dynamo as a god",
      content: "Fear of the greatest warth."
    },
    {
      title : "Is compacaballa?",
      content: "I'm the most accomplish surgeon of moral deformaity."
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }
  triggerModal(){
    this.showModal = !this.showModal
  }

}
