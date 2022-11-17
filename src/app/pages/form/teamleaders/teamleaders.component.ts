import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Teamleaders } from './teamleaders.model';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-teamleaders',
  templateUrl: './teamleaders.component.html',
  styleUrls: ['./teamleaders.component.scss']
})
export class TeamleadersComponent implements OnInit {
  usersArr :any;
  teamsArr :any;
  statusArr :any;
  user1Arr : any;
  user1 : any;
  team_leaders = new Teamleaders();
  error = new Teamleaders();
  user_id: any;

  constructor(
    private dataservice: DataService,
    private router: Router,
    private Token:TokenService

  ) { }

  ngOnInit(): void {
    this.getTeams();
    this.getUsers();
    this.getStatus();
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

  getStatus(){
    this.dataservice.getStatuslist().subscribe(res=>{
      //console.log(res);
      this.statusArr = res;
    })
  }

  submitTeamleader(){
    this.dataservice.registerTeamleader(this.team_leaders).subscribe(
        //console.log(res);
        
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );

    // this.dataservice.registerReports(this.team_leaders).subscribe(res =>{
    //   console.log(res);
     
    // })

  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Teamleader has been added.', 'success'); 
    this.router.navigate(['/form/teamleaderslist']);
  }

   
  handleError(error){
    this.error = error.error.errors;
  }

  getUser(event){
    console.log(event.target.value);
    
      this.user_id = event.target.value
   
console.log(this.user_id);
    this.dataservice.getOneUser(this.user_id).subscribe(res => {
      console.log(res);
           this.user1Arr=res;
           this.user1=res;
           var selectedOption = this.user1.firstname + ' ' + this.user1.lastname;
           this.team_leaders.team_leader_name=this.user1.firstname + ' ' + this.user1.lastname;
    // console.log(this.salary[0].basic_pay);

            console.log(selectedOption);
    });
    


  }




}
