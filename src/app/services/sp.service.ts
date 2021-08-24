import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceProvider } from '../models/serviceprovider';

@Injectable({
  providedIn: 'root'
})
export class SpService {

  private _url: string = "https://logisticsapi20210819194526.azurewebsites.net/api/SERVICE_PROVIDERS";

  constructor(private http: HttpClient) { }

  getServiceProviders(): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  getServiceProviderById(id: number): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }

  postServiceProvider(spData: any): Observable<ServiceProvider[]> {
    return this.http.post<ServiceProvider[]>(this._url, spData)
    .pipe(catchError(this.errorHandler));
  }

  updateServiceProvider(id: number, spData: any): Observable<ServiceProvider[]> {
    return this.http.put<ServiceProvider[]>(this._url + '/' + id, spData)
    .pipe(catchError(this.errorHandler));
  }

  deleteServiceProvider(id: number): Observable<ServiceProvider[]> {
    return this.http.delete<ServiceProvider[]>(this._url + '/' + id);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }


}
