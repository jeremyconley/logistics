import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EmailService } from '../services/email.service';
import { Email } from '../models/email';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private http: HttpClient, private emailService: EmailService, private authService: AuthService) { }

  email = new Email();

  ngOnInit(): void {
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      this.email.to = contactForm.value.email;
      this.email.subject = "Your current password is: " + this.authService.password;
      this.emailService.sendEmail(this.email).subscribe(
        (data) => { alert("Email sent successfully"); }
      )
    }
  }

}
