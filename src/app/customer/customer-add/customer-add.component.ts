import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{CustomerService} from 'src/app/shared/services/customer.service'
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(public customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    
  }

  addLoanRequest(form:NgForm){
    console.log("inserting");
    this.customerService.insertLoanRequest(form.value)
    .subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
 onSubmit(form:NgForm){
   console.log(form.value);
  this.addLoanRequest(form);
  form.reset();
  this.router.navigateByUrl("/customer/list");
 }

}
