import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { Loan } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formCustomerData:Loan=new Loan();
 loanRequests:Loan[];
  constructor(private httpClient:HttpClient) { }

  insertLoanRequest(loan:Loan):Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/customer/loanRequest',loan);
  
   }

   getAllLoanRequests():void{
    this.httpClient.get(environment.apiUrl+'/customer/loanRequest')
    .toPromise()
    .then(response=>{
      console.log(response);
      this.loanRequests=response as Loan[];
    }
    ,
    error=>{
      console.log('Error');
    });
  }
  
  getAllEmployeesList():Observable<any>{
    return  this.httpClient.get(environment.apiUrl+'/customer/loanRequest')
   }
}

