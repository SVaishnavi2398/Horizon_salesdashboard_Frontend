import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from '../../../service/data.service';
import { GSTR3B } from '../gstr3-b/gstr3b.model';

@Component({
  selector: 'app-gstr3-bdetails',
  templateUrl: './gstr3-bdetails.component.html',
  styleUrls: ['./gstr3-bdetails.component.scss']
})
export class Gstr3BDetailsComponent implements OnInit {

  gstr3b = new GSTR3B;
  gstr3bdata: any;
  Sales_RCM_Arr: any[]=[];
  Sales_Amendment_Arr: any[];
  Purchase_RCM_Arr: any[];
  PURC_Previous_year_Arr: any[];
  Previous_Month_ITC_Arr: any[];
  Late_Fees_Arr: any[];
  Carried_Forward_Arr: any[];
  Purchase_Amendment_Arr: any[];
  gstr3bdetails: any[]=[];
  str: any[]=[];
  stringObject: any[]=[];
  stringJson: any;
  monthyear: any;
  MonthArr: any;
  monthstr: any;
  month: any;
   /***Sorting***/
   order: string = 'info.name';
   reverse: boolean = false;
   sortedCollection: any[];
   caseInsensitive: boolean = false;
   
  constructor(
    private dataservice:DataService,
    orderPipe: OrderPipe
  ) {
    this.sortedCollection = orderPipe.transform(this.gstr3bdetails, 'info.name');
   }

  ngOnInit(): void {
    this.getReports();
  }


  getReports(){
      

    this.dataservice.getGstr3BReport().subscribe(res=>{
      //  console.log(res);
      this.gstr3bdata = res;
      for(var i=0; i<this.gstr3bdata.length; i++){
        // this.gstr3bdetails[i] = this.gstr3b;
        this.gstr3b.id = this.gstr3bdata[i].id;
        this.gstr3b.month_year = this.gstr3bdata[i].month_year;
       
        this.Sales_RCM_Arr = [this.gstr3bdata[i].sales_CGST_RCM, this.gstr3bdata[i].sales_SGST_RCM, this.gstr3bdata[i].sales_IGST_RCM]
        this.gstr3b.Sales_RCM = Math.round(Number(this.Sales_RCM_Arr.reduce((a, b) => a + b, 0)));
        this.Sales_Amendment_Arr = [this.gstr3bdata[i].sales_CGST_Amendment, this.gstr3bdata[i].sales_SGST_Amendment, this.gstr3bdata[i].sales_IGST_Amendment]
        this.gstr3b.Sales_Amendment = Math.round(Number(this.Sales_Amendment_Arr.reduce((a, b) => a + b, 0)));
        this.Purchase_RCM_Arr = [this.gstr3bdata[i].purc_RCM_CGST, this.gstr3bdata[i].purc_RCM_SGST, this.gstr3bdata[i].purc_RCM_IGST]
        this.gstr3b.Purchase_RCM = Math.round(Number(this.Purchase_RCM_Arr.reduce((a, b) => a + b, 0)));
        this.Purchase_Amendment_Arr = [this.gstr3bdata[i].purc_CGST_Amendment, this.gstr3bdata[i].purc_SGST_Amendment, this.gstr3bdata[i].purc_IGST_Amendment]
        this.gstr3b.Purchase_Amendment = Math.round(Number(this.Purchase_Amendment_Arr.reduce((a, b) => a + b, 0)));
        this.PURC_Previous_year_Arr = [this.gstr3bdata[i].Pre_year_adj_CGST, this.gstr3bdata[i].Pre_year_adj_SGST, this.gstr3bdata[i].Pre_year_adj_IGST]
        this.gstr3b.PURC_Previous_year = Math.round(Number(this.PURC_Previous_year_Arr.reduce((a, b) => a + b, 0)));
        this.Previous_Month_ITC_Arr = [this.gstr3bdata[i].ITC_CGST, this.gstr3bdata[i].ITC_SGST, this.gstr3bdata[i].ITC_IGST]
        this.gstr3b.Previous_Month_ITC = Math.round(Number(this.Previous_Month_ITC_Arr.reduce((a, b) => a + b, 0)));
        this.Late_Fees_Arr = [this.gstr3bdata[i].CGST_Late_Fees, this.gstr3bdata[i].SGST_Late_Fees]
        this.gstr3b.Late_Fees = Math.round(Number(this.Late_Fees_Arr.reduce((a, b) => a + b, 0)));
        this.Carried_Forward_Arr = [this.gstr3bdata[i].Carried_Forward_CGST, this.gstr3bdata[i].Carried_Forward_SGST]
        this.gstr3b.Carried_Forward = Math.round(Number(this.Carried_Forward_Arr.reduce((a, b) => a + b, 0)));
        this.gstr3b.CGST_to_CGST = this.gstr3bdata[i].CGST_to_CGST;
        this.gstr3b.CGST_to_IGST = this.gstr3bdata[i].CGST_to_IGST;
        this.gstr3b.IGST_to_CGST = this.gstr3bdata[i].IGST_to_CGST;
        this.gstr3b.IGST_to_IGST = this.gstr3bdata[i].IGST_to_IGST;
        this.gstr3b.IGST_to_SGST = this.gstr3bdata[i].IGST_to_SGST;
        this.gstr3b.SGST_to_IGST = this.gstr3bdata[i].SGST_to_IGST;
        this.gstr3b.SGST_to_SGST = this.gstr3bdata[i].SGST_to_SGST;

        this.str[i] = JSON.stringify(this.gstr3b);
          this.gstr3bdetails[i] = JSON.parse(this.str[i]);
          console.log(this.gstr3bdetails);

      }
    })
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}

