import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '../Service/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  realRol: string;

  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const roles = this.tokenService.getAuthorities();
    this.realRol = "user";
    roles.forEach(rol => {
      if (rol == 'ROLE_ADMIN') {
        this.realRol = "admin";
      }
    });
    
    return true;
  }
}
