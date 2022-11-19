import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Teamdetails } from '../teamdetails/teamdetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamdetailslistview',
  templateUrl: './teamdetailslistview.component.html',
  styleUrls: ['./teamdetailslistview.component.scss']
})
export class TeamdetailslistviewComponent implements OnInit {

  statusArr: any;
  designationArr: any;
  teamsArr: any;
  usersArr: any;
  teamdetailsid: any;
  data: any;
  teamdetails = new Teamdetails;

  constructor(private route: ActivatedRoute,
    private dataservice: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.teamdetailsid = this.route.snapshot.params.id;
    this.getTeamdetailsData();
    this.getUsers();
    this.getTeams();
    this.getDesignation();
    this.getStatus();
  }

  getTeamdetailsData() {
    this.dataservice.getOneTeamdetails(this.teamdetailsid).subscribe(res => {
      //console.log(res);
      this.data = res;
      this.teamdetails = this.data;
    })
  }

  getUsers() {
    this.dataservice.getUsers().subscribe(res => {
      //console.log(res);
      this.usersArr = res;
    })
  }

  getTeams() {
    this.dataservice.getTeamslist().subscribe(res => {
      //console.log(res);
      this.teamsArr = res;
    })
  }

  getDesignation() {
    this.dataservice.getDesignationlist().subscribe(res => {
      //console.log(res);
      this.designationArr = res;
    })
  }

  getStatus() {
    this.dataservice.getStatuslist().subscribe(res => {
      //console.log(res);
      this.statusArr = res;
    })
  }


  back() {
    window.history.back();
  }

}
