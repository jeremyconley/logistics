import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceProvider } from '../models/serviceprovider';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _url: string = "https://logisticsapi20210819194526.azurewebsites.net/api/contacts";

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getContacts(serviceId: number): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(this._url + '?serviceID=' + serviceId)
    .pipe(catchError(this.errorHandler));
  }
  getContactById(id: number): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }

  postContact(contactData: any): Observable<ServiceProvider[]> {
    return this.http.post<ServiceProvider[]>(this._url, contactData)
    .pipe(catchError(this.errorHandler));
  }

  updateContact(id: number, contactData: any): Observable<ServiceProvider[]> {
    return this.http.put<ServiceProvider[]>(this._url + '/' + id, contactData)
    .pipe(catchError(this.errorHandler));
  }

  deleteContact(id: number): Observable<ServiceProvider[]> {
    return this.http.delete<ServiceProvider[]>(this._url + '/' + id);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
