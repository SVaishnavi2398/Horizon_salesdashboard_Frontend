import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { TokenService } from 'src/app/service/token.service';
import { Advanceemi } from '../advance-emi/advance-emi.model';

@Component({
  selector: 'app-advancesalaryreport',
  templateUrl: './advancesalaryreport.component.html',
  styleUrls: ['./advancesalaryreport.component.scss']
})
export class AdvancesalaryreportComponent implements OnInit {
  usersArr: any;
  user_id: any;
  advanceemi = new Advanceemi;
  advanceemiArr:any;
  advanceemiArr1:any;
  id: any;
  newid: any;


  constructor(
    private dataservice: DataService,
    private router: Router,
    private Token:TokenService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getReportdata();
    this.id=0;
  }
  

  getUsers(){
    this.dataservice.getUserslist().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
      
    })
  }

  getReport(event) {
    
    console.log(event.target.value)
    this.dataservice.addreportsalary(this.advanceemi.user_id).subscribe(res=>{
          console.log(res);
          this.advanceemiArr= res;
        })
    //console.log("month",event);
  //   this.addmonth.month= this.month2;
  //   this.addmonth.team_id= this.team_id;
  //  // console.log(this.addmonth);
  //   console.log('hiiii',JSON.stringify(this.addmonth));
  //   this.dataservice.addMonthlySdata(this.addmonth).subscribe(res=>{
  //     console.log(res);
  //     this.MonthlyData = res;
  //   })
    
  } 
  getReportdata(){
    this.dataservice.getreport().subscribe(res => {
      //console.log(res);
      this.advanceemiArr = res;
      console.log('datareceive',this.advanceemiArr);
             } );
  }

  // yourFunction(){
  // // alert("data found");
  // console.log("data got",this.advanceemi.emi_deduct_date);
  // }
  yourFunction(event){
   console.log(event.target.value);
   this.id = event.target.value;
    this.dataservice.dataUser(event.target.value).subscribe(res => {
      //console.log(res);
      this.advanceemiArr1 = res;
      this.newid = this.advanceemiArr1[0].id;
      console.log("fdf",this.advanceemiArr1);
      
             } );
  }

  reset(){
    this.id="0";
    
  }
}
