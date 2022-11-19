import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgItemLabelDirective } from '@ng-select/ng-select/lib/ng-templates.directive';
import { DataService } from 'src/app/service/data.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null


  };

  public error = [];



  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
    ) { }
  ngOnInit(): void {}

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/dashboard');
  }


  handleError(error) {
    this.error = error.error.errors;
  }
}


