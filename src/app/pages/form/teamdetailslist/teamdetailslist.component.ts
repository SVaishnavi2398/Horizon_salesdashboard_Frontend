import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import { Teamdetails } from '../teamdetails/teamdetails.model';

@Component({
  selector: 'app-teamdetailslist',
  templateUrl: './teamdetailslist.component.html',
  styleUrls: ['./teamdetailslist.component.scss']
})

export class TeamdetailslistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public teamdetailsList: Array<Teamdetails> = [];
  teamdetailsArr : any;
  searchteamdetailslist : string;
  totalCount: any;
  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;
   /**Searching***/
   firstname_search: "";
   teamname_Search: "";
   designation_Search: "";
   teamstatus_search: "";
   from_date_Search: "";
   to_date_Search: "";

  constructor(private dataservice:DataService,  orderPipe: OrderPipe) { 
    this.sortedCollection = orderPipe.transform(this.teamdetailsArr, 'info.name');
  }

  ngOnInit(): void {
    this.getTeamlesdersdetailData();
  }

  getTeamlesdersdetailData(){
    this.dataservice.getTeamdetails().subscribe(res=>{
      this.teamdetailsArr=res;
      this.totalCount= this.teamdetailsArr.length;
      this.teamdetailsList = this.getTeamdetailslist(this.totalCount);
    })
  }

  getTeamdetailslist(count) {

    let list = [];
  
  
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
