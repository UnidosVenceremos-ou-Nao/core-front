import { SecurityService } from './../services/security.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginGuard implements CanActivate {
  token: any = '';

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) {
    this.token = this.securityService.getToken();
    debugger;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.token) {
    return true;
    // }

    // this.router.navigate(['/login']);
    // return false;
  }
}
