import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { NgItemLabelDirective, NgMultiLabelTemplateDirective } from '@ng-select/ng-select/lib/ng-templates.directive';
import { HttpClient } from '@angular/common/http';
import { Newusers } from './newusers.model';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newusers',
  templateUrl: './newusers.component.html',
  styleUrls: ['./newusers.component.scss'],
})
export class NewusersComponent implements OnInit {
  myGroup:FormGroup;
  //user_id :any; 
  designationArr :any;
  subprojectid:any;
  //data:any;
  empstatusArr:any;
  token:any;
  
form = new Newusers;
 error = new Newusers();
 
  newusers = new Newusers();
  //error: any;
  constructor(
    private dataservice: DataService,
    private router: Router,
    private Jarwis:JarwisService,
    private Token:TokenService,
    ) { }




    onSubmit(){
    console.log(this.token);
     this.form.api_token =  this.token;
      this.Jarwis.signup(this.form).subscribe(
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );

    }
  
    handleResponse(data){
      this.Token.handle(data.access_token);
      Swal.fire('Added!', 'New User has been added.', 'success'); 
      this.router.navigateByUrl('/form/users');
    }

    
  
  
    handleError(error){
      this.error = error.error.errors;
    }
    
 

  ngOnInit(): void {
   this.token=this.randomString(10)
    this.getDesignation();
    this.getEmpStatus();
    this.myGroup = new FormGroup({
      'firstname' : new FormControl(null, Validators.required),
      'middlename ' : new FormControl(null, Validators.required)
    });


    
  }

  randomString(length) {
    var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890,./;'[]\=-)(*&^%$#@!~`";
    var result = '';
    for ( var i = 0; i < 16; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

  getDesignation(){
    this.dataservice.getDesignationList().subscribe(res=>{
      this.designationArr = res;
    })
  }

  getEmpStatus(){
    this.dataservice.getEmpStatusList().subscribe(res=>{
      this.empstatusArr = res;
    })
  }

  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }


  keyPressAlphaNumeric(event) {
    var inp = String.fromCharCode(event.keyCode);
    // Only Numbers 0-9
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

}









  



 


