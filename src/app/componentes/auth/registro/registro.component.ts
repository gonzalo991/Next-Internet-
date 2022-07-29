import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/Models/nuevo-usuario';
import { AuthService } from 'src/app/Service/auth.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: NuevoUsuario = new NuevoUsuario();
  isLogged = false;
  roles: string[] = [];

  constructor(private tokenService: TokenService, private authService: AuthService,private route: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.nuevoUsuario);
    this.authService.registro(this.nuevoUsuario).subscribe(
      data=>{
        alert("Registrado con exito")
      },
      error => alert("No regisstrado")
    )
    this.route.navigate(["panelUsuario"])
  }



}
