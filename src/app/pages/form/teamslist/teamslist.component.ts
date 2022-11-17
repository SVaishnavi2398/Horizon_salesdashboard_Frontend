import { Component, OnInit } from '@angular/core';
//import { analytics } from 'firebase';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Teams } from '../teams/teams.model';

@Component({
  selector: 'app-teamslist',
  templateUrl: './teamslist.component.html',
  styleUrls: ['./teamslist.component.scss']
})
export class TeamslistComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public teamList: Array<Teams> = [];
  searchteams:any;
  teamsArr:any;
  data:any;
  totalCount: any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.getTeamsData();
  }

  getTeamsData(){
    this.dataservice.getTeams().subscribe(res=>{
      this.teamsArr=res;
      this.totalCount= this.teamsArr.length;
      this.teamList = this.getteamlist(this.totalCount);
    })
  }

  getteamlist(count) {

    let list = [];
  
  
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

deleteTeamsData(team_id){
  Swal.fire({
    title: 'Are you sure?',
    //text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#34c38f',
    cancelButtonColor: '#f46a6a',
    confirmButtonText: 'Yes, delete it!'
  }).then(res => {
    if (res.value) {

      this.dataservice.deleteTeams(team_id,this.data).subscribe(res=>{
      Swal.fire('Deleted!', 'Team has been deleted.', 'success'); 
      this.getTeamsData();
      });

    }
  })


}
 


}
