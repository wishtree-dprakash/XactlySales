import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesUserDetailsComponent } from './sales-user-details.component';

const routes: Routes = [{ path: '', component: SalesUserDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesUserDetailsRoutingModule { }
