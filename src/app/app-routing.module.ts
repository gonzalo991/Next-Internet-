import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { ContratarComponent } from './contratar/contratar.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'contratar', component: ContratarComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports:
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
