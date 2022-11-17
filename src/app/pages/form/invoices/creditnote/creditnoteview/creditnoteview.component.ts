import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Creditnote } from '../creditnote/creditnote.model';

@Component({
  selector: 'app-creditnoteview',
  templateUrl: './creditnoteview.component.html',
  styleUrls: ['./creditnoteview.component.scss']
})
export class CreditnoteviewComponent implements OnInit {

  data:any;
  creditnotedetails = new Creditnote;
  creditnoteid:any; 
  id: any;
  id1: any;
  url: any;
  
  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.creditnoteid=this.route.snapshot.params.id;
    this.id = Number(this.creditnoteid) + Number(1);
    this.id1 = Number(this.creditnoteid) - Number(1);
    this.getCreditnoteData();
  }

  getCreditnoteData(){
    this.dataservice.getOneCreditnote(this.creditnoteid).subscribe(
     
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
  
  }


  handleResponse(data){
    console.log(data);
    this.creditnotedetails=data[0];
   }
    
     
    handleError(error){
     if(this.creditnoteid != '0'){
       this.url = '/form/invoices/creditnote/creditnoteview/'+1;
      this.reloadComponent(this.url);
     }
     else{
      this.dataservice.getCreditnote().subscribe(res=>{
      this.data = res;
      var lastid = this.data[0].client_id;
      this.url = '/form/invoices/creditnote/creditnoteview/'+lastid;
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
      this.url = '/form/invoices/creditnote/creditnoteview/'+this.id;
      this.reloadComponent(this.url);
    }
    doSomeLogics(){
      this.url = '/form/invoices/creditnote/creditnoteview/'+this.id1;
      this.reloadComponent(this.url);
    }

    back(){
      window.history.back();
    }
    
}
