import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPersonajePageRoutingModule } from './info-personaje-routing.module';

import { InfoPersonajePage } from './info-personaje.page';


import {RickapiService} from './../../servicios/rickapi.service';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPersonajePageRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [InfoPersonajePage],
  providers:[RickapiService//requiere HttpClient
]
})
export class InfoPersonajePageModule {}
