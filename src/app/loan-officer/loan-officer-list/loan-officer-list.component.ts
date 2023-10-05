import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanOfficerService } from 'src/app/shared/services/loan-officer.service';

@Component({
  selector: 'app-loan-officer-list',
  templateUrl: './loan-officer-list.component.html',
  styleUrls: ['./loan-officer-list.component.scss']
})
export class LoanOfficerListComponent implements OnInit {

  constructor(public loanOfficerService:LoanOfficerService,private router:Router) { }

  ngOnInit(): void {
    this.loanOfficerService.getAllLoanRequests();
  }

}
