import { Component, OnInit } from '@angular/core';
import { Moneda } from '../moneda';
import { MonedesService } from '../monedes.service';

@Component({
  selector: 'app-monedes-list',
  templateUrl: './monedes-list.component.html',

})
export class MonedesListComponent implements OnInit {
  
  monedes: Moneda[] = [
    {id: 'moneda1', price: 33000, name: 'bitcoin'},
    {id: 'moneda2', price: 1200, name: 'ethereum'},
    {id: 'moneda3', price: 15, name: 'polkadot'},
  
  ];

  criteri: string = '';

  constructor(private monedesService: MonedesService) { }

  ngOnInit(): void {
    this.monedesService.getMonedes().subscribe(
      monedes => this.monedes = monedes
    )
  }

}
