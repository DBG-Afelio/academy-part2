import { RxjsTestComponent } from './container/rxjs-test/rxjs-test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';


@NgModule({
  declarations: [
    RxjsTestComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
    ]
})
export class RxjsModule { }
