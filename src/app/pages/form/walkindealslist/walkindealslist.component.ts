import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { DateaArr } from './walkindealslist.model';

@Component({
  selector: 'app-walkindealslist',
  templateUrl: './walkindealslist.component.html',
  styleUrls: ['./walkindealslist.component.scss']
})
export class WalkindealslistComponent implements OnInit {
  walkindata: any;
  leaderArr: any;
  team_leader_name: any;
  usersArr: any;
  user_name: any;
  from_date: any;
  to_date: any;
  user_id: any;
  userdata: any;
  datedata = new DateaArr;
  empArr: any;
  searchwalkindealslist:any;

  public page = 1;
  public pageSize = 10;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
 
    this.getTeamdata();
    this.getUserData();
    this.getempData();
    this.walkindata = [];
  }

  getTeamdata(){
    this.dataservice.getTeamleader().subscribe(res =>{
      this.leaderArr = res;
      console.log(this.leaderArr);
    })
  }

  getUserData() {
    this.dataservice.getsrcdata().subscribe(res => {
      this.usersArr = res;
       console.log('src',this.usersArr);
    })
  }

 

  getState1(event){
    console.log(event.target.value);
    this.team_leader_name = event.target.value;
    console.log('temleadername',this.team_leader_name);
    this.dataservice.getwalkindata(this.team_leader_name).subscribe( res=>{
      this.walkindata = res;
      console.log('alldata',this.walkindata);
     })
  }
  
  getState2(event){
    console.log(event.target.value);
    this.user_name = event.target.value;
    console.log('username',this.user_name);
    this.dataservice.getuser(this.user_name).subscribe( res=>{
      this.walkindata = res;
      console.log('userdata',this.walkindata);
    })
  }
  getempData(){
    this.dataservice.getemp(this.user_name).subscribe(res => {
      this.empArr = res;
       console.log('cl',this.empArr);
  })
  }
  getstate3(event){
    console.log(event.target.value);
    this.from_date = event.target.value;
    console.log('from_date',this.from_date);
  }

  getstate4(event){
    console.log(event.target.value);
    this.to_date = event.target.value;

    this.datedata.from_date=this.from_date;
    this.datedata.to_date=this.to_date;
    this.datedata.user_id=this.user_id;

      this.dataservice.getdatefilter(this.datedata).subscribe( res=>{
        this.userdata=res;
        console.log('date7771',res);
  
       })

  }




  
}
