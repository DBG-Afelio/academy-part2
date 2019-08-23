import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'list', loadChildren : () => import('./list/list.module').then(m => m.ListModule)},
  {path : 'rxjs', loadChildren : () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
