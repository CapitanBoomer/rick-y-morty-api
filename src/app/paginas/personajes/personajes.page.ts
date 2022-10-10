import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  public characters = [];
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    console.log('aqui esta todo')
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(res => {this.characters = res.results})

  }

}
