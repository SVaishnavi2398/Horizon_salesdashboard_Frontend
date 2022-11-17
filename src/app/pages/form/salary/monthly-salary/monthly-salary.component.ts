import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Monthlysalary } from './monthly-salary.model';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-monthly-salary',
  templateUrl: './monthly-salary.component.html',
  styleUrls: ['./monthly-salary.component.scss']
})
export class MonthlySalaryComponent implements OnInit {


  salaryArr:any;
  usersArr :any;
  salarypackageArr : any;
  monthlysalary = new Monthlysalary;
  error = new Monthlysalary;

  salary : any;
  //salary = new Monthlysalary;
  selectedTitle: any;
  titleList: any;
  quantity: number;
  monthly_basic_salary: number;
  monthArr:any;
  monthvalueArr: any;
  monthv : any;
  data:any;

  

  // get bmi() {
  //   var selectedOption = this.monthlysalary.absent_days + this.monthlysalary.no_of_late_marks;
  //   this.monthlysalary.penalty_leave_days = this.monthlysalary.absent_days + this.monthlysalary.no_of_late_marks;
  //  return this.monthlysalary.absent_days + this.monthlysalary.no_of_late_marks;
  // }
 

  constructor(
    private fb: FormBuilder,
    private dataservice: DataService,
    private router: Router,
    private Token:TokenService
  ) {

    
   }

  ngOnInit(): void {
    this.getUsers();
    this.getSalarypac();
    this.getMonths();
    this.monthlysalary.TDS_paid = '0';
    this.monthlysalary.net_salary_paid = '0';
  }


  getMonths(){
    this.dataservice.getMonthslist().subscribe(res=>{
      this.monthArr=res;
      //console.log(res);
    })
  }
  getUsers(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  getSalarypac(){
    this.dataservice.getSalarypackagelist().subscribe(res=>{
      //console.log(res);
      this.salarypackageArr = res;
    })
  }

  submitMonthlysalary(){
    this.dataservice.registerMonthlysalary(this.monthlysalary).subscribe(
        //console.log(res);
       
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
  }

  
  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Monthly Salary has been added.', 'success');
    this.router.navigate(['/form/salary/monthly-salary-list']);
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


  getState(event){
    //console.log(event.target.value);
    var obj = {
      user_id : event.target.value
    }

    this.dataservice.getSalaryPackage(obj).subscribe(res => {
   
           this.salaryArr=res;
           this.salary=res;
         var selectedOption = this.salary[0].basic_pay;
         this.monthlysalary.basic_pay=this.salary[0].basic_pay;

         
      //  console.log(this.salary[0].basic_pay);

              //console.log(res);
    });
    


  }

getState1(event){
    console.log(event.target.value);
    console.log(event.target.value)
    var obj = {
    salary_month : event.target.value,
}
   

    this.dataservice.getmonthlist(obj).subscribe(res => {
      console.log(res);
     this.monthvalueArr = res;
     this.data=res;
     this.monthv=this.data;
     var selectedOption = this.monthvalueArr[0].month_value;
     this.monthlysalary.month_value=this.monthvalueArr[0].month_value;


         
      //  console.log(this.salary[0].basic_pay);

              //console.log(res);
    });
    


  }

  get bmi() {
   
    var selectedOption = Number(this.monthlysalary.month_value) - Number(this.monthlysalary.penalty_leave_days) - Number(this.monthlysalary.absent_days) - Number(this.monthlysalary.no_of_late_marks) + Number(this.monthlysalary.extra_days);
    this.monthlysalary.net_present_days = Number(this.monthlysalary.month_value) - Number(this.monthlysalary.penalty_leave_days) - Number(this.monthlysalary.absent_days) - Number(this.monthlysalary.no_of_late_marks) + Number(this.monthlysalary.extra_days);
   return  Number(this.monthlysalary.month_value) - Number(this.monthlysalary.penalty_leave_days) - Number(this.monthlysalary.absent_days) - Number(this.monthlysalary.no_of_late_marks) + Number(this.monthlysalary.extra_days);
  }
  get bmi1() {
    var selectedOption =  Math.round((Number(this.monthlysalary.basic_pay) / Number(this.monthlysalary.month_value)) * Number(this.monthlysalary.net_present_days));
    this.monthlysalary.monthly_basic_salary =  Math.round((Number(this.monthlysalary.basic_pay) / Number(this.monthlysalary.month_value)) * Number(this.monthlysalary.net_present_days));
   return Math.round((Number(this.monthlysalary.basic_pay) / Number(this.monthlysalary.month_value)) * Number(this.monthlysalary.net_present_days));
  }

  get bmi2() {
    var selectedOption =  Math.round(Number(this.monthlysalary.monthly_basic_salary) + Number(this.monthlysalary.monthly_variable_pay) + Number(this.monthlysalary.reimbursement) + Number(this.monthlysalary.incentives) - Number(this.monthlysalary.liabilities));
    this.monthlysalary.total_pay =   Math.round(Number(this.monthlysalary.monthly_basic_salary) + Number(this.monthlysalary.monthly_variable_pay) + Number(this.monthlysalary.reimbursement) + Number(this.monthlysalary.incentives) - Number(this.monthlysalary.liabilities));
   return  Math.round(Number(this.monthlysalary.monthly_basic_salary) + Number(this.monthlysalary.monthly_variable_pay) + Number(this.monthlysalary.reimbursement) + Number(this.monthlysalary.incentives) - Number(this.monthlysalary.liabilities));
  }

  get bmi3() {
    var selectedOption =  Math.round((Number(this.monthlysalary.total_pay) * 1) / 100);
    this.monthlysalary.tds_deducted =  Math.round((Number(this.monthlysalary.total_pay) * 1) / 100);
   return Math.round((Number(this.monthlysalary.total_pay) * 1) / 100);
  }

  get bmi4() {
    var selectedOption =  Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.tds_deducted) - Number(this.monthlysalary.deduction));
    this.monthlysalary.net_pay =  Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.tds_deducted) - Number(this.monthlysalary.deduction));
    this.monthlysalary.paid_amount =  Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.tds_deducted) - Number(this.monthlysalary.deduction));
    return Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.tds_deducted) - Number(this.monthlysalary.deduction));
  }

  get bmi5() {

    if(this.monthlysalary.TDS_paid==null && this.monthlysalary.net_salary_paid==null){
      var selectedOption1 =  this.monthlysalary.total_pay;
      this.monthlysalary.pending_amount = this.monthlysalary.total_pay;
      return this.monthlysalary.total_pay;
    }else{
    var selectedOption =  Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.TDS_paid) - Number(this.monthlysalary.net_salary_paid));
    this.monthlysalary.pending_amount =  Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.TDS_paid) - Number(this.monthlysalary.net_salary_paid));
    return  Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.TDS_paid) - Number(this.monthlysalary.net_salary_paid));
    }
  }
  


  
}
