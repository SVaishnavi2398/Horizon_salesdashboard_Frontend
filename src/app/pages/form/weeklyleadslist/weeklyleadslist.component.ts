import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { DataArr, DealaArr } from './weeklyleadslist.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weeklyleadslist',
  templateUrl: './weeklyleadslist.component.html',
  styleUrls: ['./weeklyleadslist.component.scss']
})
export class WeeklyleadslistComponent implements OnInit {
  team_name: any;
  emp_name: any;
  teamsArr: any;
  usersArr: any;
  userdatas: any;
  userdata: any;
  userdetail: any;
  userdata1 = new DataArr;
  datedata = new DealaArr;
  userdata5: any;
  from_date: any;
  to_date: any;
  emp_id: any;
  fromDate1: any;
  fromDate: any;
  toDate1: any;
  toDate: any;

  constructor(private dataservice: DataService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getTeamsData();
    this.getUserData();
    this.userdata = [];
  }


  teamname(event){
    console.log("All Teams",event.target.value);
    this.team_name = event.target.value;
    this.dataservice.getweekuser(this.team_name).subscribe( res=>{
    this.userdata = res;
    console.log('userdetails',this.userdata);
    for (let i = 0; i < this.userdata.length; i++){
      this.userdata1.team_id[i]=this.userdata[i].team_id;
      this.userdata1.emp_id[i]=this.userdata[i].emp_id;
      this.userdata1.user_id[i]=this.userdata[i].user_id;
      this.userdata1.firstname[i]=this.userdata[i].firstname;
      this.userdata1.lastname[i]=this.userdata[i].lastname;
      this.userdata1.week_date[i]=this.userdata[i].week_date;
      this.userdata1.to_date[i]=this.userdata[i].to_date;
      this.userdata1.weekly_lead_count[i]=this.userdata[i].weekly_lead_count;
      this.userdata1.weekly_lead_count_valid[i]=this.userdata[i].weekly_lead_count_valid;
    }
    this.dataservice.getallleads(this.team_name).subscribe( res=>{
      this.userdata5=res;
      console.log('single',this.userdata5)
    })
  })
    
  }

  empname(event){
    console.log("All Emp",event.target.value);
    this.emp_name = event.target.value;
    this.dataservice.getsingleemp(this.emp_name).subscribe( res=>{
    this.userdata = res;
    console.log('Users',this.userdata);
    })
  }


  getfromdate(event){
    console.log("Start_date",event.target.value);
    this.from_date = event.target.value;
    this.datedata.from_date=this.from_date;
  }

  gettodate(event){
    console.log("End_date",event.target.value);
    this.to_date = event.target.value;
    this.datedata.from_date=this.from_date;
    this.datedata.to_date=this.to_date;
    this.datedata.emp_name=this.emp_name;
    console.log("datedata",this.datedata);

    this.dataservice.getalldates(this.datedata).subscribe(res=>{
    this.userdata = res;
    console.log("datesorting",res);

    })
  }

  getTeamsData() {
    this.dataservice.getTeamslist().subscribe(res => {
      this.teamsArr = res;
       console.log('teamname',this.teamsArr);
    })
  }

  getUserData() {
    this.dataservice.getsrcdata().subscribe(res => {
      this.userdatas = res;
       console.log('src',this.userdatas);
    })
  }
}
