import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-yearincentivedetails',
  templateUrl: './yearincentivedetails.component.html',
  styleUrls: ['./yearincentivedetails.component.scss']
})
export class YearincentivedetailsComponent implements OnInit {
  yearIncenData: any;
  public page = 1;
  public pageSize = 10;
  searchyearincentive :any;
  teamdeatails: any;
  ActiveUsers: any;
  team_id: any;
  user_id: any;
  usersData: any;
  constructor(
    private dataservice : DataService
  ) { }

  ngOnInit(): void {
    this.getYIncentivedata();
    this.getteamdata();
    this.yearIncenData=[];
  }

  getYIncentivedata(){
    this.dataservice.getYearDetails().subscribe(res => {
      this.yearIncenData = res;
      //console.log(res);
      })
    }

  getteamdata(){
    this.dataservice.getTeams().subscribe(res => {
      this.teamdeatails = res;
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
      this.dataservice.getyearuserD(this.user_id).subscribe(res => {
        this.yearIncenData= res;
      })
  }

}
