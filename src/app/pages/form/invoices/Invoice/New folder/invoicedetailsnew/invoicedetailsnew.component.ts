import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { addDivisions, Invoicedetails } from './invoicedetailsnew.model';

@Component({
  selector: 'app-invoicedetailsnew',
  templateUrl: './invoicedetailsnew.component.html',
  styleUrls: ['./invoicedetailsnew.component.scss']
})
export class InvoicedetailsnewComponent implements OnInit {


  invoicedetails = new Invoicedetails;
  error = new Invoicedetails;
  flatdetails =new Invoicedetails;
  flatdetails1=new Invoicedetails;
  companylistArr:any;
  saleslistArr:any;
  invoicestatusArr:any;
  clientlistArr : any;
  gstArr: any;
  cgst: any;
  value: any;
  data: any;
  flat_no: any;
  sales: any;
  newDivs: addDivisions[] = [];
  newDivs1: addDivisions[] = [];
  
  constructor(
    private dataservice:DataService,
    private route: Router,
    private Token:TokenService,
  

  ) {
    
   }


  ngOnInit(): void {
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

  getClientData(){
    this.dataservice.getClientdetails().subscribe(res=>{
      //console.log(res);
      this.clientlistArr = res;        
    })
  }

  submitInvoicedetails(){
    this.dataservice.registerinvoicedetails(this.invoicedetails).subscribe(
      data=>this.handleResponse(data),
    error=>this.handleError(error)
  );
  }

  
  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Invoice Details has been added.', 'success'); 
    this.route.navigateByUrl('/form/invoices/invoice/invoicedetailslist');
  }

   
  handleError(error){
    this.error = error.error.errors;
  }

  getState1(event){
    console.log(event.target.value);
    var compny_id = event.target.value;
    console.log(compny_id);
    this.dataservice.getCompanygst(compny_id).subscribe(res => {
    console.log(res);
    this.gstArr = res;
    this.invoicedetails.cgst = this.gstArr[0].cgst;
    this.value=this.invoicedetails.cgst.startsWith('27');
    //  this.monthvalueArr = res;
    //  this.data=res;
    //  this.monthv=this.data;
    //  var selectedOption = this.monthvalueArr[0].month_value;
    //  this.monthlysalary.month_value=this.monthvalueArr[0].month_value;
    //    console.log(this.salary[0].basic_pay);
   //           console.log(res);
    });
     }
  getState2(event){
    var client_id = event.target.value;
   this.dataservice.getsalesdetails(client_id).subscribe(res => {
      this.data = res;
      this.sales=res;
      console.log(res);
      for(var i=0; i < this.data.length; i++){
       this.flat_no[i] =  this.data[i].flat_no;
        }
        console.log(this.flat_no);
      });
    }


    
    getflatdetails(event){
    var flat_no = event.target.value;
    for(var i=0; i < this.sales.length; i++){
       if(flat_no == this.sales[i].flat_no){
           this.flatdetails = this.sales[i];
       }
      }
  }

  getflatdetails1(event){
    var flat_no = event.target.value;
    for(var i=0; i < this.sales.length; i++){
       if(flat_no == this.sales[i].flat_no){
           this.flatdetails1 = this.sales[i];
       }
      }
  }


  addNewDiv() {
    this.newDivs.push(new addDivisions());
  
    }
  
     get bmi() {
   if( this.value == true){
      var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
      this.invoicedetails.cgst_amt = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
     return  (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
    }
    else{
      var selectedOption = 0;
      this.invoicedetails.cgst_amt = 0;
      return 0;
    }
    }

    get bmi1() {
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

    get bmi2() {
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

    get bmi3() {
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


    get bmi4() {
    
      var selectedOption = Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
      this.invoicedetails.total_invoice_amt = Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
     return  Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
      
    }

    get bmi5() {
    
      var selectedOption = Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt);
      this.invoicedetails.receivable_amt = Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt);
     return  Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt);  
      
    }

    get bmi6() {
    
      var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(this.invoicedetails.tds_rate)) / 100;
      this.invoicedetails.receivable_tds_amt = (Number(this.invoicedetails.taxable_amt) * Number(this.invoicedetails.tds_rate)) / 100;
     return  (Number(this.invoicedetails.taxable_amt) * Number(this.invoicedetails.tds_rate)) / 100;
      
    }
    get bmi7() {
    
      var selectedOption = Number(this.invoicedetails.receivable_amt); 
      this.invoicedetails.due_amt = Number(this.invoicedetails.receivable_amt); 
     return  Number(this.invoicedetails.receivable_amt); 
      
    }
    get bmi8() {
    
      var selectedOption = Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt); 
      this.invoicedetails.suspense_amt = Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt); 
     return  Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt); 
      
    }
}


