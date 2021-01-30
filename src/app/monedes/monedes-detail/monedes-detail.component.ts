import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moneda } from '../moneda';
import { MonedesService } from '../monedes.service';

@Component({
  selector: 'app-monedes-detail',
  templateUrl: './monedes-detail.component.html',
  
})
export class MonedesDetailComponent implements OnInit {

  moneda: Moneda;

  constructor(private activatedRoute: ActivatedRoute,
    private monedesService: MonedesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(m => {
      this.monedesService.getMoneda(m.id).subscribe(moneda => this.moneda = moneda);
    });
  }

}
