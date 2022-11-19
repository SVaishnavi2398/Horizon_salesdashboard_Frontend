import { AuthService } from '../../../app/service/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService, private Token: TokenService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const loggedIn = this.Token.loggedIn();
    console.log("loggedIn ", loggedIn);
    return true;

    if (!this.Token.loggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
