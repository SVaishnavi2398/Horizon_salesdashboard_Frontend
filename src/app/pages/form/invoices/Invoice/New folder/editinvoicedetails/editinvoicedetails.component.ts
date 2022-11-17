import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Invoicedetails } from '../invoicedetailsnew/invoicedetailsnew.model';

@Component({
  selector: 'app-editinvoicedetails',
  templateUrl: './editinvoicedetails.component.html',
  styleUrls: ['./editinvoicedetails.component.scss']
})
export class EditinvoicedetailsComponent implements OnInit {

  invoiceid:any;
  data: any;
  invoicedetails = new Invoicedetails;
  companylistArr: any;
  saleslistArr: any;
  invoicestatusArr: any;
  clientlistArr : any;
  gstArr: any;
  cgst: any;
  value: any;
 
  constructor(
      private route:ActivatedRoute,
      private dataservice:DataService,
     // private router:Router
      private router: Router
  ) { }

  ngOnInit(): void {

    this.invoiceid=this.route.snapshot.params.id;
    this.getInvoicedetails();
    this.getCompanyData();
    this.getSalesdetails();
    this.getInvoicestatus();
    this.getClientData();

  }

  getCompanyData(){
    this.dataservice.getCompany().subscribe(res=>{
      this.companylistArr=res;
    })
  }

  getSalesdetails(){
    this.dataservice.getSalesdetails().subscribe(res=>{
      this.saleslistArr=res;
    })
  }

  getInvoicestatus(){
    this.dataservice.getInvoiceStatus().subscribe(res=>{
      this.invoicestatusArr=res;
    })
  }

  getInvoicedetails(){
    this.dataservice.getOneInvoicedetails(this.invoiceid).subscribe(res=>{
      console.log(res);
      this.data=res;
      this.invoicedetails=this.data[0];
     
  })
  }

  getClientData(){
    this.dataservice.getClientdetails().subscribe(res=>{
      //console.log(res);
      this.clientlistArr = res;        
    })
  }

  updateInvoicedetails(){
  this.dataservice.updateInvoiceDetails(this.invoiceid,this.invoicedetails).subscribe(res=>{
    Swal.fire('Updated!', 'Invoice Details has been updated.', 'success'); 
    this.router.navigate(['/form/invoices/invoice/invoicedetailslist']);
    })
  }

  getState1(event){
    console.log(event.target.value);
    var compny_id = event.target.value;
    console.log(compny_id);
    this.dataservice.getCompanygst(compny_id).subscribe(res => {
    console.log(res);
    this.gstArr = res;
    this.cgst = this.gstArr[0].cgst;
    this.value=this.cgst.startsWith('27');
    //  this.monthvalueArr = res;
    //  this.data=res;
    //  this.monthv=this.data;
    //  var selectedOption = this.monthvalueArr[0].month_value;
    //  this.monthlysalary.month_value=this.monthvalueArr[0].month_value;
    //    console.log(this.salary[0].basic_pay);
   //           console.log(res);
   this.bmi();
   this.bmi1();
   this.bmi2();
   this.bmi3();
   this.bmi4();
   this.bmi5();
   this.bmi6();
   this.bmi7();
    });
     }


    bmi() {
    
    if( this.value == true){
       var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
       this.invoicedetails.cgst_amt = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
       return  this.invoicedetails.cgst_amt;
     }
     else{
       var selectedOption = 0;
       this.invoicedetails.cgst_amt = 0;
       return 0;
     }
     }
 
     bmi1() {
       if( this.value == true){
       var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
       this.invoicedetails.sgst_amt = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
      return  (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
       }
       else{
         var selectedOption = 0;
         this.invoicedetails.sgst_amt = 0;
         return 0;
       }
     }
 
     bmi2() {
       if( this.value == false){
       var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(18)) / 100;
       this.invoicedetails.igst_amt = (Number(this.invoicedetails.taxable_amt) * Number(18)) / 100;
      return  (Number(this.invoicedetails.taxable_amt) * Number(18)) / 100;
       }
       else{
         var selectedOption = 0;
         this.invoicedetails.igst_amt = 0;
         return 0;
       }
     }
 
     bmi3() {
       if( this.value == true){
       var selectedOption = Number(this.invoicedetails.cgst_amt) + Number(this.invoicedetails.sgst_amt);
       this.invoicedetails.total_gst_amt = Number(this.invoicedetails.cgst_amt) + Number(this.invoicedetails.sgst_amt);
      return  Number(this.invoicedetails.cgst_amt) + Number(this.invoicedetails.sgst_amt);
       }
       else{
         var selectedOption = Number(this.invoicedetails.igst_amt) 
         this.invoicedetails.total_gst_amt =  Number(this.invoicedetails.igst_amt) 
        return  Number(this.invoicedetails.igst_amt) 
       }
     }
 
 
     bmi4() {
     
       var selectedOption = Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
       this.invoicedetails.total_invoice_amt = Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
       return  Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
       
     }
 
      bmi5() {
     
       var selectedOption = Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt);
       this.invoicedetails.receivable_amt = Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt);
       return  Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt);  
       
     }
 
      bmi6() {
     
       var selectedOption = (Number(this.invoicedetails.total_invoice_amt) * Number(this.invoicedetails.tds_rate)) / 100;
       this.invoicedetails.receivable_tds_amt = (Number(this.invoicedetails.total_invoice_amt) * Number(this.invoicedetails.tds_rate)) / 100;
       return  (Number(this.invoicedetails.total_invoice_amt) * Number(this.invoicedetails.tds_rate)) / 100;
       
     }
      bmi7() {
     
       var selectedOption = Number(this.invoicedetails.receivable_amt); 
       this.invoicedetails.due_amt = Number(this.invoicedetails.receivable_amt); 
       return  Number(this.invoicedetails.receivable_amt); 
       
     }
     bmi8() {
      console.log(this.invoicedetails.received_amt);
      var selectedOption = Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt); 
      this.invoicedetails.suspense_amt = Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt); 
       Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt); 
      console.log(Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt));
    }

}
