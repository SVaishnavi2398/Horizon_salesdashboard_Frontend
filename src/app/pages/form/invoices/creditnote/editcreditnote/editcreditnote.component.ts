import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Creditnote } from '../creditnote/creditnote.model';

@Component({
  selector: 'app-editcreditnote',
  templateUrl: './editcreditnote.component.html',
  styleUrls: ['./editcreditnote.component.scss']
})
export class EditcreditnoteComponent implements OnInit {


  creditnoteid:any;
  data: any;
  creditnotedetails = new Creditnote;
  companylistArr: any;
  invoicedetailsArr: any;
  constructor(

    private route:ActivatedRoute,
    private dataservice:DataService,
   // private router:Router
    private router: Router
  ) { }

  ngOnInit(): void {
    this.creditnoteid=this.route.snapshot.params.id;
    this.getCompanyData();
    this.getCreditnote();
    this.getInvoicestatus();
  }

  getInvoicestatus(){
    this.dataservice.getInvoicedetails().subscribe(res=>{
      this.invoicedetailsArr=res;
     // console.log(res);
    })
  }

  getCompanyData(){
    this.dataservice.getCompany().subscribe(res=>{
      this.companylistArr=res;
    })
  }

  getCreditnote(){
    this.dataservice.getOneCreditnote(this.creditnoteid).subscribe(res=>{
      this.data=res;
      console.log(res);
      this.creditnotedetails = this.data[0];
    })

  }

  updateCreditnote(){
    this.dataservice.updateCreditnote(this.creditnoteid,this.creditnotedetails).subscribe(res=>{
      Swal.fire('Updated!', 'Credit Note been updated.', 'success'); 
      this.router.navigate(['/form/invoices/creditnote/creditnotelist']);
      })
   }
  

}
