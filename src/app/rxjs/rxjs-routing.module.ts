import { RxjsTestComponent } from './container/rxjs-test/rxjs-test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', component:RxjsTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
