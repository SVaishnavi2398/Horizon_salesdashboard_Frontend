import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { DateaArr, DealaArr } from './leadsgivenlist.model';

@Component({
  selector: 'app-leadsgivenlist',
  templateUrl: './leadsgivenlist.component.html',
  styleUrls: ['./leadsgivenlist.component.scss']
})
export class LeadsgivenlistComponent implements OnInit {
  user_name: any;
  leadsgiven: any;
  usersArr: any;
  teamsArr: any;
  to_date: any;
  datedata = new DealaArr;
  userdata2 = new DateaArr;
  from_date: any;
  team_name: any;
  userdetail: any;
  userDetails: Object;
  userDetailss: Object;
  month: any;
  emp_id: any;
  userinfo: Object;
  user_id: any;
  // userdetail1: Object;
  userDetails1: Object;
  userdetail1: Object;
  userdetail12: Object;
  leaddata: object;
  leaddetails: Object;
  userdatas: object;
  teamwise: any;
  leadslist:string;
  month_year: any;
  fromDate1: any;
  fromDate: any;
  toDate1: any;
  toDate: any;
  attdata: any;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {

    this.getUserData();
    this.getTeamsData();
    this.userdetail = [];
    // this.userdetailss = [];
  }


  getState1(event){
    // console.log(event.target.value);
   this.team_name = event.target.value;
  //  console.log('Teamname',this.team_name);
   this.dataservice.getteamuser(this.team_name).subscribe( res=>{
    this.userdetail=res;
    // console.log('userdetails',this.userdetail)
    for (let i = 0; i < this.userdetail.length; i++){
      this.userdata2.team_id[i]=this.userdetail[i].team_id;
      this.userdata2.emp_id[i]=this.userdetail[i].emp_id;
      this.userdata2.user_id[i]=this.userdetail[i].user_id;
      this.userdata2.firstname[i]=this.userdetail[i].firstname;
      this.userdata2.lastname[i]=this.userdetail[i].lastname;
      this.userdata2.month[i]=this.userdetail[i].month;
      this.userdata2.month_year[i]=this.userdetail[i].month_year;
      this.userdata2.leads_given_to[i]=this.userdetail[i].leads_given_to;
      this.userdata2.valid_lead_count[i]=this.userdetail[i].valid_lead_count;
    }
    
    this.dataservice.getallteams(this.team_name).subscribe( res=>{
      // this.userdetail=res;
      this.userdatas=res;
      // this.datedata.userdetail1=res;

    // console.log('single2335',this.userdatas); 
    })
   })
   
  }


  getState2(event){
    // console.log('getState2', event.target.value);
    this.emp_id = event.target.value;
    // console.log('username',this.emp_id);

    this.dataservice.getsingleuser(this.emp_id).subscribe( res=>{
      this.userdetail = res;
      // this.datedata.userdetail1=this.userdetail1;
      // console.log('leaduser',this.userdetail);
    })
  }

 
   getstate6(event){
    // console.log('monthyear',event.target.value);
    this.month_year = event.target.value;
    // console.log('mon_yea',this.month_year);
    this.datedata.month_year = this.month_year;
    // this.datedata.from_date=this.from_date;
    // this.datedata.to_date=this.to_date;
    this.datedata.emp_id=this.emp_id;
    // console.log('DateFetch',this.datedata);

    this.dataservice.getleadsdate(this.datedata).subscribe( res=>{
      // this.userdetail1=this.datedata.userdetail1;
      this.userdetail=res;
      // this.userinfo=res;
      // console.log('datedata',res);
     })
   }


  getUserData() {
    this.dataservice.getsrcdata().subscribe(res => {
      this.usersArr = res;
      //  console.log('src',this.usersArr);
    })
  }

  getTeamsData() {
    this.dataservice.getTeamslist().subscribe(res => {
      this.teamsArr = res;
      //  console.log('teamname',this.teamsArr);
    })
  }

}
