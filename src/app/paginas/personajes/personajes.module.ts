import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PersonajesPageRoutingModule } from './personajes-routing.module';



import {RickapiService} from './../../servicios/rickapi.service';



import { PersonajesPage } from './personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajesPageRoutingModule,
    RouterModule,
    HttpClientModule, //proovedor del servicio httpclient
  ],
  declarations: [PersonajesPage],
  providers:[RickapiService//requiere HttpClient
]
})
export class PersonajesPageModule {}
