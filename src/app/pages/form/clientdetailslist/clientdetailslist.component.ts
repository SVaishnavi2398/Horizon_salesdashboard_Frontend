import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import { Clientdetails } from '../clientdetails/clientdetails.model';

@Component({
  selector: 'app-clientdetailslist',
  templateUrl: './clientdetailslist.component.html',
  styleUrls: ['./clientdetailslist.component.scss']
})
export class ClientdetailslistComponent implements OnInit {
  
  public page = 1;
  public pageSize = 10;
  public clientdetailsList: Array<Clientdetails> = [];
  searchclientdetails : string;

  clientdetaillistArr : any;
  totalCount: any;

  /****Searching**/
  nameSearch: "";
  catrgory_id_Search: "";
  occupation_id_Search: "";
  date_of_birth_Search: "";
  mobile1_Search: "";
  email1_Search: "";
  address_Search: "";
  
   /***Sorting***/
   order: string = 'info.name';
   reverse: boolean = false;
   sortedCollection: any[];
   caseInsensitive: boolean = false;
 
  constructor(private dataservice:DataService,  orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.clientdetaillistArr, 'info.name');

   }

  ngOnInit(): void {
    this.getClientsdetailData();
  }

  getClientsdetailData(){
      this.dataservice.getClientdetails().subscribe(res=>{
      this.clientdetaillistArr=res;
      this.totalCount= this.clientdetaillistArr.length;
      this.clientdetailsList = this.getClientsdetailData1(this.totalCount);
      
    })
  }

  getClientsdetailData1(count) {

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
