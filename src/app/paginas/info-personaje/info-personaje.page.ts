import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { personajeparcial } from './../personajes/modelo/lista-pesonaje';
import { RickapiService } from './../../servicios/rickapi.service'
@Component({
  selector: 'app-info-personaje',
  templateUrl: './info-personaje.page.html',
  styleUrls: ['./info-personaje.page.scss'],
})
export class InfoPersonajePage implements OnInit {
  personajeId: string;
  character;
  constructor(
    private activaedRoute: ActivatedRoute,
    private http: HttpClient,) { }

  ngOnInit() {
    console.log(
      this.personajeId = this.activaedRoute.snapshot.paramMap.get('id'));
      this.http.get('https://rickandmortyapi.com/api/character/' + this.personajeId).subscribe(res =>{this.character = res})



  };

}


