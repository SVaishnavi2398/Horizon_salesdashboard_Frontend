import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Teams } from '../teams/teams.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editteams',
  templateUrl: './editteams.component.html',
  styleUrls: ['./editteams.component.scss']
})
export class EditteamsComponent implements OnInit {

  teamid:any;
  teams= new Teams;
  data:any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teamid=this.route.snapshot.params.id;
    this.getTeamData();
  }

  getTeamData(){
    this.dataservice.getOneTeams(this.teamid).subscribe(res=>{
      //console.log(res);
      this.data=res;
      this.teams=this.data;
  })
  }

  updateteams(){
    this.dataservice.updateTeams(this.teamid,this.teams).subscribe(res=>{
          //console.log(res);
          Swal.fire('Updated!', 'Team has been updated.', 'success'); 
          this.router.navigate(['/form/teamslist']);
          //console.log(res);
          //this.data=res;
          //this.roles=this.data;
    })
  }

}
