import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email = ""
  password = ""

  onSubmit(){
    console.log(this.email, this.password)
  }
}
