import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toEur'
})
export class ToEurPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    
    return `${value}$: ${value*0.83}€` ;
  }

}
