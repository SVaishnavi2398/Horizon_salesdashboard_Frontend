import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Invoicedetails } from '../invoicedetails/invoicedetails.model';

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

  constructor(
    private dataservice:DataService
  ) { }

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

}
