import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import { Creditnote } from '../creditnote/creditnote.model';

@Component({
  selector: 'app-creditnotelist',
  templateUrl: './creditnotelist.component.html',
  styleUrls: ['./creditnotelist.component.scss']
})
export class CreditnotelistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public creditnotedetailsList: Array<Creditnote> = [];

  searchcreditnotedetails:string;
  creditnotedetailsArr:any;
  totalCount: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  /***Searching ***/
  invoice_num_Search: "";
  cname_Search: "";
  credit_note_num_Search: "";
  credit_note_date_Search:"";
  payout_percenatge_Search: "";
  taxable_amt_Search: "";
  
  constructor(
    private dataservice:DataService, orderPipe: OrderPipe
  ) { 
    this.sortedCollection = orderPipe.transform(this.creditnotedetailsArr, 'info.name');

  }

  ngOnInit(): void {
    this.getcreditnotedetailsData();
  }



  getcreditnotedetailsData(){
    this.dataservice.getCreditnote().subscribe(res=>{
      this.creditnotedetailsArr=res;
      console.log(res);
      this.totalCount= this.creditnotedetailsArr.length;
      this.creditnotedetailsList = this.getInvoicedetailsData1(this.totalCount);
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
