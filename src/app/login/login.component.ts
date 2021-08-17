import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string | undefined;
  username: string | undefined;
  password: string | undefined;
  retUrl: string | null="home";

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onFormSubmit(loginForm: any) {
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
      console.log('return to ' + this.retUrl);
      console.log(this.retUrl);
      if(this.retUrl != null) {
        this.router.navigate([this.retUrl]);
      } else {
        this.router.navigate(['home']);
      }
    })
  }

  forgotPassword(){
    console.log(`Hellloooo`);
    const dialogRef = this.dialog.open(ForgotpasswordComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
