import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Teamdetails } from '../teamdetails/teamdetails.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editteamdetails',
  templateUrl: './editteamdetails.component.html',
  styleUrls: ['./editteamdetails.component.scss']
})
export class EditteamdetailsComponent implements OnInit {

  //teamleadersdetailsviewArr : any;
  usersArr :any;
  teamsArr :any;
  statusArr :any; 
  designationArr :any;
  teamdetailsid : any;
  teamdetails = new Teamdetails;
  data : any;
  team_id: any;
  teamleadersArr: Object;
  teamleaders1: Object;
  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teamdetailsid=this.route.snapshot.params.id;
    //this.getTeamlesdersdetailView();
    this.getTeamdetailsData();
    this.getStatus();
    this.getDesignation();
    this.getTeams();
    this.getUsers();
    
  }

  getTeamdetailsData(){
    this.dataservice.getOneTeamdetails(this.teamdetailsid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.teamdetails=this.data;
})
}

  //   getTeamlesdersdetailView(){
  //       this.dataservice.getTeamdetailsview(this.teamdetailsid).subscribe(res=>{
  //       //console.log(res);
  //       this.teamleadersdetailsviewArr=res;
  //   })
  // }

  getStatus(){
    this.dataservice.getStatuslist().subscribe(res=>{
      //console.log(res);
      this.statusArr = res;
    })
 }

 getDesignation(){
  this.dataservice.getDesignationlist().subscribe(res=>{
    //console.log(res);
    this.designationArr = res;
    })
  }

  getUsers(){
  this.dataservice.getUsers().subscribe(res=>{
    //console.log(res);
    this.usersArr = res;
    })
  }

  getTeams(){
  this.dataservice.getTeamslist().subscribe(res=>{
    //console.log(res);
    this.teamsArr = res;
    })
  }

  getteam(event){
    //console.log(event.target.value);
    
      this.team_id = event.target.value
   
    this.dataservice.getTeamleaderlist(this.team_id).subscribe(res => {
              this.teamleadersArr = res;
              this.teamleaders1=res;
              //console.log(res);
              this.teamdetails.team_leader_name=this.teamleaders1[0].team_leader_name;
    });
    


  }

 updateteamdetails(){
  this.dataservice.updateTeamdetails(this.teamdetailsid,this.teamdetails).subscribe(res=>{
    //console.log(res);
    Swal.fire('Updated!', 'Team has been updated.', 'success'); 
    this.router.navigate(['/form/teamdetailslist']);
    })
 }

}
