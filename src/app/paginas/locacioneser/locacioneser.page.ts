import { Component, OnInit } from '@angular/core';
import { RickapiService } from './../../servicios/rickapi.service'
import { Locacionesparciales } from './../../paginas/locacioneser/modelo/locaciones'
@Component({
  selector: 'app-locacioneser',
  templateUrl: './locacioneser.page.html',
  styleUrls: ['./locacioneser.page.scss'],
})
export class LocacioneserPage implements OnInit {
  public lugares: Array<Locacionesparciales> = [];
  constructor(private rickapi: RickapiService) { }

  ngOnInit() {
    this.rickapi.obtenerprimerosveiculos().subscribe(datos => { this.lugares = datos.results });

  }

}
