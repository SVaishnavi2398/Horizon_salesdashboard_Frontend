import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  public form = {
    email :null,
    password : null
  };

  constructor(
    private Token: TokenService,
    private router: Router
  ){}


  onSubmit(){

  }

  ngOnInit(){
    if(this.Token.loggedIn()){
      this.router.navigate(["dashboard"]);
    }
    else
    {
      this.router.navigate(["login"]);
    }

  }
}