import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-halfyearincentivelist',
  templateUrl: './halfyearincentivelist.component.html',
  styleUrls: ['./halfyearincentivelist.component.scss']
})
export class HalfyearincentivelistComponent implements OnInit {
  halfyearIncen: any;
  searchhalfyearincentive:any;
  public page = 1;
  public pageSize = 10;
  team_id: any;
  user_id: any;
  usersData: any;
  teamdeatails: any;

  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit(): void {
    this.gethalfIncentivedata();
    this.getteamdata();
    this.halfyearIncen=[];

  }

  gethalfIncentivedata(){
    this.dataservice.gethalfYearDetails().subscribe(res => {
      this.halfyearIncen = res;
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
        this.dataservice.gethalfyearuserD(this.user_id).subscribe(res => {
          this.halfyearIncen= res;
        })
    }
    getteamdata(){
      this.dataservice.getTeams().subscribe(res => {
        this.teamdeatails = res;
        })
      }


}
