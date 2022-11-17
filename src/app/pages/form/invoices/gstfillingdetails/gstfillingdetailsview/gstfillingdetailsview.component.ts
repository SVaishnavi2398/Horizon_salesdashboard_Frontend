import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Gstfillingdetails } from '../gstfillingdetails/gstfillingdetails.model';

@Component({
  selector: 'app-gstfillingdetailsview',
  templateUrl: './gstfillingdetailsview.component.html',
  styleUrls: ['./gstfillingdetailsview.component.scss']
})
export class GstfillingdetailsviewComponent implements OnInit {

  data:any;
  gstfillingdetails = new Gstfillingdetails;
  gstfillingid:any; 
  invoicedetailsArr:any;
  url: any;
  id: any;
  id1: any;
  
  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gstfillingid=this.route.snapshot.params.id;
    this.id = Number(this.gstfillingid) + Number(1);
    this.id1 = Number(this.gstfillingid) - Number(1);
    this.getGstfillingData();
    this.getInvoicedetails();
  }

  getInvoicedetails(){
    this.dataservice.getInvoicedetails().subscribe(res=>{
      this.invoicedetailsArr=res;
    })
  }

  getGstfillingData(){
    this.dataservice.getOneGstfillingdetails(this.gstfillingid).subscribe(
      data=>this.handleResponse(data),
     error=>this.handleError(error)
   );
  
  }
  handleResponse(data){
    this.gstfillingdetails=data;
   }
    
     
    handleError(error){
     if(this.gstfillingid != '0'){
       this.url = '/form/invoices/gstfillingdetails/gstfillingdetailsview/'+1;
      this.reloadComponent(this.url);
     }
     else{
      this.dataservice.getGstfillingdetails().subscribe(res=>{
      this.data = res;
      var lastid = this.data.length;
      this.url = '/form/invoices/gstfillingdetails/gstfillingdetailsview/'+lastid;
      this.reloadComponent(this.url);
      })
     }
    }

  reloadComponent(url) {
    let currentUrl = url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

    doSomeLogic(){
      this.url = '/form/invoices/gstfillingdetails/gstfillingdetailsview/'+this.id;
      this.reloadComponent(this.url);
    }
    doSomeLogics(){
      this.url = '/form/invoices/gstfillingdetails/gstfillingdetailsview/'+this.id1;
      this.reloadComponent(this.url);
    }

    back(){
      window.history.back();
    }
    
}
