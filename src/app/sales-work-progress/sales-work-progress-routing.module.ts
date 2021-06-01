import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesWorkProgressComponent } from './sales-work-progress.component';

const routes: Routes = [{ path: '', component: SalesWorkProgressComponent }, { path: 'sales-user-details', loadChildren: () => import('../sales-user-details/sales-user-details.module').then(m => m.SalesUserDetailsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesWorkProgressRoutingModule { }
