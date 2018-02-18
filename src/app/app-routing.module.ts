import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {USUARIOS_ROUTES} from './components/usuario/routing.module';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'usuario/:id', component: UsuarioComponent, children: USUARIOS_ROUTES},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
