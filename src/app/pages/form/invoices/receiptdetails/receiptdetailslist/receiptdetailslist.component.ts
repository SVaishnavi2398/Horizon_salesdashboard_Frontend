import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import { ReceiptDetails } from '../receiptdetails/receiptdetails.model';

@Component({
  selector: 'app-receiptdetailslist',
  templateUrl: './receiptdetailslist.component.html',
  styleUrls: ['./receiptdetailslist.component.scss']
})
export class ReceiptdetailslistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public receiptdetailsList: Array<ReceiptDetails> = [];
  receiptdetailsArr:any;
  totalCount: any;

   /***Sorting***/
   order: string = 'info.name';
   reverse: boolean = false;
   sortedCollection: any[];
   caseInsensitive: boolean = false;

    /***Searching ***/
    invoice_num_Search: "";
    payment_mode_Search: "";
    instument_no_Search: "";
    received_amt_Search:"";
    instument_date_Search: "";
    received_taxable_amt_Search: "";

  searchreceiptdetails:string;
  constructor(
    private dataservice:DataService, orderPipe: OrderPipe
  ) {
    this.sortedCollection = orderPipe.transform(this.receiptdetailsArr, 'info.name');

   }

  ngOnInit(): void {
    this.getReceiptdetailsData();
  }


  getReceiptdetailsData(){
    this.dataservice.getReceiptdetails().subscribe(res=>{
      this.receiptdetailsArr=res;
      console.log(this.receiptdetailsArr);
      this.totalCount= this.receiptdetailsArr.length;
      this.receiptdetailsList = this.getInvoicedetailsData1(this.totalCount);
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
