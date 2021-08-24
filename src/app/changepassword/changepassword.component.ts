import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(changePassForm: NgForm){
    if (this.authService.changePassword(changePassForm.value.newPass, changePassForm.value.oldPass)) {
      alert("Password changed successfully");
      this.authService.logoutUser();
      this.router.navigate(['login']);
    } else {
      alert("Error. Old password does not match");
    }
  }

}
