import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Salarypackage } from './salarypackage.model';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-salarypackage',
  templateUrl: './salarypackage.component.html',
  styleUrls: ['./salarypackage.component.scss']
})
export class SalarypackageComponent implements OnInit {


  usersArr :any;
  salarypackage = new Salarypackage;
  error = new Salarypackage;

  constructor(
    private dataservice: DataService,
    private router: Router,
    private Token:TokenService,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  submitSalarypackage(){
    this.dataservice.registerSalarypackage(this.salarypackage).subscribe(
        //console.log(res);
        
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
   
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Salary Package has been added.', 'success');
        this.router.navigate(['/form/salarypackagelist']);
  }

   
  handleError(error){
    this.error = error.error.errors;
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


  get bmi(){
    var selectedOption = Math.round(Number(this.salarypackage.basic_pay) + Number(this.salarypackage.variable_pay));
    this.salarypackage.monthly_salary =  Math.round(Number(this.salarypackage.basic_pay) + Number(this.salarypackage.variable_pay));
    return Math.round(Number(this.salarypackage.basic_pay) + Number(this.salarypackage.variable_pay));
  }

  get bmi1(){
    var selectedOption = Math.round((Number(this.salarypackage.monthly_salary ) * 12 ) + Number(this.salarypackage.yearly_bonus));
    this.salarypackage.yearly_salary =  Math.round((Number(this.salarypackage.monthly_salary ) * 12 ) + Number(this.salarypackage.yearly_bonus));
    return Math.round((Number(this.salarypackage.monthly_salary ) * 12 ) + Number(this.salarypackage.yearly_bonus));
  }
}
