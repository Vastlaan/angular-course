import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(km: number, units?: string): number {

    switch(units){
      case "mi":
        return km * 0.621371;
      case "in":
        return km * 39370.1
      default:
        return km * 0.621371;

    }
  }

}
