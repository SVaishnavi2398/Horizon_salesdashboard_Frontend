import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Teamleaders } from '../teamleaders/teamleaders.model';

@Component({
  selector: 'app-teamleaderslist',
  templateUrl: './teamleaderslist.component.html',
  styleUrls: ['./teamleaderslist.component.scss']
})
export class TeamleaderslistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public teamleaderList: Array<Teamleaders> = [];
  teamleadersArr: any;
  searchteamleaderslist: string;
  totalCount: any;
  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  /***Searching***/
  teamname_Search: "";
  firstname_search: "";
  teamstatus_search: "";
  from_date_Search: "";
  to_date_Search: "";

  constructor(private dataservice: DataService, orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.teamleadersArr, 'info.name');

  }

  ngOnInit(): void {
    this.getTeamlesdersData();
  }

  getTeamlesdersData() {
    this.dataservice.getTeamleaderslist().subscribe(res => {
      this.teamleadersArr = res;
      this.totalCount = this.teamleadersArr.length;
      this.teamleaderList = this.getTeamleader(this.totalCount);
    })
  }

  getTeamleader(count) {

    let list = [];


    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({ random: Math.random() });
    }
    return list;
  }

  deleteteamleadersData(team_leader_id) {
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

        this.dataservice.deleteTeamleader(team_leader_id).subscribe(res => {
          Swal.fire('Deleted!', 'Team has been deleted.', 'success');
          this.getTeamlesdersData();
        });

      }
    })


  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }


}
