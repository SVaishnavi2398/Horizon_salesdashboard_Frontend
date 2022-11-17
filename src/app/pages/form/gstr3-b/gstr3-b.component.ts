import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { GSTR3B } from './gstr3b.model';

@Component({
  selector: 'app-gstr3-b',
  templateUrl: './gstr3-b.component.html',
  styleUrls: ['./gstr3-b.component.scss']
})
export class Gstr3BComponent implements OnInit {
  gstr3b = new GSTR3B;
  error = new GSTR3B;
  MonthArr: any;
  year: any;
  invmaha: any;
  invOutmaha: any;
  invmahadata: any;
  invOutmahadata: any;
  Total: any;
  inv_pur_InMaha: any;
  inv_pur_outMaha: any;
  sales_IGST_OutMaha: any;
  // sales_rate_InMaha: any;
  constructor(
    private dataservice: DataService,
    private route:ActivatedRoute,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.getMonth();
    this.gstr3b.sales_rate_InMaha = 0;
    this.gstr3b.sales_rate_InMaha = 0;
    this.gstr3b.sales_basic_InMaha = 0;
    this.gstr3b.sales_CGST_InMaha = 0;
    this.gstr3b.sales_SGST_InMaha = 0;
    this.gstr3b.sales_IGST_InMaha = 0;
    this.gstr3b.sales_rate_OutMaha = 0;
    this.gstr3b.sales_CGST_Total = 0;
    this.gstr3b.sales_SGST_Total = 0;
    this.gstr3b.sales_IGST_Total = 0;
    this.gstr3b.sales_basic_RCM = 0;
    this.gstr3b.sales_CGST_RCM = 0;
    this.gstr3b.sales_SGST_RCM = 0;
    this.gstr3b.sales_IGST_RCM = 0;
    this.gstr3b.sales_basic_Amendment = 0;
    this.gstr3b.sales_CGST_Amendment = 0;
    this.gstr3b.sales_SGST_Amendment = 0;
    this.gstr3b.sales_IGST_Amendment = 0;
    this.gstr3b.pur_inMhBs_18 = 0;
    this.gstr3b.pur_OutMhC_18 = 0;
    this.gstr3b.pur_OutMhC_12 = 0;
    this.gstr3b.pur_OutMhC_5 = 0;
    this.gstr3b.pur_OutMhS_18 = 0;
    this.gstr3b.pur_OutMhS_12 = 0;
    this.gstr3b.pur_OutMhS_5 = 0;
    this.gstr3b.pur_inMhBs_12 = 0;
    this.gstr3b.pur_inMhBs_5 = 0;
    this.gstr3b.pur_OutMhBs_18 = 0;
    this.gstr3b.pur_OutMhBs_12 = 0;
    this.gstr3b.pur_OutMhBs_5 = 0;
    this.gstr3b.purc_basic_Amendment = 0;
    this.gstr3b.purc_CGST_Amendment = 0;
    this.gstr3b.purc_SGST_Amendment = 0;
    this.gstr3b.pur_inMhC_18 = 0;
    this.gstr3b.pur_inMhC_12 = 0;
    this.gstr3b.pur_inMhC_5 = 0;
    this.gstr3b.pur_inMhS_18 = 0;
    this.gstr3b.pur_inMhS_12 = 0;
    this.gstr3b.pur_inMhS_5 = 0;
    this.gstr3b.pur_OutMhI_18 = 0;
    this.gstr3b.pur_OutMhI_12 = 0;
    this.gstr3b.pur_OutMhI_5 = 0;
    this.gstr3b.purc_IGST_Amendment = 0;
    this.gstr3b.purc_CGST_InMhPurc = 0;
    this.gstr3b.purc_SGST_InMhPurc = 0;
    this.gstr3b.purc_CGST_OutMhPurc = 0;
    this.gstr3b.purc_SGST_OutMhPurc = 0;
    this.gstr3b.purc_CGST_expenses = 0;
    this.gstr3b.purc_SGST_expenses = 0;
    this.gstr3b.sales_IGST_OutMaha = 0;
    this.gstr3b.sales_basic_OutMaha = 0;
    this.gstr3b.payout_percentage = 0;
    this.gstr3b.ITC_Basic = 0;
    this.gstr3b.ITC_CGST = 0;
    this.gstr3b.ITC_SGST = 0;
    this.gstr3b.ITC_IGST = 0;
    this.gstr3b.IGST_to_IGST = 0;
    this.gstr3b.CGST_Balance_Liability = 0;
    this.gstr3b.IGST_Balance_Liability = 0;
    this.gstr3b.SGST_to_IGST = 0;
    this.gstr3b.CGST_Late_Fees = 0;
    this.gstr3b.sales_basic_OutMaha_18 = 0;
    this.gstr3b.sales_basic_OutMaha_12 = 0;
    this.gstr3b.sales_CGST_OutMaha_18 = 0;
    this.gstr3b.sales_CGST_OutMaha_12 = 0;
    this.gstr3b.sales_CGST_OutMaha_5 = 0;
    this.gstr3b.sales_SGST_OutMaha_18 = 0;
    this.gstr3b.sales_SGST_OutMaha_12 = 0;
    this.gstr3b.sales_SGST_OutMaha_5 = 0;
    this.gstr3b.sales_IGST_OutMaha_18 = 0;
    this.gstr3b.sales_IGST_OutMaha_12 = 0;
    this.gstr3b.sales_IGST_OutMaha_5 = 0;
    this.gstr3b.SGST_Balance_Liability = 0;
    this.gstr3b.SGST_to_SGST = 0;
    this.gstr3b.SGST_Late_Fees = 0;
    this.gstr3b.IGST_Balance_Liability = 0;
    this.gstr3b.pur_CGST_total = 0;
    this.gstr3b.Carried_Forward_CGST = 0;
    this.gstr3b.Carried_Forward_SGST = 0;
    this.gstr3b.CGST_to_CGST = 0;
    this.gstr3b.Pre_year_adj_CGST = 0;
    this.gstr3b.Pre_year_adj_SGST = 0;
    this.gstr3b.Pre_year_adj_IGST = 0;
    this.gstr3b.CGST_to_IGST = 0;
    this.gstr3b.pur_IGST_total = 0;
    this.gstr3b.purc_RCM_CGST = 0;
    this.gstr3b.purc_RCM_SGST = 0;
    this.gstr3b.purc_RCM_IGST = 0;
  }

  gstr_b2List() {
    this.dataservice.get_sales_InMaha(this.gstr3b).subscribe(res => {

      this.invmaha = res;
      this.invmahadata = this.invmaha[0];
      console.log(this.invmahadata);
      this.dataservice.get_sales_OutMaha(this.gstr3b).subscribe(res => {
        this.invOutmaha = res;
        this.dataservice.get_pur_InMaha(this.gstr3b).subscribe(res => {
          this.inv_pur_InMaha = res;

          this.dataservice.get_pur_OutMaha(this.gstr3b).subscribe(res => {
            this.inv_pur_outMaha = res;

            // console.log(this.inv_pur_outMaha);
            this.gstr3b.month_year = this.gstr3b.month +'-'+this.gstr3b.year;
            this.gstr3b.sales_rate_InMaha = this.invmahadata.in_payout_percentage;
            this.gstr3b.sales_basic_InMaha = Math.round(Number(this.invmahadata.in_taxable_total));
            this.gstr3b.sales_CGST_InMaha = Math.round(Number(this.invmahadata.in_ctotal));
            this.gstr3b.sales_SGST_InMaha = Math.round(Number(this.invmahadata.in_stotal));
            this.gstr3b.sales_IGST_InMaha = Math.round(Number(this.invmahadata.in_itotal));
            if(this.invOutmaha.length != 0){

            
              for (var k = 0; k < this.invOutmaha.length; k++) {
  
                if (this.invOutmaha[k].payout_percentage == '18') {
  
                  this.gstr3b.sales_rate_OutMaha_18 = this.invOutmaha[k].payout_percentage;
                  this.gstr3b.sales_basic_OutMaha_18 = Math.round(Number(this.invOutmaha[k].taxable_total));
                  this.gstr3b.sales_IGST_OutMaha_18 = Math.round(Number(this.invOutmaha[k].itotal));
  
                }
                if (this.invOutmaha[k].payout_percentage == '12') {
  
                  this.gstr3b.sales_rate_OutMaha_12 = this.invOutmaha[k].payout_percentage;
                  this.gstr3b.sales_basic_OutMaha_12 = Math.round(Number(this.invOutmaha[k].taxable_total));
                  this.gstr3b.sales_IGST_OutMaha_12 = Math.round(Number(this.invOutmaha[k].itotal));
  
                }
                if (this.invOutmaha[k].payout_percentage == '5') {
  
                  this.gstr3b.sales_rate_OutMaha_5 = this.invOutmaha[k].payout_percentage;
                  this.gstr3b.sales_basic_OutMaha_5 = Math.round(Number(this.invOutmaha[k].taxable_total));
                  this.gstr3b.sales_IGST_OutMaha_5 = Math.round(Number(this.invOutmaha[k].itotal));
  
                }
              }
              
  
              
            }
            for (var i = 0; i < this.inv_pur_InMaha.length; i++) {

              if (this.inv_pur_InMaha[i].in_rate == '18.00%') {
                this.gstr3b.pur_inMhRt_18 = this.inv_pur_InMaha[i].in_rate;
                this.gstr3b.pur_inMhBs_18 = Math.round(Number(this.inv_pur_InMaha[i].in_taxable_total));
                this.gstr3b.pur_inMhC_18 = Math.round(Number(this.inv_pur_InMaha[i].in_central));
                this.gstr3b.pur_inMhS_18 = Math.round(Number(this.inv_pur_InMaha[i].in_sta));

              }
              if (this.inv_pur_InMaha[i].in_rate == '12.00%') {
                this.gstr3b.pur_inMhRt_12 = this.inv_pur_InMaha[i].in_rate;
                this.gstr3b.pur_inMhBs_12 = Math.round(Number(this.inv_pur_InMaha[i].in_taxable_total));
                this.gstr3b.pur_inMhC_12 = Math.round(Number(this.inv_pur_InMaha[i].in_central));
                this.gstr3b.pur_inMhS_12 = Math.round(Number(this.inv_pur_InMaha[i].in_sta));

              }
              if (this.inv_pur_InMaha[i].in_rate == '5.00%') {
                this.gstr3b.pur_inMhRt_5 = this.inv_pur_InMaha[i].in_rate;
                this.gstr3b.pur_inMhBs_5 = Math.round(Number(this.inv_pur_InMaha[i].in_taxable_total));
                this.gstr3b.pur_inMhC_5 = Math.round(Number(this.inv_pur_InMaha[i].in_central));
                this.gstr3b.pur_inMhS_5 = Math.round(Number(this.inv_pur_InMaha[i].in_sta));

              }
            }
            for (var j = 0; j < this.inv_pur_outMaha.length; j++) {

              if (this.inv_pur_outMaha[j].out_rate == '18.00%') {
                this.gstr3b.pur_OutMhRt_18 = this.inv_pur_outMaha[j].out_rate;
                this.gstr3b.pur_OutMhBs_18 = Math.round(Number(this.inv_pur_outMaha[j].out_taxable_total));
                this.gstr3b.pur_OutMhI_18 = Math.round(Number(this.inv_pur_outMaha[j].out_int));

              }
              if (this.inv_pur_outMaha[j].out_rate == '12.00%') {
                this.gstr3b.pur_OutMhRt_12 = this.inv_pur_outMaha[j].out_rate;
                this.gstr3b.pur_OutMhBs_12 = Math.round(Number(this.inv_pur_outMaha[j].out_taxable_total));
                this.gstr3b.pur_OutMhI_12 = Math.round(Number(this.inv_pur_outMaha[j].out_int));
              }
              if (this.inv_pur_outMaha[j].out_rate == '5.00%') {
                this.gstr3b.pur_OutMhRt_5 = this.inv_pur_outMaha[j].out_rate;
                this.gstr3b.pur_OutMhBs_5 = Math.round(Number(this.inv_pur_outMaha[j].out_taxable_total));
                this.gstr3b.pur_OutMhI_5 = Math.round(Number(this.inv_pur_outMaha[j].out_int));

              }
            }        
            console.log(this.gstr3b);
          })
        })
      })
    })

  }

 
  get bmi() {

    var selectedOption = Number(this.gstr3b.sales_basic_InMaha) + Number(this.gstr3b.sales_basic_OutMaha_18)+ Number(this.gstr3b.sales_basic_OutMaha_12) + Number(this.gstr3b.sales_basic_RCM) + Number(this.gstr3b.sales_basic_Amendment);
    this.gstr3b.sales_Basic_Total = Number(this.gstr3b.sales_basic_InMaha) + Number(this.gstr3b.sales_basic_OutMaha_18)+ Number(this.gstr3b.sales_basic_OutMaha_12) + Number(this.gstr3b.sales_basic_RCM) + Number(this.gstr3b.sales_basic_Amendment);
    return Number(this.gstr3b.sales_basic_InMaha) + Number(this.gstr3b.sales_basic_OutMaha_18) + Number(this.gstr3b.sales_basic_OutMaha_12) + Number(this.gstr3b.sales_basic_RCM) + Number(this.gstr3b.sales_basic_Amendment);
  }
  get bmi1() {
    var selectedOption = Number(this.gstr3b.sales_CGST_InMaha) + Number(this.gstr3b.sales_CGST_RCM) + Number(this.gstr3b.sales_CGST_Amendment) + Number(this.gstr3b.sales_CGST_OutMaha_18) + Number(this.gstr3b.sales_CGST_OutMaha_12) + Number(this.gstr3b.sales_CGST_OutMaha_5);
    this.gstr3b.sales_CGST_Total = Number(this.gstr3b.sales_CGST_InMaha) + Number(this.gstr3b.sales_CGST_RCM) + Number(this.gstr3b.sales_CGST_Amendment) + Number(this.gstr3b.sales_CGST_OutMaha_18) + Number(this.gstr3b.sales_CGST_OutMaha_12) + Number(this.gstr3b.sales_CGST_OutMaha_5);
    return Number(this.gstr3b.sales_CGST_InMaha) + Number(this.gstr3b.sales_CGST_RCM) + Number(this.gstr3b.sales_CGST_Amendment) + Number(this.gstr3b.sales_CGST_OutMaha_18) + Number(this.gstr3b.sales_CGST_OutMaha_12) + Number(this.gstr3b.sales_CGST_OutMaha_5);
  }
  get bmi2() {
    var selectedOption = Number(this.gstr3b.sales_SGST_InMaha) + Number(this.gstr3b.sales_SGST_RCM) + Number(this.gstr3b.sales_SGST_Amendment)+ Number(this.gstr3b.sales_SGST_OutMaha_18) + Number(this.gstr3b.sales_SGST_OutMaha_12) + Number(this.gstr3b.sales_SGST_OutMaha_5);
    this.gstr3b.sales_SGST_Total = Number(this.gstr3b.sales_SGST_InMaha) + Number(this.gstr3b.sales_SGST_RCM) + Number(this.gstr3b.sales_SGST_Amendment) + Number(this.gstr3b.sales_SGST_OutMaha_18) + Number(this.gstr3b.sales_SGST_OutMaha_12) + Number(this.gstr3b.sales_SGST_OutMaha_5);

    return Number(this.gstr3b.sales_SGST_InMaha) + Number(this.gstr3b.sales_SGST_RCM) + Number(this.gstr3b.sales_SGST_Amendment) + Number(this.gstr3b.sales_SGST_OutMaha_18) + Number(this.gstr3b.sales_SGST_OutMaha_12) + Number(this.gstr3b.sales_SGST_OutMaha_5);
  }
  get bmi3() {

    var selectedOption = Number(this.gstr3b.sales_IGST_InMaha) + Number(this.gstr3b.sales_IGST_OutMaha) + Number(this.gstr3b.sales_IGST_RCM) + Number(this.gstr3b.sales_IGST_Amendment) + Number(this.gstr3b.sales_IGST_OutMaha_18) + Number(this.gstr3b.sales_IGST_OutMaha_12) + Number(this.gstr3b.sales_IGST_OutMaha_5);
    this.gstr3b.sales_IGST_Total = Number(this.gstr3b.sales_IGST_InMaha) + Number(this.gstr3b.sales_IGST_OutMaha) + Number(this.gstr3b.sales_IGST_RCM) + Number(this.gstr3b.sales_IGST_Amendment) + Number(this.gstr3b.sales_IGST_OutMaha_18) + Number(this.gstr3b.sales_IGST_OutMaha_12) + Number(this.gstr3b.sales_IGST_OutMaha_5);

    return Number(this.gstr3b.sales_IGST_InMaha) + Number(this.gstr3b.sales_IGST_OutMaha) + Number(this.gstr3b.sales_IGST_RCM) + Number(this.gstr3b.sales_IGST_Amendment) + Number(this.gstr3b.sales_IGST_OutMaha_18) + Number(this.gstr3b.sales_IGST_OutMaha_12) + Number(this.gstr3b.sales_IGST_OutMaha_5);
  }
  get bmi4() {
    var selectedOption = Number(this.gstr3b.pur_inMhBs_18) + Number(this.gstr3b.pur_inMhBs_12) + Number(this.gstr3b.pur_inMhBs_5) + Number(this.gstr3b.pur_OutMhBs_18) + Number(this.gstr3b.pur_OutMhBs_12) + Number(this.gstr3b.pur_OutMhBs_5) + Number(this.gstr3b.purc_basic_Amendment) + Number(this.gstr3b.ITC_Basic);
    this.gstr3b.pur_basic_total = Number(this.gstr3b.pur_inMhBs_18) + Number(this.gstr3b.pur_inMhBs_12) + Number(this.gstr3b.pur_inMhBs_5) + Number(this.gstr3b.pur_OutMhBs_18) + Number(this.gstr3b.pur_OutMhBs_12) + Number(this.gstr3b.pur_OutMhBs_5) + Number(this.gstr3b.purc_basic_Amendment) + Number(this.gstr3b.ITC_Basic);
    return Number(this.gstr3b.pur_inMhBs_18) + Number(this.gstr3b.pur_inMhBs_12) + Number(this.gstr3b.pur_inMhBs_5) + Number(this.gstr3b.pur_OutMhBs_18) + Number(this.gstr3b.pur_OutMhBs_12) + Number(this.gstr3b.pur_OutMhBs_5) + Number(this.gstr3b.purc_basic_Amendment) + Number(this.gstr3b.ITC_Basic);
  }
  get bmi5() {
    var selectedOption = Number(this.gstr3b.pur_inMhC_18) + Number(this.gstr3b.pur_inMhC_12) + Number(this.gstr3b.pur_inMhC_5) + Number(this.gstr3b.purc_CGST_Amendment) + Number(this.gstr3b.purc_CGST_InMhPurc) + Number(this.gstr3b.purc_CGST_OutMhPurc) + Number(this.gstr3b.purc_CGST_expenses) + Number(this.gstr3b.ITC_CGST) + Number(this.gstr3b.Pre_year_adj_CGST) + Number(this.gstr3b.purc_RCM_CGST);
    this.gstr3b.pur_CGST_total = Number(this.gstr3b.pur_inMhC_18) + Number(this.gstr3b.pur_inMhC_12) + Number(this.gstr3b.pur_inMhC_5) + Number(this.gstr3b.purc_CGST_Amendment) + Number(this.gstr3b.purc_CGST_InMhPurc) + Number(this.gstr3b.purc_CGST_OutMhPurc) + Number(this.gstr3b.purc_CGST_expenses) + Number(this.gstr3b.ITC_CGST)+ Number(this.gstr3b.Pre_year_adj_CGST)+ Number(this.gstr3b.purc_RCM_CGST);
    this.gstr3b.CGST_to_CGST = this.gstr3b.pur_CGST_total;
    return Number(this.gstr3b.pur_inMhC_18) + Number(this.gstr3b.pur_inMhC_12) + Number(this.gstr3b.pur_inMhC_5) + Number(this.gstr3b.purc_CGST_Amendment) + Number(this.gstr3b.purc_CGST_InMhPurc) + Number(this.gstr3b.purc_CGST_OutMhPurc) + Number(this.gstr3b.purc_CGST_expenses) + Number(this.gstr3b.ITC_CGST) + Number(this.gstr3b.Pre_year_adj_CGST) + Number(this.gstr3b.purc_RCM_CGST);
  }
  get bmi6() {
    var selectedOption = Number(this.gstr3b.pur_inMhS_18) + Number(this.gstr3b.pur_inMhS_12) + Number(this.gstr3b.pur_inMhS_5) + Number(this.gstr3b.purc_SGST_Amendment) + Number(this.gstr3b.ITC_SGST) + Number(this.gstr3b.Pre_year_adj_SGST) + Number(this.gstr3b.purc_RCM_SGST);
    this.gstr3b.pur_SGST_total = Number(this.gstr3b.pur_inMhS_18) + Number(this.gstr3b.pur_inMhS_12) + Number(this.gstr3b.pur_inMhS_5) + Number(this.gstr3b.purc_SGST_Amendment)+ Number(this.gstr3b.ITC_SGST)+ Number(this.gstr3b.Pre_year_adj_SGST) + Number(this.gstr3b.purc_RCM_SGST);
    this.gstr3b.SGST_to_SGST = this.gstr3b.pur_SGST_total;
     return Number(this.gstr3b.pur_inMhS_18) + Number(this.gstr3b.pur_inMhS_12) + Number(this.gstr3b.pur_inMhS_5) + Number(this.gstr3b.purc_SGST_Amendment)+ Number(this.gstr3b.ITC_SGST) + Number(this.gstr3b.Pre_year_adj_SGST) + Number(this.gstr3b.purc_RCM_SGST);
  }
  get bmi7() {
    var selectedOption = Number(this.gstr3b.pur_OutMhI_18) + Number(this.gstr3b.pur_OutMhI_12) + Number(this.gstr3b.pur_OutMhI_5) + Number(this.gstr3b.purc_IGST_Amendment)+ Number(this.gstr3b.ITC_IGST) + Number(this.gstr3b.Pre_year_adj_IGST) + Number(this.gstr3b.purc_RCM_IGST);
    this.gstr3b.pur_IGST_total = Number(this.gstr3b.pur_OutMhI_18) + Number(this.gstr3b.pur_OutMhI_12) + Number(this.gstr3b.pur_OutMhI_5) + Number(this.gstr3b.purc_IGST_Amendment) + Number(this.gstr3b.ITC_IGST) + Number(this.gstr3b.Pre_year_adj_IGST) + Number(this.gstr3b.purc_RCM_IGST);

    return Number(this.gstr3b.pur_OutMhI_18) + Number(this.gstr3b.pur_OutMhI_12) + Number(this.gstr3b.pur_OutMhI_5) + Number(this.gstr3b.purc_IGST_Amendment) + Number(this.gstr3b.ITC_IGST) + Number(this.gstr3b.Pre_year_adj_IGST) + Number(this.gstr3b.purc_RCM_IGST);

  }
  get bmi8() {
    var selectedOption = (Number(this.gstr3b.sales_IGST_Total) - Number(this.gstr3b.pur_IGST_total)) / 2;
    this.gstr3b.IGST_to_CGST = (Number(this.gstr3b.pur_IGST_total) - Number(this.gstr3b.sales_IGST_Total)) / 2;
    this.gstr3b.IGST_to_SGST = (Number(this.gstr3b.pur_IGST_total) - Number(this.gstr3b.sales_IGST_Total)) / 2;
    return (Number(this.gstr3b.pur_IGST_total) - Number(this.gstr3b.sales_IGST_Total)) / 2;
  }
  get bmi9() {
     var selectedOption = Number(this.gstr3b.sales_CGST_Total) - (Number(this.gstr3b.IGST_to_CGST) + Number(this.gstr3b.IGST_to_IGST));
    this.gstr3b.CGST_Balance_Liability = Number(this.gstr3b.sales_CGST_Total) - (Number(this.gstr3b.IGST_to_CGST) + Number(this.gstr3b.IGST_to_IGST));
    return Number(this.gstr3b.sales_CGST_Total) - (Number(this.gstr3b.IGST_to_CGST) + Number(this.gstr3b.IGST_to_IGST));
  }

  get bmi_SBL() {
    var selectedOption = Number(this.gstr3b.sales_SGST_Total) - (Number(this.gstr3b.IGST_to_SGST) + Number(this.gstr3b.IGST_to_IGST));
   this.gstr3b.SGST_Balance_Liability = Number(this.gstr3b.sales_SGST_Total) - (Number(this.gstr3b.IGST_to_SGST) + Number(this.gstr3b.IGST_to_IGST));
   return Number(this.gstr3b.sales_SGST_Total) - (Number(this.gstr3b.IGST_to_SGST) + Number(this.gstr3b.IGST_to_IGST));
 }

 get bmi_CFL() {
  var selectedOption = Number(this.gstr3b.CGST_Balance_Liability) - (Number(this.gstr3b.CGST_to_CGST) + Number(this.gstr3b.SGST_to_IGST)) + Number(this.gstr3b.CGST_Late_Fees) + Number(this.gstr3b.sales_CGST_RCM);
 this.gstr3b.CGST_Final_Liability = Number(this.gstr3b.CGST_Balance_Liability) - (Number(this.gstr3b.CGST_to_CGST) + Number(this.gstr3b.SGST_to_IGST)) + Number(this.gstr3b.CGST_Late_Fees) + Number(this.gstr3b.sales_CGST_RCM);
 return Number(this.gstr3b.CGST_Balance_Liability) - (Number(this.gstr3b.CGST_to_CGST) + Number(this.gstr3b.SGST_to_IGST)) + Number(this.gstr3b.CGST_Late_Fees) + Number(this.gstr3b.sales_CGST_RCM);
}

get bmi_SFL() {
  var selectedOption = Number(this.gstr3b.SGST_Balance_Liability) - (Number(this.gstr3b.SGST_to_SGST) + Number(this.gstr3b.SGST_to_IGST)) + Number(this.gstr3b.SGST_Late_Fees) + Number(this.gstr3b.sales_SGST_RCM);
  this.gstr3b.SGST_Final_Liability = Number(this.gstr3b.SGST_Balance_Liability) - (Number(this.gstr3b.SGST_to_SGST) + Number(this.gstr3b.SGST_to_IGST)) + Number(this.gstr3b.SGST_Late_Fees) + Number(this.gstr3b.sales_SGST_RCM);
  return Number(this.gstr3b.SGST_Balance_Liability) - (Number(this.gstr3b.SGST_to_SGST) + Number(this.gstr3b.SGST_to_IGST)) + Number(this.gstr3b.SGST_Late_Fees) + Number(this.gstr3b.sales_SGST_RCM);
}

get bmi_IBL(){
  var selectedOption = Number(this.gstr3b.sales_IGST_Total) - (Number(this.gstr3b.IGST_to_IGST));
  this.gstr3b.IGST_Balance_Liability = Number(this.gstr3b.sales_IGST_Total) - (Number(this.gstr3b.IGST_to_IGST));
  return Number(this.gstr3b.sales_IGST_Total) - (Number(this.gstr3b.IGST_to_IGST));

}

get bmi_IFL(){
  var selectedOption = Number(this.gstr3b.IGST_Balance_Liability) - (Number(this.gstr3b.CGST_to_CGST) + Number(this.gstr3b.SGST_to_IGST));
  this.gstr3b.IGST_Balance_Liability = Number(this.gstr3b.IGST_Balance_Liability) - (Number(this.gstr3b.CGST_to_CGST) + Number(this.gstr3b.SGST_to_IGST));
  return Number(this.gstr3b.IGST_Balance_Liability) - (Number(this.gstr3b.CGST_to_CGST) + Number(this.gstr3b.SGST_to_IGST));
}

get bmi_CFC(){
  var selectedOption = Number(this.gstr3b.pur_CGST_total) - Number(this.gstr3b.CGST_to_CGST) - Number(this.gstr3b.CGST_to_IGST);
  this.gstr3b.Carried_Forward_CGST = Number(this.gstr3b.pur_CGST_total) - Number(this.gstr3b.CGST_to_CGST) - Number(this.gstr3b.CGST_to_IGST);
  return Number(this.gstr3b.pur_CGST_total) - Number(this.gstr3b.CGST_to_CGST) - Number(this.gstr3b.CGST_to_IGST);
}

get bmi_CFS(){
  var selectedOption = Number(this.gstr3b.pur_SGST_total) - Number(this.gstr3b.SGST_to_SGST) - Number(this.gstr3b.SGST_to_IGST);
  this.gstr3b.Carried_Forward_SGST =  Number(this.gstr3b.pur_SGST_total) - Number(this.gstr3b.SGST_to_SGST) - Number(this.gstr3b.SGST_to_IGST);
  return  Number(this.gstr3b.pur_SGST_total) - Number(this.gstr3b.SGST_to_SGST) - Number(this.gstr3b.SGST_to_IGST);
}

// get bmi_CFI(){
//   var selectedOption = Number(this.gstr3b.pur_IGST_total) - Number(this.gstr3b.IGST_to_IGST) - Number(this.gstr3b.IGST_to_IGST);
//   this.gstr3b.Carried_Forward_IGST =   Number(this.gstr3b.pur_IGST_total) - Number(this.gstr3b.IGST_to_IGST) - Number(this.gstr3b.IGST_to_IGST);
//   return   Number(this.gstr3b.pur_IGST_total) - Number(this.gstr3b.IGST_to_IGST) - Number(this.gstr3b.IGST_to_IGST);
// }
  getMonth() {
    this.dataservice.getAllmonth().subscribe(res => {
      this.MonthArr = res;
    })
  }

  addToGstr3b(){
    
    this.dataservice.addToGstr3B(this.gstr3b).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    
  }

  handleResponse(data: any){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Report Generated Successfully',
      showConfirmButton: false,
      timer: 1500,
    })
    this.router.navigate(['/form/gstr3BDetails']);
  }

  handleError(error: any) {
    this.error = error.error.errors;
    //console.log(this.error.Type);
  }


}
