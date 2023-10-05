import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanOfficerRoutingModule } from './loan-officer-routing.module';
import { LoanOfficerComponent } from './loan-officer.component';
import { LoanOfficerListComponent } from './loan-officer-list/loan-officer-list.component';


@NgModule({
  declarations: [LoanOfficerComponent, LoanOfficerListComponent],
  imports: [
    CommonModule,
    LoanOfficerRoutingModule
  ]
})
export class LoanOfficerModule { }
