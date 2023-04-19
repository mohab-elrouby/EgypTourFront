import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}

  loggedUserObj = localStorage.getItem('loggedUser');

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if((!this.loggedUserObj || this.loggedUserObj==null) && state.url !=='/home') {
        this.router.navigate(['/user/login']);
      }
    return true;
  }
  
}
