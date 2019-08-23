import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListContainerComponent } from './container/list-container/list-container.component';
import { ListPersonsComponent } from './component/list-persons/list-persons.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { DetailUserComponent } from './component/detail-user/detail-user.component';
import { FormUserComponent } from './component/form-user/form-user.component';
import { DetailFormUserComponent } from './component/detail-form-user/detail-form-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListContainerComponent,
    ListPersonsComponent,
    SearchbarComponent,
    DetailFormUserComponent,
    DetailUserComponent,
    FormUserComponent,
    ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ListContainerComponent, ListPersonsComponent]
})
export class ListModule { }
