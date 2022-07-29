import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PanelUsuarioComponent } from './componentes/panel-usuario/panel-usuario.component';
import { GuardService as guard } from './guards/guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'panelUsuario', component: PanelUsuarioComponent, canActivate: [guard]}
];

@NgModule({
  imports:
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
