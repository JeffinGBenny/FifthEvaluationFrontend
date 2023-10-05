import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  constructor(public adminService:AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  editLoanRequest(form: NgForm) {
    console.log("Editing");
    this.adminService.updateEmployee(form.value)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.editLoanRequest(form);
    form.reset();
    this.router.navigateByUrl("/employees/list");
  }
}
