import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ListaPesonaje,personajeparcial} from './../paginas/personajes/modelo/lista-pesonaje'
import {Listalugares}  from'./../paginas/locacioneser/modelo/locaciones'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RickapiService {
  public personajes_url: string = 'https://rickandmortyapi.com/api/character/';
  public lugares_url:string='https://rickandmortyapi.com/api/location';
  public personaje_url: string = 'https://rickandmortyapi.com/api/character/';
  constructor(
    private cliente: HttpClient
  ) { }

public obtenerPrimerosPersonaje(): Observable<ListaPesonaje>{
  return this.cliente.get<ListaPesonaje>(this.personajes_url);

}
public obtenerprimerosveiculos(): Observable<Listalugares>{
  return this.cliente.get<Listalugares>(this.lugares_url);

}
public obtenerPersonaje(): Observable<ListaPesonaje>{
  return this.cliente.get<ListaPesonaje>(this.personaje_url);

}
}
