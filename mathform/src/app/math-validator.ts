import { AbstractControl } from "@angular/forms";

export class MathValidator {

  static addition(target: string, sourceOne: string, sourceTwo: string){

    return (form: AbstractControl) =>{
      const firstValue = form.value[sourceOne]
      const secondValue = form.value[sourceTwo]
      const answer = form.value[target]
      const sum = firstValue + secondValue
  
      if(parseInt(answer) !== sum){
        return {
          addition: false
        }
      }
      return null
    }
  }
}
