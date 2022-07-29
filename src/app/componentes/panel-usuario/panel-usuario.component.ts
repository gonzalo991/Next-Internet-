import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.scss']
})
export class PanelUsuarioComponent implements OnInit {

  isLogged = false;
  nombreUsuario = "";

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName()!;
    } else {
      this.isLogged = false;
      this.nombreUsuario = "";
    };
  };

}
