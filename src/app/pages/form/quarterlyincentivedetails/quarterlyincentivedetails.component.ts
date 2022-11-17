import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-quarterlyincentivedetails',
  templateUrl: './quarterlyincentivedetails.component.html',
  styleUrls: ['./quarterlyincentivedetails.component.scss']
})
export class QuarterlyincentivedetailsComponent implements OnInit {
  quarterlyData: any;
  public page = 1;
  public pageSize = 10;
  teamdeatails: any;
  team_id: any;
  user_id: any;
  usersData: any;
  searchquartelydetails:any;

  constructor(
    private dataservice : DataService
  ) { }

  ngOnInit(): void {
    this.getteamdata();
    // this.getActiveUsers();
    this.getinceQuarterly();
    this.quarterlyData=[];
  }

  getinceQuarterly(){
    this.dataservice.getquarterlyDetails().subscribe(res=>{
      this.quarterlyData = res;
      // console.log(res);
    })
  }

  teamIdData(event) {
    this.team_id = event.target.value;
    this.dataservice.getTeamInceData(this.team_id).subscribe(res => {
      this.usersData = res;
    })
    
  }
  UsersData(event){
    this.user_id = event.target.value;
      this.dataservice.getquarterlyuserD(this.user_id).subscribe(res => {
        this.quarterlyData= res;
      })
  }
  getteamdata(){
    this.dataservice.getTeams().subscribe(res => {
      this.teamdeatails = res;
      })
    }

}
