import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { Gstfillingdetails } from './gstfillingdetails.model';

@Component({
  selector: 'app-gstfillingdetails',
  templateUrl: './gstfillingdetails.component.html',
  styleUrls: ['./gstfillingdetails.component.scss']
})
export class GstfillingdetailsComponent implements OnInit {

  gstfillingdetails = new Gstfillingdetails;
  error = new Gstfillingdetails;

  invoicedetailsArr:any;


  
  constructor(
    private dataservice:DataService,
    private route: Router,
    private Token:TokenService
  ) { }

  ngOnInit(): void {
    console.log(this.invoicedetailsArr,"gstfillingdetails");
    
    this.getinvoicedetails();

  }
  getinvoicedetails(){
    this.dataservice.getInvoicedetails().subscribe(res =>{
      this.invoicedetailsArr=res;

    })

  }


  submitGstfillingdetails(){
    this.dataservice.registerGstfillingdetails(this.gstfillingdetails).subscribe(
      //console.log(res);
    
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );

  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Gst Filling Details been added.', 'success'); 
    this.route.navigate(['/form/invoices/gstfillingdetails/gstfillingdetailslist']);
  }

   
  handleError(error){
    this.error = error.error.errors;
  }


}
