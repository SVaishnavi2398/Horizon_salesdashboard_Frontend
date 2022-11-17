import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-incentivedetails',
  templateUrl: './incentivedetails.component.html',
  styleUrls: ['./incentivedetails.component.scss']
})
export class IncentivedetailsComponent implements OnInit {
  teamdeatails: any;
  team_id: any;
  usersData: any;
  user_id: any[]=[];
  incenData: any;
  InceArr: any[]=[];
  date: any;
  ActiveUsers: any;
  userInceData: any;
  public page = 1;
  public pageSize = 10;
  incentivedetails:any;

  constructor(
    private dataservice:DataService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getteamdata();
    this.getActiveUsers();
    this.getIncentivedata()
    this.userInceData=[];
  }

  getteamdata(){
  this.dataservice.getTeams().subscribe(res => {
    this.teamdeatails = res;
    })
  }
  getIncentivedata(){
    this.dataservice.getMonthlyInceData().subscribe(res => {
      this.userInceData = res;
      })
    }

  teamIdData(event) {
    this.team_id = event.target.value;
    this.date = event.target.value;
    this.dataservice.getTeamInceData(this.team_id).subscribe(res => {
      this.usersData = res;
    })
    
  }
  UsersData(event){
    this.user_id = event.target.value;
      this.dataservice.getIncenUserD(this.user_id).subscribe(res => {
        this.userInceData= res;
      })
  }
  getActiveUsers() {
    this.dataservice.getUserActive().subscribe(res => {
      this.ActiveUsers = res;
    })
  }
}
