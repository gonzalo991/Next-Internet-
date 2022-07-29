import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../Models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../Models/login-usuario';
import { JwtDAO } from '../Models/jwt-dao';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/'

  constructor(private httpClient: HttpClient) { }

  public registro(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(`${this.authURL}` + 'registro', nuevoUsuario);
  };

  public login(loginUsuario: LoginUsuario): Observable<JwtDAO> {
    return this.httpClient.post<JwtDAO>(`${this.authURL}` + 'login', loginUsuario);
  };

}
