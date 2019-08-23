import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  TestMock() {
    return this.http.get('api/test').pipe(
      tap((response) => {
        console.log('reponse mock', response);
        return response;
      })
    );
  }
  TestMockError() {
   return  this.http.get('real-api/error').pipe(
      tap((response) => {
        console.log('reponse mock', response);
        return response;
      }),
      catchError((err) => {
        throw (err);
      })
    );
  }
}
