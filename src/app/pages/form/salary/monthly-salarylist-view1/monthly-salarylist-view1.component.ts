import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { MonthlySalary, MonthlySalary1 } from '../../monthly-salary1/monthly-salary1.model';
import { Addmonthlysalary1 } from './monthlySalarylistView.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-monthly-salarylist-view1',
  templateUrl: './monthly-salarylist-view1.component.html',
  styleUrls: ['./monthly-salarylist-view1.component.scss']
})
export class MonthlySalarylistView1Component implements OnInit {
  fileName= 'Reports.xlsx';
  developerArr: any;
  MonthlyData: any;
  monthArr: any;
  months: any;
  //monthlysalary: any;
  teamArr: any;
  month: any;
  monthDataArr: any;
  team: any;
  attendance_month: any;
  team_id: any;
  addmonth  = new Addmonthlysalary1;
  monthlysalary = new MonthlySalary;
  monthlysalary1 = new MonthlySalary1;
  month1: any;
  month2: any;
  event:any;
  usersArr: any;
  user_id: any;

  constructor(
    private dataservice: DataService,
    private router: Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.getDataList();
    this.get_attendance_month();
    this.get_getTeams();
    this.get_month();
    this.getUsers();
  }

  // getDataList(){
  //   this.dataservice.getmonthlysalary1().subscribe(res=>{
  //      console.log(res);
  //      this.MonthlyData = res;
  //   //    console.log(this.developerArr);
  //   })
  // }

  getUsers(){
    this.dataservice.getUserslist().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
      
    })
  }
  get_attendance_month(){
    console.log('dataview',this.monthlysalary)
    this.dataservice.get_attentance_month().subscribe(res=>{
      this.monthArr = res;
      console.log('date',this.monthArr);
      this.dataservice.getmonths(this.monthArr[0].id).subscribe(res => {
        this.months = res;
        this.monthlysalary.month_value = this.months.month_value;
        this.monthlysalary.month = this.months.month;
      });
      console.log(this.monthArr);
      
    })
  }
  // get_userwisedata(){
  //   console.log('userwise data',this.monthlysalary);
  // }
  // get_attendance_month(){
  //   this.dataservice.get_attentance_month().subscribe(res=>{
  //     this.monthArr = res;
  //     // console.log(this.monthArr);
  //     this.dataservice.getmonths(this.monthArr[0].id).subscribe(res => {
  //       this.months = res;
  //       //this.monthlysalary.month_value = this.months.month_value;
  //       //this.monthlysalary.month = this.months.month;
  //     });
  //     console.log(this.monthArr);
      
  //   })
  // }

  get_getTeams(){
    this.dataservice.getTeams().subscribe(res=>{
      this.teamArr = res;
      //console.log(this.teamArr);
    })
  }
  get_month(){
    console.log(this.monthDataArr);
    this.dataservice.getMonthslist().subscribe(res=>{
      this.monthDataArr = res;
      console.log(res);
    })
  }

  get_teamname(id){
    console.log('aaa',this.teamArr);
    this.dataservice.getteamname_id(id).subscribe(res=>{
      this.teamArr = res;
      console.log(res);
    })
  }
  getMonth(event) {
    console.log("month",event);
    this.month = event;
    this.month1 = this.month.split("-").map(item => item.trim());
    this.month2 = this.month1[1] + '-' + this.month1[0]; 
    console.log(this.month1)
    this.addmonth.month= this.month2;
    this.addmonth.team_id= this.team_id;
    this.addmonth.user=this.user_id;
     //this.get_teamname(this.addmonth.team_id);
    console.log(this.addmonth);
    this.dataservice.addMonthlySdata1(this.addmonth).subscribe(res=>{
      console.log('53453',res);
      this.MonthlyData = res;
  

    })
   
  }
  getTeam(event) {
    //console.log(event.target.value)
    this.team_id = event.target.value;
    this.addmonth.month= this.month2;
    this.addmonth.team_id= this.team_id;
   // console.log(this.addmonth);
    console.log('hiiii',JSON.stringify(this.addmonth));
    this.dataservice.addMonthlySdata(this.addmonth).subscribe(res=>{
      console.log(res);
      this.MonthlyData = res;
    })
    
  } 

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
    getAdvData(event) {
    
      console.log(event.target.value)
      this.user_id=event.target.value;
      // this.addmonth.month= this.month2;
      // this.addmonth.team_id= this.team_id;
      // this.addmonth.user_id=this.user_id;
      // console.log('hiiii44',JSON.stringify(this.addmonth));
      // console.log(this.addmonth);
      this.dataservice.addreportsalary1(this.user_id).subscribe(res=>{
            console.log(res);
            this.MonthlyData= res;
          })
      
      
    }
  
  
}