import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {


  headers: any[] = [
    {
      key: 'name',
      label: "Name"
    },
     {
      key: 'age',
      label: "Age"
    },
     {
      key: 'gender',
      label: "Gender"
    },
    {
      key: "job",
      label: "Job"
    }

  ]

  data: any[] = [
    {
      name: "Michal",
      age: "35",
      gender: "male",
      job: "developer"
    },
    {
      name: "Holly",
      age: "32",
      gender: "female"
    },
    {
      name: "Hally",
      age: "35",
      gender: "female",
      job: "sex worker"
    },
    {
      name: "Monika",
      age: "35",
      gender: "female"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
