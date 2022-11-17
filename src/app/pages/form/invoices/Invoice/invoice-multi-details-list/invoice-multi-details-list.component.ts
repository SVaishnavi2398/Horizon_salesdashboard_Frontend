import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import { Invoicedetails } from '../invoicedetailsnew/invoicedetailsnew.model';

@Component({
  selector: 'app-invoice-multi-details-list',
  templateUrl: './invoice-multi-details-list.component.html',
  styleUrls: ['./invoice-multi-details-list.component.scss']
})
export class InvoiceMultiDetailsListComponent implements OnInit {

  
  public page = 1;
  public pageSize = 10;
  public invoicedetailsList: Array<Invoicedetails> = [];

  searchinvoicedetails1 : string;
  invoicedetailsArr :any;
  totalCount: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

   /***Searching***/
   cname_Search1: "";
   cgst_Search1: "";
   invoice_num_Search1: "";
   total_gst_amt_Search1: "";
   
  constructor(
    private dataservice:DataService,
    orderPipe: OrderPipe
  ) { 
    this.sortedCollection = orderPipe.transform(this.invoicedetailsArr, 'info.name');

  }

  ngOnInit(): void {

    this.getInvoicedetailsData();
  }


  getInvoicedetailsData(){
    this.dataservice.getInvoicedetailsMulti().subscribe(res=>{
     // console.log(res);
      this.invoicedetailsArr=res;
      this.totalCount= this.invoicedetailsArr.length;
      this.invoicedetailsList = this.getInvoicedetailsData1(this.totalCount);
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
