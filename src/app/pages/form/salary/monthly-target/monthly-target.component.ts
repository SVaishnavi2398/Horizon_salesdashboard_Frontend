import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Monthlytarget } from './monthly-target.model';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-monthly-target',
  templateUrl: './monthly-target.component.html',
  styleUrls: ['./monthly-target.component.scss']
})
export class MonthlyTargetComponent implements OnInit {

  salarypacArr :any;
  monthlytarget = new Monthlytarget;
  error = new Monthlytarget;
  usersArr: Object;
  salaryArr: Object;

  constructor(
    private dataservice: DataService,
    private router: Router,
    private Token:TokenService
  ) { }

  ngOnInit(): void {
    this.getSalarypac();
    this.getUsers();
  }


  getSalarypac(){
    this.dataservice.getSalarypackagelist().subscribe(res=>{
      //console.log(res);
      this.salarypacArr = res;
    })
  }
  getUsers(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  getsalary(event){
    console.log(event.target.value);
    var user_id = event.target.value;
    this.dataservice.getsalarybyuserId(user_id).subscribe(res=>{
      console.log(res);
      this.salaryArr = res;
      this.monthlytarget.salary_package_id = this.salaryArr[0].salary_package_id;
      this.monthlytarget.basic_pay = this.salaryArr[0].basic_pay;

    })
  }

  submitMonthlytarget(){
    this.dataservice.registerMonthlytarget(this.monthlytarget).subscribe(
        //console.log(res);
       
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
    
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Monthly Target has been added.', 'success');
    this.router.navigate(['/form/salary/monthly-target-list']);

  }

   
  handleError(error){
    this.error = error.error.errors;
  }

}
