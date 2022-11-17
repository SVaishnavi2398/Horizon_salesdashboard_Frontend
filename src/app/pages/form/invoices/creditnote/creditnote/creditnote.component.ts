import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { Creditnote } from './creditnote.model';

@Component({
  selector: 'app-creditnote',
  templateUrl: './creditnote.component.html',
  styleUrls: ['./creditnote.component.scss']
})
export class CreditnoteComponent implements OnInit {


  creditnotedetails = new Creditnote;
  error = new Creditnote;

  companylistArr:any;
  invoicedetailsArr:any;


  constructor(

    private dataservice:DataService,
    private route: Router,
    private Token:TokenService

  ) { }

  ngOnInit(): void {

    this.getCompanyData();
    this.getinvoicedetails();
  }

  getCompanyData(){
    this.dataservice.getCompany().subscribe(res=>{
      this.companylistArr=res;
    })
  }

  getinvoicedetails(){
    this.dataservice.getInvoicedetails().subscribe(res =>{
      this.invoicedetailsArr=res;
      console.log(res);

    })

  }


  submitCreditnote(){
    this.dataservice.registercreditnote(this.creditnotedetails).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
  }


  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Credit Note Details has been added.', 'success'); 
    this.route.navigateByUrl('form/invoices/creditnote/creditnotelist');
  }

   
  handleError(error){
    this.error = error.error.errors;
  }

}
