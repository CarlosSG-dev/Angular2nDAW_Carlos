import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moneda } from './moneda';
import {map,filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonedesService {
  
  constructor(private http:HttpClient) { }

  monedesURL = '/assets/monedes.json';

  getMonedes(): Observable<Moneda[]>{   // retorna un observable al que cal subscriure's
    return this.http.get<{monedes: Moneda[]}>(this.monedesURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
      map(response => response.monedes) // de la resposta traguem l'array que ens interessa
      );
    }
  getMoneda(id:string): Observable<Moneda>{   // retorna un observable al que cal subscriure's
      return this.http.get<{monedes: Moneda[]}>(this.monedesURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
        map(response => response.monedes.filter(m => m.id === id)[0]) // de la resposta traguem l'array que ens interessa
        );
}
}
