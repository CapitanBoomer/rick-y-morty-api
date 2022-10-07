import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },

  {
    path: 'personajes',
    loadChildren: () => import('./paginas/personajes/personajes.module').then(m => m.PersonajesPageModule)
  },
  {
    path: 'personajes/:id',
    loadChildren: () => import('./paginas/info-personaje/info-personaje.module').then(m => m.InfoPersonajePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
