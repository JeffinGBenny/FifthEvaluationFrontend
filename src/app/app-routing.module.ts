import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import {CustomerComponent} from 'src/app/customer/customer.component'
import {LoanOfficerComponent} from 'src/app/loan-officer/loan-officer.component'
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'',redirectTo:'auth/login',pathMatch:'full'
  },
  {path:'auth',component:AuthComponent,
loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)
},
{path:'customer',component:CustomerComponent,
  loadChildren:()=>import('./customer/customer.module').then(x=>x.CustomerModule)
},
{path:'loanOfficer',component:LoanOfficerComponent,
  loadChildren:()=>import('./loan-officer/loan-officer.module').then(x=>x.LoanOfficerModule)
},
{path:'admin',component:AdminComponent,
  loadChildren:()=>import('./admin/admin.module').then(x=>x.AdminModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
