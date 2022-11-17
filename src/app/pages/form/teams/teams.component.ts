import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Teams } from './teams.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams = new Teams();
  error = new Teams();

  constructor(
    private dataservice: DataService,
    private route: Router,
    private Token:TokenService
    
    ) { }

  ngOnInit(): void {
  }

  submitteams(){
    this.dataservice.registerTeams(this.teams).subscribe(
        //console.log(res);
    
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
}

handleResponse(data){
  this.Token.handle(data.access_token);
  Swal.fire('Added!', 'Team has been added.', 'success'); 
  this.route.navigate(['/form/teamslist']);
}

 
handleError(error){
  this.error = error.error.errors;
}

}
