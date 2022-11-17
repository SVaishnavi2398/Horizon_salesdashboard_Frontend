import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { MonthlySalary, MonthlySalary1 } from './monthly-salary1.model';

@Component({
  selector: 'app-monthly-salary1',
  templateUrl: './monthly-salary1.component.html',
  styleUrls: ['./monthly-salary1.component.scss']
})
export class MonthlySalary1Component implements OnInit {

 monthlysalary = new MonthlySalary;
  monthlysalary1 = new MonthlySalary1;
  //salary_package:any;
  data: any;
  months: any;
  monthArr: any;
  teamArr: any;
  team_id: any;
  month: any[]=[];
  month_year: any;
  details: any;
  userdata: any;
  firstname: any;
  firstname1: any = [];
  user_id:any[]=[];
  user_id1: any = [];
  present_days1: any = [];
  present_days:any[]=[];
  basic_pay: any[]=[];
  variable_pay: any[]=[];
  monthly_basic_salary: any[]=[];
  monthly_basic_salary1:  any = [];
  monthly_variable_pay:any[]=[];
  monthly_variable_pay1: any = [];
  no_of_late_marks1: any = [];
  basic_pay1:any[]=[];
  monthdata: any;
  present_daysdata: any;
  basic_paydata: any;
  variable_paydata: any;
  extra_days: any = [];
  reimbursement:any = [];
  incentives: any = [];
  liabilities: any = [];
  reimbursement1:any = [];
  incentives1: any = [];
  liabilities1: any = [];
  remark1: any = [];
  status1: any = [];
  value: any[] = [];
  penalty_leave_days1: any = [];
  payment_details1: any = [];
  deduction1: any = [];
  salary_month1:any = [];
  salary_month:any[]=[];
  extra_days1:any = [];
  tds_paid1:any = [];
  total_pay: any = [];
  user_iddata: any;
  net_salary_paid1:any = [];
  month_value: any;
  salary_packagedata: any;
  salary_package: any;
  incentivesdata: any;
  monthvalue:any;
  form: FormGroup;
  
  

  //user_id: any[]=[];

  constructor(
    private dataservice: DataService, private router:Router
  ) { }

  ngOnInit(): void {
    this.get_attendance_month();
    this.get_getTeams();
    
  }

  

  get_attendance_month(){
    //console.log(this.monthArr);
    this.dataservice.get_attentance_month().subscribe(res=>{
      this.monthArr = res;
       console.log(this.monthArr);
      this.dataservice.getmonths(this.monthArr[0].id).subscribe(res => {
        this.months = res;
        this.monthlysalary.month_value = this.months.month_value;
        this.monthlysalary.month = this.months.month;
      });
      console.log(this.monthArr);
      
    })
  }

  
  get_getTeams(){
    this.dataservice.getTeams().subscribe(res=>{
      this.teamArr = res;
      console.log(this.teamArr);
    })
  }

  get_employee(){
    console.log(this.monthlysalary)
    this.dataservice.get_attendance_data(this.monthlysalary).subscribe(res=>{
      
      this.details = res;

      this.dataservice.getmonths(this.details[0][0].month).subscribe(res=>{
        
        this.monthdata = res;
        this.month_value = this.monthdata.month_value;
        console.log(this.details);
      

      for(let i=0; i < this.details.length; i++){
        this.userdata = this.details[i][0].firstname;
        this.firstname = this.userdata;
        this.monthlysalary.firstname1[i] = this.firstname;

        this.user_iddata = this.details[i][0].user_id;
        this.user_id = this.user_iddata;
        this.monthlysalary.user_id1[i] = this.user_id;

        this.monthlysalary.month_value1[i] = this.month_value;
       

        this.present_daysdata = this.details[i][0].present_days;
         this.present_days = this.present_daysdata;
        this.monthlysalary.present_days1[i] = this.present_days;

        // this.salary_packagedata = this.details[i][0].salary_package;
        //  this.salary_package = this.salary_packagedata;
        // this.monthlysalary.salary_package[i] = this.salary_package;


        //console.log('present_days1',this.monthlysalary.present_days1);
        this.basic_paydata = this.details[i][0].basic_pay;
        this.basic_pay = this.basic_paydata;
       this.monthlysalary.basic_pay1[i] = this.basic_pay;
       //this.monthlysalary.basic_pay1[i] =  Math.round((Number(this.monthlysalary.basic_pay) / Number(this.monthlysalary.month_value)) * Number(this.monthlysalary1.present_days1));
       console.log(this.basic_pay);
       
       this.variable_paydata = this.details[i][0].variable_pay;
        this.variable_pay = this.variable_paydata;
       this.monthlysalary.monthly_variable_pay1[i] = this.variable_pay;
       
        this.monthlysalary.monthly_basic_salary1[i] =Math.round((Number(this.monthlysalary.basic_pay1[i]) / Number(this.monthlysalary.month_value1[i])) * Number(this.monthlysalary.present_days1[i]));
        console.log('hello',this.monthlysalary.monthly_basic_salary1)
        this.monthlysalary.total_pay1[i] =   Math.round(Number(this.monthlysalary.monthly_basic_salary1[i]) + Number(this.monthlysalary.monthly_variable_pay1[i]) + Number(this.monthlysalary.reimbursement1[i]) + Number(this.monthlysalary.incentives1[i]) - Number(this.monthlysalary.liabilities1[i]));
      //console.log('total_pay pay',this.monthlysalary.total_pay1);
      
      this.monthlysalary.tds_deducted1[i] =  Math.round((Number(this.monthlysalary.total_pay1) * 1) / 100);
      //console.log('tds pay',this.monthlysalary.tds_deducted1)
      this.monthlysalary.net_salary_paid1[i] =  Math.round(Number(this.monthlysalary.total_pay1) - Number(this.monthlysalary.tds_deducted1) - Number(this.monthlysalary.deduction1));
      //console.log('net salary',this.monthlysalary.net_salary_paid1)
      console.log('monthly1',this.monthlysalary);

      //  this.incentivesdata = this.details[i][0].incentives;
      //  this.incentives = this.incentivesdata;
      // this.monthlysalary.incentives1[i] = this.incentives;
      // console.log(this.incentives);
       
       
       //console.log(this.basic_pay1);
      
      
        //this.monthlysalary.monthly_basic_salary1[i] =  Math.round((Number(this.monthlysalary.basic_pay1[i]) / Number(this.monthlysalary.month_value)) * Number(this.monthlysalary.present_days1[i]));
      // console.log('monthly_basic_salary1',this.monthlysalary.monthly_basic_salary1);
      }
      
    })
  });
  }


  salaryDetails1(){
    console.log('monthly2',this.monthlysalary);

    for(let i=0; i < this.monthlysalary.user_id1.length; i++){
      //console.log('monthlysalary',this.monthlysalary);
      this.monthlysalary1.firstname = this.monthlysalary.firstname1[i];
      this.monthlysalary1.user_id = this.monthlysalary.user_id1[i];
      this.monthlysalary1.basic_pay = this.monthlysalary.basic_pay1[i];
     //this.monthlysalary1.month = this.monthlysalary.month;

      //this.monthlysalary1.penalty_leave_days = this.penalty_leave_days1[i];
      //this.monthlysalary1.no_of_late_marks = this.no_of_late_marks1[i];
      //this.monthlysalary1.extra_days = this.extra_days1[i];
      this.monthlysalary1.monthly_basic_salary = this.monthlysalary.monthly_basic_salary1[i];
      this.monthlysalary1.monthly_variable_pay = this.monthlysalary.monthly_variable_pay1[i];
      this.monthlysalary1.reimbursement= this.monthlysalary.reimbursement1[i];
      this.monthlysalary1.incentives = this.monthlysalary.incentives1[i];
      this.monthlysalary1.liabilities= this.monthlysalary.liabilities1[i];
      this.monthlysalary1.deduction = this.monthlysalary.deduction1[i]
      this.monthlysalary1.status = this.monthlysalary.status1[i]
      this.monthlysalary1.payment_details = this.monthlysalary.payment_details1[i]
      this.monthlysalary1.remark = this.monthlysalary.remark1[i]
      this.monthlysalary1.salary_month = this.monthlysalary.salary_month1[i]

      // this.monthlysalary.tds_paid1 = this.monthlysalary.tds_paid1[i];
      //this.monthlysalary1.TDS_paid = this.monthlysalary.tds_paid1[i];

      //this.monthlysalary.net_salary_paid1 = this.monthlysalary.net_salary_paid1[i];
      this.monthlysalary1.net_salary_paid = this.monthlysalary.net_salary_paid1[i];
      this.monthlysalary1.total_pay = this.monthlysalary.total_pay1[i];
      this.monthlysalary1.tds_deducted = this.monthlysalary.tds_deducted1[i];
      
      // this.monthlysalary1.net_present_days = Number(this.monthlysalary.month_value) - Number(this.monthlysalary1.penalty_leave_days)  - Number(this.monthlysalary1.no_of_late_marks) + Number(this.monthlysalary1.extra_days);
              
      // this.monthlysalary1.monthly_basic_salary =  Math.round((Number(this.monthlysalary1.basic_pay) / Number(this.monthlysalary.month_value)) * Number(this.monthlysalary1.net_present_days));

     
      //this.monthlysalary1.tds_deducted =  Math.round((Number(this.monthlysalary1.total_pay) * 1) / 100);
      

      //this.monthlysalary1.net_pay =  Math.round(Number(this.monthlysalary1.total_pay) - Number(this.monthlysalary1.tds_deducted) - Number(this.monthlysalary1.deduction));

      this.monthlysalary1.paid_amount =  Math.round(Number(this.monthlysalary1.total_pay) - Number(this.monthlysalary1.tds_deducted) - Number(this.monthlysalary1.deduction));

      // if(this.monthlysalary1.TDS_paid==undefined && this.monthlysalary1.net_salary_paid==undefined){
      //   this.monthlysalary1.pending_amount = this.monthlysalary1.total_pay;
      // }else{
      // this.monthlysalary1.pending_amount =  Math.round(Number(this.monthlysalary1.total_pay) - Number(this.monthlysalary1.TDS_paid) - Number(this.monthlysalary1.net_salary_paid));
      // }
      console.log('hii',this.monthlysalary1);

       
    }
    this.dataservice.registerMonthlysalary1(this.monthlysalary1).subscribe(res=>{
      console.log(res);
      Swal.fire('Added!', 'Monthly Salary has been added.', 'success').then((result) => {
        // Reload the Page
        location.reload();
      });
      // window. location. reload("Data successfully added");
      // this.router.navigate(['/form/salary/monthlysalary1']);
     })
    console.log(this.monthlysalary1);


  }

  

  keyPressNumbers(event) {
    console.log(event.target.value);
    for(var i=0; i<this.monthlysalary.basic_pay1.length; i++){
    this.monthlysalary.total_pay1[i] =   Math.round(Number(this.monthlysalary.monthly_basic_salary1[i]) + Number(this.monthlysalary.monthly_variable_pay1[i]) + Number(this.monthlysalary.reimbursement1[i]) + Number(this.monthlysalary.incentives1[i]) - Number(this.monthlysalary.liabilities1[i]));
    this.monthlysalary.tds_deducted1[i] =  Math.round((Number(this.monthlysalary.total_pay1[i]) * 1) / 100);
    this.monthlysalary.net_salary_paid1[i] =  Math.round(Number(this.monthlysalary.total_pay1[i]) - Number(this.monthlysalary.tds_deducted1[i]) - Number(this.monthlysalary.deduction1[i]));
    
  }
    console.log('monthly',this.monthlysalary.total_pay1);
    //console.log('monthly',this.monthlysalary.tds_deducted1);

    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  // get bmi2() {
  //   var selectedOption =  Math.round(Number(this.monthlysalary.basic_pay1) + Number(this.monthlysalary.monthly_variable_pay1) + Number(this.monthlysalary.reimbursement1) + Number(this.monthlysalary.incentives1) - Number(this.monthlysalary.liabilities1));
  //   this.monthlysalary.total_pay1 =   Math.round(Number(this.monthlysalary.basic_pay1) + Number(this.monthlysalary.monthly_variable_pay1) + Number(this.monthlysalary.reimbursement1) + Number(this.monthlysalary.incentives1) - Number(this.monthlysalary.liabilities1));
  //  return  Math.round(Number(this.monthlysalary.basic_pay1) + Number(this.monthlysalary.monthly_variable_pay1) + Number(this.monthlysalary.reimbursement1) + Number(this.monthlysalary.incentives) - Number(this.monthlysalary.liabilities1));
  // }

  // salaryDetails(){
  //  // console.log('firstname1',this.monthlysalary);
  //      for(let i=0; i <= this.monthlysalary.firstname1.length-1; i++){

  //       //console.log('firstname1',this.monthlysalary.firstname1[i]);
  //        this.monthlysalary1.firstname1 = this.monthlysalary.firstname1[i];
  //        this.monthlysalary1.user_id = this.monthlysalary.user_id1[i];
  //        this.monthlysalary1.basic_pay = this.monthlysalary.basic_pay1[i];
  //         this.monthlysalary1.monthly_basic_salary = this.monthlysalary.monthly_basic_salary1[i];

  //         this.monthlysalary1.monthly_variable_pay = this.monthlysalary.monthly_variable_pay1[i];
  //         this.monthlysalary1.reimbursement = this.reimbursement1[i];
  //         this.monthlysalary1.incentives = this.incentives1[i];
  //         this.monthlysalary1.liabilities = this.liabilities1[i];
 //         this.monthlysalary.total_pay1[i] = Math.round(Number(this.monthlysalary1.monthly_basic_salary) + Number(this.monthlysalary1.monthly_variable_pay) + Number(this.monthlysalary1.reimbursement) + Number(this.monthlysalary1.incentives) - Number(this.monthlysalary1.liabilities));
  //         this.monthlysalary1.total_pay = this.monthlysalary.total_pay1[i];
  //         //console.log('total_pay',this.monthlysalary1.total_pay); 
  //         this.monthlysalary.tds_deducted1[i] =  Math.round((Number(this.monthlysalary1.total_pay) * 1) / 100);
  //         this.monthlysalary1.tds_deducted = this.monthlysalary.tds_deducted1[i];
  //         this.monthlysalary1.deduction = this.deduction1[i]
  //        // console.log('tds_deducted',this.monthlysalary1.tds_deducted); 
  //         this.monthlysalary.net_pay1[i] =  Math.round(Number(this.monthlysalary1.total_pay) - Number(this.monthlysalary1.tds_deducted) - Number(this.monthlysalary1.deduction));
  //         this.monthlysalary1.net_pay = this.monthlysalary.net_pay1[i];
  //         this.monthlysalary.paid_amount1[i] = this.monthlysalary1.net_pay;
  //         this.monthlysalary1.paid_amount = this.monthlysalary.paid_amount1[i];

  //         this.monthlysalary.tds_paid1[i] = this.tds_paid1[i];
  //         this.monthlysalary1.TDS_paid = this.monthlysalary.tds_paid1[i];

  //         this.monthlysalary.net_salary_paid1[i] = this.net_salary_paid1[i];
  //         this.monthlysalary1.net_salary_paid = this.monthlysalary.net_salary_paid1[i];

  //         this.monthlysalary1.penalty_leave_days = this.penalty_leave_days1[i];
  //         this.monthlysalary1.no_of_late_marks = this.no_of_late_marks1[i];
  //         this.monthlysalary1.extra_days = this.extra_days1[i];
          
  //         this.monthlysalary.net_present_days = Number(this.monthlysalary.month_value[0]) - Number(this.monthlysalary1.penalty_leave_days) - Number(this.monthlysalary1.no_of_late_marks) + Number(this.monthlysalary1.extra_days);

  //         if(this.monthlysalary1.TDS_paid==undefined && this.monthlysalary1.net_salary_paid==undefined){
  //           this.monthlysalary1.pending_amount = this.monthlysalary1.total_pay;
  //         }else{
  //         this.monthlysalary1.pending_amount =  Math.round(Number(this.monthlysalary1.total_pay) - Number(this.monthlysalary1.TDS_paid) - Number(this.monthlysalary1.net_salary_paid));
  //         }
  //         //  this.dataservice.registerMonthlysalary(this.monthlysalary1).subscribe(res=>{
  //         //   console.log(res);
  //         //  })
  //    }
  //  //  console.log('net_pay1',this.monthlysalary1);
  // }

  getMonth($event) {
    console.log("month1",$event.target.value);
    this.month = $event.target.value;
   
   
  }
}