import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesUserDetailsRoutingModule } from './sales-user-details-routing.module';
import { SalesUserDetailsComponent } from './sales-user-details.component';


@NgModule({
  declarations: [
    SalesUserDetailsComponent
  ],
  imports: [
    CommonModule,
    SalesUserDetailsRoutingModule
  ]
})
export class SalesUserDetailsModule { }
