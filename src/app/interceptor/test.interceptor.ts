import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Generated file, do not do not modify it.
 */
@Injectable()
export class TestInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('interception', request);
      return of(new HttpResponse(
        {
          status: 200,
          body: {message: 'hello'}
        })
      );
      //return next.handle(request);
    }
}
