import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Invoicedetails } from '../invoicedetails/invoicedetails.model';

@Component({
  selector: 'app-editinvoicedetails',
  templateUrl: './editinvoicedetails.component.html',
  styleUrls: ['./editinvoicedetails.component.scss']
})
export class EditinvoicedetailsComponent implements OnInit {

  invoiceid:any;
  data: any;
  invoicedetails = new Invoicedetails;
  companylistArr: any;
  saleslistArr: any;
  invoicestatusArr: any;

  constructor(
      private route:ActivatedRoute,
      private dataservice:DataService,
     // private router:Router
      private router: Router
  ) { }

  ngOnInit(): void {

    this.invoiceid=this.route.snapshot.params.id;
    this.getInvoicedetails();
    this.getCompanyData();
    this.getSalesdetails();
    this.getInvoicestatus();


  }

  getCompanyData(){
    this.dataservice.getCompany().subscribe(res=>{
      this.companylistArr=res;
    })
  }

  getSalesdetails(){
    this.dataservice.getSalesdetails().subscribe(res=>{
      this.saleslistArr=res;
    })
  }

  getInvoicestatus(){
    this.dataservice.getInvoiceStatus().subscribe(res=>{
      this.invoicestatusArr=res;
    })
  }

  getInvoicedetails(){
    this.dataservice.getOneInvoicedetails(this.invoiceid).subscribe(res=>{
      //console.log(res);
      this.data=res;
      this.invoicedetails=this.data;
  })
}

updateInvoicedetails(){
  this.dataservice.updateInvoiceDetails(this.invoiceid,this.invoicedetails).subscribe(res=>{
    Swal.fire('Updated!', 'Sales Details been added.', 'success'); 
    this.router.navigate(['/form/invoices/invoice/invoicedetailslist']);
    })
 }




}
