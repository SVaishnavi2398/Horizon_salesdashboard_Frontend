import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Company } from '../company/company.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylistview',
  templateUrl: './companylistview.component.html',
  styleUrls: ['./companylistview.component.scss']
})
export class CompanylistviewComponent implements OnInit {

  companylistview = new Company;
  companylistviewid: any;
  data : any;
  url: any;
  id1: any;
  id: any;

  constructor(private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.companylistviewid=this.route.snapshot.params.id;
    this.id = Number(this.companylistviewid) + Number(1);
    this.id1 = Number(this.companylistviewid) - Number(1);
    this.getCompanylistView();
  }

  getCompanylistView(){
    this.dataservice.getCompanyview(this.companylistviewid).subscribe(
      //console.log(res);
   
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
  
  }

  handleResponse(data){
    this.companylistview = data;
   }
    
     
    handleError(error){
     if(this.companylistviewid != '0'){
       this.url = '/form/companylistview/'+1;
      this.reloadComponent(this.url);
     }
     else{
      this.dataservice.getCompanylist().subscribe(res=>{
      this.data = res;
      var lastid = this.data[0].debtor_company_det_id;
      this.url = '/form/companylistview/'+lastid;
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
      this.url = '/form/companylistview/'+this.id;
      this.reloadComponent(this.url);
    }
    doSomeLogics(){
      this.url = '/form/companylistview/'+this.id1;
      this.reloadComponent(this.url);
    }
    back(){
      window.history.back();
    }
    
}
