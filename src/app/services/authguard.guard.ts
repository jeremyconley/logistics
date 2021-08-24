import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    //Guard Logic
    if (!this.authService.isUserLoggedIn()) { //If we are not logged in..
      alert("You are not authorized to view this page. Redirecting to login..");
      //Navigate to login.
      this.router.navigate(["login"], {queryParams: {retUrl: route.url }})
      return false;
    }
    return true;
  }
  
}
