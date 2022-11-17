import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Teamleaders } from '../teamleaders/teamleaders.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editteamleaders',
  templateUrl: './editteamleaders.component.html',
  styleUrls: ['./editteamleaders.component.scss']
})
export class EditteamleadersComponent implements OnInit {

  teamleadersid:any;
  team_leaders= new Teamleaders;
  data:any;
  teamleadersArr:any;
  usersArr :any;
  teamsArr :any;
  statusArr :any;
  
  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teamleadersid=this.route.snapshot.params.id;
    this.getTeamleadersData();
    this.getStatus();
    this.getTeams();
    this.getUsers();
  }

  //getTeamleadersData(){
    //this.dataservice.getOneTeamleaders(this.teamleadersid).subscribe(res=>{
      //this.teamleadersArr=res;
      //this.usersArr = res;
      //this.statusArr = res;
      //console.log(res);
      //this.data=res;
      //this.team_leaders=this.data;
  //})
  //}

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

  updateteamleaders(){
    this.dataservice.updateTeamleaders(this.teamleadersid,this.team_leaders).subscribe(res=>{
      //console.log(res);
      Swal.fire('Updated!', 'Teamleaders Details has been updated.', 'success'); 
      this.router.navigate(['/form/teamleaderslist']);
      })
  }


}
