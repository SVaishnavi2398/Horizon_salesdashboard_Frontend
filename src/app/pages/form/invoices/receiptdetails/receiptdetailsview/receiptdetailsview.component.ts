import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { ReceiptDetails } from '../receiptdetails/receiptdetails.model';

@Component({
  selector: 'app-receiptdetailsview',
  templateUrl: './receiptdetailsview.component.html',
  styleUrls: ['./receiptdetailsview.component.scss']
})
export class ReceiptdetailsviewComponent implements OnInit {


  receiptid:any;
  data:any;
  receiptdetails = new ReceiptDetails;
  url: any;
  id: any;
  id1: any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.receiptid=this.route.snapshot.params.id;
    this.id = Number(this.receiptid) + Number(1);
    this.id1 = Number(this.receiptid) - Number(1);
    this.getReceiptdetailsData();
  }


  getReceiptdetailsData(){
    this.dataservice.getOneReceiptdetails(this.receiptid).subscribe(

      data=>this.handleResponse(data),
      error=>this.handleError(error)
    )
  }

  
  handleResponse(data){
    this.receiptdetails=data;
   }
    
     
    handleError(error){
      console.log('test');
     if(this.receiptid != '0'){
       this.url = '/form/invoices/receiptdetails/receiptdetailsview/'+1;
      this.reloadComponent1(this.url);
     }
     else{
      this.dataservice.getReceiptdetails().subscribe(res=>{
      this.data = res;
      console.log(res);
      var lastid = this.data.length;
      this.url = '/form/invoices/receiptdetails/receiptdetailsview/'+lastid;
      this.reloadComponent1(this.url);
      })
    }
    }

  
  reloadComponent1(url) {
    let currentUrl = url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

    doSomeLogic(){
      this.url = '/form/invoices/receiptdetails/receiptdetailsview/'+this.id;
      this.reloadComponent1(this.url);
    }
    doSomeLogics(){
      this.url = '/form/invoices/receiptdetails/receiptdetailsview/'+this.id1;
      this.reloadComponent1(this.url);
    }

    back(){
      window.history.back();
    }
    
}
