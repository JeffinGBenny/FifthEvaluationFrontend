import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {path:'add',component:CustomerAddComponent},
  //employee list
  {path:'list',component:CustomerListComponent},

  //employee edit
  {path:'edit/:id',component:CustomerListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
