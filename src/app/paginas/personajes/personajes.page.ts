import { Component, OnInit } from '@angular/core';
import {RickapiService} from './../../servicios/rickapi.service'
import {ListaPesonaje, personajeparcial} from './modelo/lista-pesonaje'
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
public personajes:Array<personajeparcial> = [];
  constructor(
    private apiRick: RickapiService
  ) { }

  ngOnInit() {
    this.apiRick.obtenerPrimerosPersonaje().subscribe (losDatos =>{this.personajes = losDatos.results});

  }

}
