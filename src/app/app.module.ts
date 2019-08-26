import { TestInterceptor } from './interceptor/test.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsModule } from './rxjs/rxjs.module';
import localeFr from '@angular/common/locales/fr';

import { ListModule } from './list/list.module';
import { MockHttpInterceptor } from './interceptor/mock-http.interceptor';
import { environment } from 'src/environments/environment';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    RxjsModule,
    HttpClientModule
  ],
  providers: [
    environment.mock.enable ? {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttpInterceptor,
      multi: true
  } : []
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
