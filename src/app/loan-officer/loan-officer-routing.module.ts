import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanOfficerListComponent } from './loan-officer-list/loan-officer-list.component';

const routes: Routes = [
 
  //employee list
  {path:'list',component:LoanOfficerListComponent},

  //employee edit
  {path:'edit/:id',component:LoanOfficerListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanOfficerRoutingModule { }
