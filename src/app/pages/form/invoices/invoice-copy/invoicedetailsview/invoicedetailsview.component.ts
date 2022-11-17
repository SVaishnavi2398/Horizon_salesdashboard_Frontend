import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Invoicedetails } from '../invoicedetails/invoicedetails.model';

@Component({
  selector: 'app-invoicedetailsview',
  templateUrl: './invoicedetailsview.component.html',
  styleUrls: ['./invoicedetailsview.component.scss']
})
export class InvoicedetailsviewComponent implements OnInit {

  invoiceid:any;
  data:any;
  companylistArr:any;
  invoicedetails = new Invoicedetails;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService
  ) { }

  ngOnInit(): void {

    this.invoiceid=this.route.snapshot.params.id;
    this.getInvoicedetailsData();
    this.getCompanyData();
  }

  getCompanyData(){
    this.dataservice.getCompany().subscribe(res=>{
      this.companylistArr=res;
    })
  }

  
  getInvoicedetailsData(){
    this.dataservice.getOneInvoicedetails(this.invoiceid).subscribe(res=>{
      this.data=res;
      this.invoicedetails=this.data;
    })
  }
}
