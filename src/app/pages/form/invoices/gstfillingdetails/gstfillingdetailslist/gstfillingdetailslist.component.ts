import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import { Gstfillingdetails } from '../gstfillingdetails/gstfillingdetails.model';

@Component({
  selector: 'app-gstfillingdetailslist',
  templateUrl: './gstfillingdetailslist.component.html',
  styleUrls: ['./gstfillingdetailslist.component.scss']
})
export class GstfillingdetailslistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public gstfillingdetailsList: Array<Gstfillingdetails> = [];

  searchgstfillingdetails:string;
  gstfillingdetailsArr:any;
  totalCount: any;
  
  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  /***Searching***/
  invoice_num_Search: "";
  inv_type_Search: "";
  gstr1_month_Search: "";
  gstr1_amount_Search: "";
  filed_status_Search: "";

  constructor(
    private dataservice:DataService, orderPipe: OrderPipe
    
  ) { 
    this.sortedCollection = orderPipe.transform(this.gstfillingdetailsArr, 'info.name');

  }

  ngOnInit(): void {
    this.getgstfillingdetailsData();
  }



  getgstfillingdetailsData(){
    this.dataservice.getGstfillingdetails().subscribe(res=>{
      this.gstfillingdetailsArr=res;
      console.log(this.gstfillingdetailsArr);
      this.totalCount= this.gstfillingdetailsArr.length;
      this.gstfillingdetailsList = this.getInvoicedetailsData1(this.totalCount);
    })
  }

  getInvoicedetailsData1(count) {

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

