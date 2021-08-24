import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _url: string = "https://logisticsapi20210819194526.azurewebsites.net/api/email";

  constructor(private http: HttpClient) { }

  sendEmail(emailData: any): Observable<Email[]> {
    return this.http.post<Email[]>(this._url, emailData)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

}
