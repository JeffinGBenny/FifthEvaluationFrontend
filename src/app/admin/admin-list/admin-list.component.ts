import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/shared/models/loan';
import { AdminService } from 'src/app/shared/services/admin.service';



@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  constructor(public adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.getAllLoanRequests();
  }

  updateLoanRequest(loan:Loan){
    this.populateLoanData(loan);
    console.log(loan);
    this.router.navigate(['admin/edit',loan.loanId]);
  }
  populateLoanData(loan:Loan){
    this.adminService.formAdminData=Object.assign({},loan);
  }
}
