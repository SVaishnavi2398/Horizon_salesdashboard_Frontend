
import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 

public form ={
  email : null,
  password : null
};

public error = null;
  userdata: { email: any; password: any; };
  loggername: any;

constructor(
  private Jarwis: JarwisService,
  private Token:TokenService,
  private router:Router,
  private auth : AuthService
) 
{ 

}

  onSubmit(){
    this.userdata = this.form;
    // console.log(this.userdata);  
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data,this.userdata),
     error=>this.handleError(error)
);
  }

  handleResponse(data: any,data1:any){
    this.loggername = data1.email;
    // console.log(this.loggername);
    this.Token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    sessionStorage.setItem('loggedUser', this.loggername);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error: { error: { error: any; }; }){
    this.error = error.error.error;
  }

  ngOnInit(): void {
    if(this.Token.loggedIn()){
      this.router.navigate(["/dashboard"]);
    }
    else
    {
      this.router.navigate(["/login"]);
    }
  }

}
