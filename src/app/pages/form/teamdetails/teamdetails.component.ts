import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Teamdetails } from './teamdetails.model';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.scss']
})
export class TeamdetailsComponent implements OnInit {

  usersArr :any;
  teamsArr :any;
  statusArr :any; 
  designationArr :any;
  teamleadersArr : any;
  team_id:any;
  teamdetails = new Teamdetails;
  error = new Teamdetails;
  user_id: any;
  user1Arr: Object;
  user1: any;
  team_leaders: any;
  teamleaders1: Object;


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

 

  getteam(event){
    console.log(event.target.value);
    
      this.team_id = event.target.value
   
    this.dataservice.getTeamleaderlist(this.team_id).subscribe(res => {
              this.teamleadersArr = res;
              this.teamleaders1=res;
              console.log('mvkm',res);
              this.teamdetails.team_leader_name=this.teamleaders1[0].team_leader_name;
    });
    


  }


  getUser(event){
    console.log(event.target.value);
   
      this.user_id = event.target.value
   
    //console.log(this.user_id);
    this.dataservice.getOneUser(this.user_id).subscribe(res => {
      console.log(res);
           this.user1Arr=res;
           this.user1=res;

           this.teamdetails.designation=this.user1.designation;

           this.dataservice.getOneDesignations(this.teamdetails.designation).subscribe(res=>{
           
            this.designationArr = res;
            this.teamdetails.designation = this.designationArr.designation;
            this.teamdetails.designation_id = this.designationArr.designation_id;

          })

          this.dataservice.getEmpStatusListbyid(this.user1.status_id).subscribe(res=>{
            console.log(res);
            this.statusArr = res;
            this.teamdetails.empstatus = this.statusArr.empstatus;
            this.teamdetails.emp_status_id = this.statusArr.emp_status_id;
          })

    // console.log(this.salary[0].basic_pay);

            //console.log(selectedOption);
    });
   


  }

  submitTeamdetails(){
    this.dataservice.registerTeamdetails(this.teamdetails).subscribe(
      //console.log(res);
     
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Team Details has been added.', 'success');
    this.router.navigate(['/form/teamdetailslist']);
  }

   
  handleError(error){
    this.error = error.error.errors;
  }


  


}
