import { Component, OnInit, Pipe } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Salesdetails } from '../salesdetails/salesdetails.model';
/***Sorting */
import { OrderPipe } from 'ngx-order-pipe';
/**Searching */
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-salesdetailslist',
  templateUrl: './salesdetailslist.component.html',
  styleUrls: ['./salesdetailslist.component.scss']
})
export class SalesdetailslistComponent implements OnInit {

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  public page = 1;
  public pageSize = 10;
  public salesdetailsList: Array<Salesdetails> = [];

  /***Searching* */
  project_nameSearch : "";
  nameSearch : "";
  statusSearch : "";
  leadsourceSearch : "";
  firstnameSearch : "";
  booking_dateSearch: "";

  salesdetailsArr : any;
  searchsalesdetails : string;
  totalCount: any;
  

  constructor(private dataservice:DataService, orderPipe: OrderPipe, datePipe: DatePipe) { 
    this.sortedCollection = orderPipe.transform(this.salesdetailsArr, 'info.name');
    // console.log(this.sortedCollection);
  }
  
 

  ngOnInit(): void {
    this.getSalesdetailsData();
  }


  getSalesdetailsData(){
    this.dataservice.getSalesdetails().subscribe(res=>{
      this.salesdetailsArr=res;
      // console.log(this.salesdetailsArr);
      this.totalCount= this.salesdetailsArr.length;
      this.salesdetailsList = this.getSalesdetailsData1(this.totalCount);
    })
  }

  getSalesdetailsData1(count) {

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
