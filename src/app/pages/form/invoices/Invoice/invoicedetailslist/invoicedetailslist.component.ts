import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import { Invoicedetails } from '../invoicedetailsnew/invoicedetailsnew.model';

@Component({
  selector: 'app-invoicedetailslist',
  templateUrl: './invoicedetailslist.component.html',
  styleUrls: ['./invoicedetailslist.component.scss']
})
export class InvoicedetailslistComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public invoicedetailsList: Array<Invoicedetails> = [];

  searchinvoicedetails : string;
  invoicedetailsArr :any;
  totalCount: any;

  /****Searching**/
  nameSearch: "";
  cname_Search: "";
  cgst_Search: "";
  invoice_num_Search: "";
  total_gst_amt_Search: "";

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  constructor(
    private dataservice:DataService, orderPipe: OrderPipe, 
  ) {
    this.sortedCollection = orderPipe.transform(this.invoicedetailsArr, 'info.name');

   }

  ngOnInit(): void {

    this.getInvoicedetailsData();
  }


  getInvoicedetailsData(){
    this.dataservice.getInvoicedetails().subscribe(res=>{
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

  /**sorting */
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
