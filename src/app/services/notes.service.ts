import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceProvider } from '../models/serviceprovider';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private _url: string = "https://logisticsapi20210819194526.azurewebsites.net/api/NOTES";

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getNotes(serviceId: number): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(this._url + '?serviceID=' + serviceId)
    .pipe(catchError(this.errorHandler));
  }
  getNoteById(id: number): Observable<ServiceProvider[]> {
    return this.http.get<ServiceProvider[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }

  postNote(noteData: any): Observable<ServiceProvider[]> {
    return this.http.post<ServiceProvider[]>(this._url, noteData)
    .pipe(catchError(this.errorHandler));
  }

  updateNote(id: number, noteData: any): Observable<ServiceProvider[]> {
    return this.http.put<ServiceProvider[]>(this._url + '/' + id, noteData)
    .pipe(catchError(this.errorHandler));
  }

  deleteNote(id: number): Observable<ServiceProvider[]> {
    return this.http.delete<ServiceProvider[]>(this._url + '/' + id);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
