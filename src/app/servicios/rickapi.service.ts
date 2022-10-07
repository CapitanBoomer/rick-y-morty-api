import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ListaPesonaje} from './../paginas/personajes/modelo/lista-pesonaje'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RickapiService {
  public URL_API: string = 'https://rickandmortyapi.com/api/character'
  constructor(
    private cliente: HttpClient
  ) { }

public obtenerPrimerosPersonaje(): Observable<ListaPesonaje>{
  return this.cliente.get<ListaPesonaje>(this.URL_API);

}
}
