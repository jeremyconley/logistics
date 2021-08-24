import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public password = "admin";
  private admin = "admin";

  private isLoggedIn: boolean;
  private userName: string | undefined;

  constructor() { 
    this.isLoggedIn = false;
  }

  login(username: string, password:string) {
    
    if (username == this.admin && password == this.password) {
      this.isLoggedIn = true;
      this.userName = username;
    }
    return of(this.isLoggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  isAdminUser(): boolean {
    if (this.userName == 'Admin') {
      return true;
    }

    return false;
  }

  logoutUser(): void {
    this.isLoggedIn = false;
  }

  changePassword(newPass: string, oldPass: string) : boolean{
    if (oldPass == this.password) {
      this.password = newPass;
      return true;
    } else {
      return false;
    }
  }

}

