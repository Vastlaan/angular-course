import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {

  // setValue is a method on FormControl, which we override
  setValue(value:string | null, options: any){
    
    if(!value){
      super.setValue("", {emitModelToViewChange: true})
      return
    }
    
    if(value.match(/[^0-9|\/]/gi ) || value.length > 5){
      super.setValue(this.value, {emitModelToViewChange: true})
      return
    }   
    if(value.length===2 && this.value.length===3){
      super.setValue(value, {emitModelToViewChange: true})
      return
    }
    if(value.length===2){
      super.setValue(value + '/', {emitModelToViewChange: true})
      return
    }

    // we actually call the parent class setValue method with modyfied value and extra option
    super.setValue(value, {...options, emitModelToViewChange: true})
  }
}
