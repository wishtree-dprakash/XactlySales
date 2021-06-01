import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'sales-progress-dashboard',pathMatch:'full'},
  { path: 'sales-progress-dashboard', loadChildren: () => import('./sales-work-progress/sales-work-progress.module').then(m => m.SalesWorkProgressModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
