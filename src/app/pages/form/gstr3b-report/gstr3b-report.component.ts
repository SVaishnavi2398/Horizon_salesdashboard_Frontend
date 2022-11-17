import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gstr3b-report',
  templateUrl: './gstr3b-report.component.html',
  styleUrls: ['./gstr3b-report.component.scss']
})
export class Gstr3bReportComponent implements OnInit {
  monthid: any;
  reportdetails: any;
  sales_Basic_Total = 0;
  sales_Lability_Total: any;
  sales_Lability_Arr: any;
  CGST_ITC_Arr: any;
  CGST_ITC_Total: any;
  SGST_ITC_Arr: any;
  SGST_ITC_Total: any;
  IGST_ITC_Arr: any;
  IGST_ITC_Total: any;
  ITC_Total: any;
  ITC_Total_Arr: any;
  Utilisation_Total_Arr: any;
  Utilisation_Total: number;
  Late_Fee_Total_Arr: any[];
  Late_Fee_Total: number;
  ITC_Balance_Arr: any;
  ITC_Balance_Total: any;
  ITC_Expe_Arr: any[];
  ITC_Expe_Total: number;
  monthyear: any;
  month: any;
  MonthArr: any;
  RepMonth: any;
  url: string;
  id: number;
  id1: number;
  data: any;
  lastid: any;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private dataservice:DataService,
    
  ) { }

  ngOnInit(): void {
    this.monthid = this.route.snapshot.params.id;
    this.id = Number(this.monthid) + Number(1);
    this.id1 = Number(this.monthid) - Number(1);
    this.report();
    
  }

  report(){
     this.dataservice.getReport(this.monthid).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  
  }

 
  

  handleResponse(data){
    //  console.log(data);
    this.reportdetails = data;

    this.sales_Lability_Arr = [this.reportdetails.sales_CGST_Total,this.reportdetails.sales_SGST_Total,this.reportdetails.sales_IGST_Total];
    this.sales_Lability_Total = Math.round(Number(this.sales_Lability_Arr.reduce((a, b) => a + b, 0)));
    this.CGST_ITC_Arr = [this.reportdetails.pur_CGST_total, this.reportdetails.ITC_CGST];
    this.CGST_ITC_Total = Math.round(Number(this.CGST_ITC_Arr.reduce((a, b) => a + b, 0)));
    this.SGST_ITC_Arr = [this.reportdetails.pur_SGST_total, this.reportdetails.ITC_SGST];
    this.SGST_ITC_Total = Math.round(Number(this.SGST_ITC_Arr.reduce((a, b) => a + b, 0)));
    this.IGST_ITC_Arr = [this.reportdetails.pur_IGST_total, this.reportdetails.ITC_IGST];
    this.IGST_ITC_Total = Math.round(Number(this.IGST_ITC_Arr.reduce((a, b) => a + b, 0)));
    this.ITC_Total_Arr = [this.CGST_ITC_Total, this.SGST_ITC_Total, this.IGST_ITC_Total];
    this.ITC_Total = Math.round(Number(this.ITC_Total_Arr.reduce((a, b) => a + b, 0)));
    this.Utilisation_Total_Arr = [this.reportdetails.CGST_to_CGST, this.reportdetails.SGST_to_SGST, this.reportdetails.pur_IGST_total];
    this.Utilisation_Total = Math.round(Number(this.Utilisation_Total_Arr.reduce((a, b) => a + b, 0)));
    this.Late_Fee_Total_Arr = [this.reportdetails.CGST_Late_Fees, this.reportdetails.SGST_Late_Fees];
    this.Late_Fee_Total = Math.round(Number(this.Late_Fee_Total_Arr.reduce((a, b) => a + b, 0)));
    this.ITC_Expe_Arr = [this.reportdetails.pur_CGST_total, this.reportdetails.pur_SGST_total, this.reportdetails.pur_IGST_total];
    this.ITC_Expe_Total = Math.round(Number(this.ITC_Expe_Arr.reduce((a, b) => a + b, 0)));
    this.ITC_Balance_Arr = [this.reportdetails.ITC_CGST, this.reportdetails.ITC_SGST, this.reportdetails.ITC_IGST];
    this.ITC_Balance_Total = Math.round(Number(this.ITC_Balance_Arr.reduce((a, b) => a + b, 0)));
    // console.log(this.reportdetails);
    this.monthyear = this.reportdetails.month_year.split("-").map(item => item.trim());
    this.month = this.monthyear[0];
    this.dataservice.getmonth(this.month).subscribe(res => {
      this.MonthArr = res;
      this.RepMonth = this.MonthArr.month;
   })
  }

  handleError(error){
     
    if(this.monthid == 0){
      this.url = '/form/gstr3BReport/'+this.id;
      this.reloadComponent(this.url);
    }else{
      this.dataservice.getGstr3BReport().subscribe(res=>{
        this.data = res;
        console.log(this.data);
        this.lastid = this.data.length;
        this.url = '/form/gstr3BReport/' + this.lastid;
        this.reloadComponent(this.url);
      })
    }
  }

  doSomeLogic(){
    this.url = '/form/gstr3BReport/'+ this.id;
    this.reloadComponent(this.url);
  }
  doSomeLogics(){
    this.url = '/form/gstr3BReport/'+ this.id1;
    this.reloadComponent(this.url);
  }

  reloadComponent(url) {
    let currentUrl = url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
