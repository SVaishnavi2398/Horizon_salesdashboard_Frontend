import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Monthlysalary } from '../monthly-salary/monthly-salary.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editmonthlysalary',
  templateUrl: './editmonthlysalary.component.html',
  styleUrls: ['./editmonthlysalary.component.scss']
})
export class EditmonthlysalaryComponent implements OnInit {

  monthlysalaryid : any;
  monthlysalary = new Monthlysalary;
  data : any;
  usersArr : any;
  salarypackageArr : any;
  monthlistArr: any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.monthlysalaryid=this.route.snapshot.params.id;
    this.getMonthlysalaryData();
    this.getUsers();
    this.getSalarypac();
    this.getmonth();
  }

  getUsers(){
    this.dataservice.getUserslist().subscribe(res=>{
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
  getmonth(){
    this.dataservice.getMonthslist().subscribe(res=>{
      //console.log(res);
      this.monthlistArr = res;
    })
  }

  getMonthlysalaryData(){
    this.dataservice.getOneMonthlysalary(this.monthlysalaryid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.monthlysalary=this.data;
    })
  }

  updateMonthlysalary(){
    this.dataservice.updateMonthlysalary(this.monthlysalaryid,this.monthlysalary).subscribe(res=>{
      //console.log(res);
      Swal.fire('Updated!', 'Monthly Package has been updated.', 'success');
      this.router.navigate(['/form/salary/monthly-salary-list']);
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
    var selectedOption =  Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.TDS_paid) - Number(this.monthlysalary.net_salary_paid - Number(this.monthlysalary.deduction)));
    this.monthlysalary.pending_amount =  Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.TDS_paid) - Number(this.monthlysalary.net_salary_paid) -  Number(this.monthlysalary.deduction));
    return  Math.round(Number(this.monthlysalary.total_pay) - Number(this.monthlysalary.TDS_paid) - Number(this.monthlysalary.net_salary_paid) -  Number(this.monthlysalary.deduction));
    }
  }
  

}
