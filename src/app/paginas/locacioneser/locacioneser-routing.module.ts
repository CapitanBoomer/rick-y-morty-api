import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocacioneserPage } from './locacioneser.page';

const routes: Routes = [
  {
    path: '',
    component: LocacioneserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocacioneserPageRoutingModule {}
