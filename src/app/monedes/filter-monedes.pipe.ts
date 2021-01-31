import { Pipe, PipeTransform } from '@angular/core';
import { Moneda } from './moneda';

@Pipe({
  name: 'filterMonedes'
})
export class FilterMonedesPipe implements PipeTransform {

  transform(monedes: Moneda[], criteri: string): Moneda[] {
    
    
    criteri = criteri ? criteri.toLocaleLowerCase() : '';
    monedes = criteri ? monedes.filter(m => m.id.toLowerCase().includes(criteri)): monedes;
    
    return monedes;
  }

}
