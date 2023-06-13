import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  productURL = 'https://fakestoreapi.com/products'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'image/png'
    })
  }

  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get(this.productURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
