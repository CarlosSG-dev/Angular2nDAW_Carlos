import { Component, Input, OnInit } from '@angular/core';
import { Moneda } from '../moneda';

@Component({
  selector: 'app-monedes-item',
  templateUrl: './monedes-item.component.html',
 
})
export class MonedesItemComponent implements OnInit {
  
  @Input() moneda: Moneda;

  constructor() { }

  ngOnInit(): void {
  }

}
