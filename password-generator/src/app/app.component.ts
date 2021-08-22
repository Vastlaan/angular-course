import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  length: number = 0

  includeLetters: boolean = true
  includeNumbers: boolean = false
  includeSymbols: boolean = false

  password : string = ''
  greetings : string = 'Welcome in our password generator software!'

  onChangeUseLetters(): void{
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers(): void{
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols(): void{
    this.includeSymbols = !this.includeSymbols
  }
  onLengthUpdate(e: Event): void{

    const target = e.target as HTMLInputElement
    const parsedValue = +target.value

    // if the input contains letters or symbols, cannot be parsed to number, return NaN, therefore this check
    if(!isNaN(parsedValue)){
      this.length = parsedValue
    }
  }

  isReady() : boolean{
    if(this.length && (this.includeLetters || this.includeNumbers || this.includeSymbols)){
      return false
    }else{
      return true
    }
  }

  onButtonClick(){
    let charPool = ''
    let generatedPassword = ''

    if(this.includeLetters){charPool+='abcdefghijklmnopqrstuvwxyz'}
    if(this.includeNumbers){charPool+='1234567890'}
    if(this.includeSymbols){charPool+='!@#$%^&*()'}

    console.log(charPool, this.includeSymbols)

    for(let int=0; int < this.length; int++){
      const randomIndex = Math.floor(Math.random() * charPool.length)
      generatedPassword+=charPool[randomIndex]
    }
    
    this.password = generatedPassword
  }
}
