import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import { SalesWorkProgressRoutingModule } from './sales-work-progress-routing.module';
import { SalesWorkProgressComponent } from './sales-work-progress.component';
import { SalesUserComponent } from './components/sales-user/sales-user.component';
import { SalesUserCardComponent } from './components/sales-user-card/sales-user-card.component';


@NgModule({
  declarations: [
    SalesWorkProgressComponent,
    SalesUserComponent,
    SalesUserCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SalesWorkProgressRoutingModule
  ]
})
export class SalesWorkProgressModule { }
