import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Gstfillingdetails } from '../gstfillingdetails/gstfillingdetails.model';

@Component({
  selector: 'app-editgstfillingdetails',
  templateUrl: './editgstfillingdetails.component.html',
  styleUrls: ['./editgstfillingdetails.component.scss']
})
export class EditgstfillingdetailsComponent implements OnInit {

  gstfillingid:any;
  data: any;
  gstfillingdetails = new Gstfillingdetails;
  invoicedetailsArr: any;
  constructor(

    private route:ActivatedRoute,
    private dataservice:DataService,
   // private router:Router
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gstfillingid=this.route.snapshot.params.id;
    this.getGstfillingdetails();
    this.getInvoicedetails();
  }

  getInvoicedetails(){
    this.dataservice.getInvoicedetails().subscribe(res=>{
      this.invoicedetailsArr=res;
    })
  }

 

  getGstfillingdetails(){
    this.dataservice.getOneGstfillingdetails(this.gstfillingid).subscribe(res=>{
      this.data=res;
      this.gstfillingdetails = this.data;
     
    })

  }

  UpdateGstfillingdetails(){
    this.dataservice.updateGstfillingdetails(this.gstfillingid,this.gstfillingdetails).subscribe(res=>{
      Swal.fire('Updated!', 'GST filling been updated.', 'success'); 
      this.router.navigate(['/form/invoices/gstfillingdetails/gstfillingdetailslist']);
      })
   }
  

}