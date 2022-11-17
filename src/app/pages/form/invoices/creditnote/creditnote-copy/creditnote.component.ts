import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Creditnote } from './creditnote.model';

@Component({
  selector: 'app-creditnote',
  templateUrl: './creditnote.component.html',
  styleUrls: ['./creditnote.component.scss']
})
export class CreditnoteComponent implements OnInit {


  creditnotedetails = new Creditnote;
  companylistArr:any;
  invoicedetailsArr:any;


  constructor(

    private dataservice:DataService,
    private route: Router
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

    })

  }


  submitCreditnote(){
    this.dataservice.registercreditnote(this.creditnotedetails).subscribe(res =>{
      //console.log(res);
      Swal.fire('Added!', 'Credit Note Details been added.', 'success'); 
      this.route.navigate(['/form/invoices/creditnote/creditnotelist']);
  })
  }
}
