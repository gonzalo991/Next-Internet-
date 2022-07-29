import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PanelUsuarioComponent } from './componentes/panel-usuario/panel-usuario.component';
import { interceptorProvider } from './Interceptors/prod-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    PanelUsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
