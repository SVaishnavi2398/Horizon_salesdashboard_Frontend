import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Salarypackage } from '../../../pages/form/salary/salarypackage/salarypackage.model';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-salarypackage-details',
  templateUrl: './salarypackage-details.component.html',
  styleUrls: ['./salarypackage-details.component.scss']
})
export class SalarypackageDetailsComponent implements OnInit {
  usersArr :any;
  salarypackage = new Salarypackage;
  error = new Salarypackage;
  usersid: any;

  constructor(
    private dataservice: DataService,
    private router: Router,
    private Token:TokenService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usersid=this.route.snapshot.params.id;
    this.getUsers();
  }

  getUsers(){
    this.dataservice.getOneUser(this.usersid).subscribe(res=>{
      console.log(this.usersid,"userData");
      console.log(res);
      this.usersArr = [res];
      
    })
  }

  submitSalarypackage(){
    this.salarypackage.user_id = this.usersid;
    this.dataservice.registerSalarypackage(this.salarypackage).subscribe(
      
        
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
      console.log(this.salarypackage,"test1111");
   
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Salary Package has been added.', 'success');
        this.router.navigate(['/form/users']);
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

