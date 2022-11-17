import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import { Channelpartner } from '../channelpartner/channelpartner.model';

@Component({
  selector: 'app-channelpartnerslist',
  templateUrl: './channelpartnerslist.component.html',
  styleUrls: ['./channelpartnerslist.component.scss']
})
export class ChannelpartnerslistComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public channelpartnerList: Array<Channelpartner> = [];
  searchchannelpartner : string;

  channelpartnerlistArr : any;
  totalCount: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

   /***Searching ***/
  cp_nameSearch: "";
  catrgory_idSearch: "";
  occupation_idSearch: "";
  address_Search:"";
  date_of_birthSearch: "";
  mobile1Search: "";
  email1Search: "";

  constructor(private dataservice:DataService, orderPipe: OrderPipe) { 
    this.sortedCollection = orderPipe.transform(this.channelpartnerlistArr, 'info.name');

  }

  ngOnInit(): void {
    this.getChannelpartnersData();
  }

  getChannelpartnersData(){
    this.dataservice.getChannelpartner().subscribe(res=>{
      this.channelpartnerlistArr=res;
      this.totalCount= this.channelpartnerlistArr.length;
      this.channelpartnerList = this.getChannelpartnersData1(this.totalCount);
    })
  }

  getChannelpartnersData1(count) {

    let list = [];
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

   /**sorting */
   setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
