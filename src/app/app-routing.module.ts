import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { TareasPublicasComponent } from './components/tareas-publicas/tareas-publicas.component';
import { TareasPrivadasComponent } from './components/tareas-privadas/tareas-privadas.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroComponent } from './components/registro/registro.component';

import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tareaspublicas',
    pathMatch: 'full'
  },
  {
    path: 'tareaspublicas',
    component: TareasPublicasComponent
  },
  {
    path: 'tareasprivadas',
    component: TareasPrivadasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ingreso',
    component: IngresoComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
