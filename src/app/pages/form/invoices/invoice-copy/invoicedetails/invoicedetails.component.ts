import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { Invoicedetails } from './invoicedetails.model';

@Component({
  selector: 'app-invoicedetails',
  templateUrl: './invoicedetails.component.html',
  styleUrls: ['./invoicedetails.component.scss']
})
export class InvoicedetailsComponent implements OnInit {


  invoicedetails = new Invoicedetails;
  error = new Invoicedetails;

  companylistArr:any;
  saleslistArr:any;
  invoicestatusArr:any;
  
  constructor(
    private dataservice:DataService,
    private route: Router,
    private Token:TokenService

  ) {
    
   }


  ngOnInit(): void {
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

  submitInvoicedetails(){
    this.dataservice.registerinvoicedetails(this.invoicedetails).subscribe(
      data=>this.handleResponse(data),
    error=>this.handleError(error)
  );
  }

  
  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Invoice Details has been added.', 'success'); 
    this.route.navigateByUrl('/form/invoicedetailslist');
  }

   
  handleError(error){
    this.error = error.error.errors;
  }


}
