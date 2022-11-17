import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Teamleaders } from '../teamleaders/teamleaders.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamleaderslistview',
  templateUrl: './teamleaderslistview.component.html',
  styleUrls: ['./teamleaderslistview.component.scss']
})
export class TeamleaderslistviewComponent implements OnInit {


  teamleadersid:any;
  team_leaders= new Teamleaders;
  data:any;
  teamleadersArr:any;
  usersArr :any;
  teamsArr :any;
  statusArr :any;

  constructor(private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.teamleadersid=this.route.snapshot.params.id;
    this.getTeamleadersData();
    this.getStatus();
    this.getTeams();
    this.getUsers();
  }

  getTeamleadersData(){
    this.dataservice.getOneTeamleaders(this.teamleadersid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.team_leaders=this.data;
    })
  }

  getStatus(){
  this.dataservice.getStatuslist().subscribe(res=>{
    //console.log(res);
    this.statusArr = res;
    })
  }

  getTeams(){
  this.dataservice.getTeamslist().subscribe(res=>{
   //console.log(res);
   this.teamsArr = res;
    })
  }

  getUsers(){
  this.dataservice.getUsers().subscribe(res=>{
   //console.log(res);
   this.usersArr = res;
    })
  }
  back(){
    window.history.back();
  }
  

}
