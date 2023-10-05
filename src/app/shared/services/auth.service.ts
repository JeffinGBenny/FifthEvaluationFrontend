import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,
    private router:Router) { 
    //verify login Useraname and password
    
  }
  public loginverify(user:User):Observable<any>{
      return this.httpClient.get<User>(environment.apiUrl+'/api/users/'+user.userName+'&'+user.password);
  }

  public logOut(){
    localStorage.removeItem("USER_NAME");
          sessionStorage.removeItem("USER_NAME");
          sessionStorage.removeItem("ROLE_ID");
          localStorage.removeItem("JWT_TOKEN");
          this.router.navigate(['auth/login']);
  }
}
