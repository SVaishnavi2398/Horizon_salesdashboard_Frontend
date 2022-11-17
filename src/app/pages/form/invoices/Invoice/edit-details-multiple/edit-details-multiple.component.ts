import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { Invoicedetails,InvoiceInce,InvoiceInceS,AddInce,InceData } from '../invoice-details-multiple/invoice-details.multiple.model';

@Component({
  selector: 'app-edit-details-multiple',
  templateUrl: './edit-details-multiple.component.html',
  styleUrls: ['./edit-details-multiple.component.scss']
})
export class EditDetailsMultipleComponent implements OnInit {

  companylistArr :any;
  invoicedetails = new Invoicedetails;
  error = new Invoicedetails;
  invoice = new Invoicedetails;
  invoiceince = new InvoiceInce;
  addince = new AddInce;
  addince1 = new AddInce;
  incedata = new InceData;
  incedataC = new InceData;

  gstArr: any;
  clientsArr: any;
  form: FormGroup;
  data: any;
  sales = new Invoicedetails;
  empList : any[]=[];
  tax_amt: any[]=[];
  array: any[]=[];
  sales_id :any[]=[];
  flat_no :any[]=[];
  building_name:any[]=[];
  payout_value :any[]=[];
  consideration_value :any[]=[];
  taxable_amt:any[]=[];
  wing:any[]=[];
  booking_date :any;
  project_name :any[]=[];
  CGST: number;
  total_taxableamt: any;
  taxablearr: any;
  sumNumber: any;
  value: any;
  tax: any[]=[];
  received_amt:any[]=[];
  tds_rate:any[]=[];
  invoicestatusArr: any;
  data1: any;
  toastr: any;
  invoiceid: any;
  clientar: any;
  case_payout_percentage: any;
  invoice_multi_id: any;
  invoMultiInce: any;
  booking_datesplit1: any;
  LeadCount1: any;
  closinceAmt: any;
  LeadCount: any;
  closingData1: any;
  closingData: any;
  sourcingData: any;
  sourcingData1: any;
  sourInceAmt: any;
  cv_range: any[]=[];
  sourData: any;
  user_id: any[]=[];
  YearMonth: any;
  eligibility_ince: any;

  constructor(
    private dataservice:DataService,
    private route: Router,
    private Token:TokenService,
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.invoiceid=this.router.snapshot.params.id;
    this.form = new FormGroup({
      passenger: new FormArray([
        new FormGroup({
          taxable_amt: new FormControl(''),
          received_amt:new FormControl(''),
          tds_rate:new FormControl(''),
          case_payout_percentage:new FormControl('')
        })
      ])
    });
this.bmi();
  
    this.getCompanyData();
    this.getInvoicestatus();
    this.getInvoicedetails();
  }
  
  getInvoicestatus(){
    this.dataservice.getInvoiceStatus().subscribe(res=>{
      this.invoicestatusArr=res;
    })
  }

  
  getInvoicedetails(){
    this.dataservice.getOneInvoiceMultidetails(this.invoiceid).subscribe(res=>{
      this.data=res;
      this.clientar = this.data;
      console.log('data',this.clientar);
      console.log(this.data[0]);
      this.invoicedetails=this.data[0];
      this.invoicedetails.cgst=this.data[0].cgst;
      var selectedOption = this.invoicedetails.cgst;
  })
  }
  
  getCompanyData(){
    this.dataservice.getCompany().subscribe(res=>{
      this.companylistArr=res;
      
    })
  }

  getState1(event){
    var compny_id = event.target.value; 
    this.dataservice.getCompanygst(compny_id).subscribe(res => {
      this.gstArr = res;
      this.invoicedetails.cgst= this.gstArr[0].cgst;
      this.invoicedetails.company_id= this.gstArr[0].debtor_company_det_id;
      var selectedOption = this.invoicedetails.cgst;
      this.value=this.gstArr[0].cgst.startsWith('27');
      this.bmi();

    this.dataservice.getclientid(compny_id).subscribe(res => {
      this.clientsArr = res;
    })
  })
}

get passenger(): FormArray {
  return this.form.get('passenger') as FormArray;
}

addPassenger() {
  this.passenger.push(
    new FormGroup({
      taxable_amt: new FormControl(''),
      received_amt:new FormControl(''),
      tds_rate:new FormControl(''),
      case_payout_percentage:new FormControl('')

    })
  );
//console.log(this.passenger.value);
}


getState2(event){
  var client_id = event.target.value;
    this.dataservice.getsalesdetails(client_id).subscribe(res => {
    this.data = res;
    this.sales.client_id = client_id;
    this.sales= this.data;
    this.empList.push(this.sales);
      this.array = this.empList;
      
      for(var i=0; i<this.array.length; i++){
        this.project_name[i]= this.array[i][0].project_name;
        this.sales_id[i]= this.array[i][0].sales_id;
        this.flat_no[i]= (this.array[i][0].flat_no);
        this.wing[i]= (this.array[i][0].wing);
        this.booking_date[i]= (this.array[i][0].booking_date);
        this.building_name[i]= (this.array[i][0].building_name);
        this.payout_value[i]= (this.array[i][0].payout_value);
        this.case_payout_percentage[i] = (this.array[i][0].case_payout_percentage);
        this.consideration_value[i]= (this.array[i][0].consideration_value);
        this.taxable_amt[i] = (this.consideration_value[i] * this.payout_value[i]) / 100;
        
      }
      this.bmi();
    })
}
editRow(group: FormGroup) {
  group.get('isEditable').setValue(true);
}


getstate3(event){
   this.taxablearr =this.form.value;
   var amt = this.taxablearr.passenger;
   for(var i =0; i<amt.length; i++){
     this.tax_amt[i] = amt[i].taxable_amt;
   }
  this.bmi();
 }

 bmi() {
   for (var i=0; i<this.taxable_amt.length; i++){
       if(!(this.tax_amt[i])){
         this.tax[i]= this.taxable_amt[i];
       }
       else{
        this.tax[i]= this.tax_amt[i];
       }
   }

   
   this.invoicedetails.taxable_amt = this.tax.reduce((acc, cur) => acc + Number(cur), 0)
   this.bmi1();
  if(this.value == true){
     var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
     this.invoicedetails.cgst_amt = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
     this.invoicedetails.sgst_amt = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
     this.invoicedetails.igst_amt = 0;
     this.invoicedetails.total_gst_amt = Number(this.invoicedetails.cgst_amt) + Number(this.invoicedetails.sgst_amt);
     this.invoicedetails.total_invoice_amt = Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
     this.bmi1();
    // return  (Number(this.invoicedetails.sumNumber) * Number(9)) / 100;
   }
   else{
     var selectedOption = 0;
     this.invoicedetails.cgst_amt = 0;
     this.invoicedetails.sgst_amt = 0;
     this.invoicedetails.igst_amt = (Number(this.invoicedetails.taxable_amt) * Number(18)) / 100;
     this.invoicedetails.total_gst_amt = Number(this.invoicedetails.igst_amt);
     this.invoicedetails.total_invoice_amt = Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
     this.bmi1();
     return 0;
   }


   }

   getstate4(event){
     this.invoicedetails.tds_rate = event.target.value;
     this.bmi1();
   }

   getstate5(event){
    this.invoicedetails.received_amt = event.target.value;
    this.bmi1();
  }

  
  bmi1() {
    this.invoicedetails.due_amt = Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt);  
  }
  getstate6(event){
    this.invoicedetails.inv_status_id = event.target.value;
  }
  getstate7(event){
    this.invoicedetails.inv_submitted_date = event.target.value;
  }
  getstate8(event){
    this.invoicedetails.credit_note_amt = event.target.value;
  }
  getstate9(event){
    this.invoicedetails.invoice_num = event.target.value;
  }
  getstate10(event){
    this.invoicedetails.invoice_date = event.target.value;
  }

  UpdateInvoicedetails(){
    this.invoicedetails.taxable_amt=this.invoicedetails.taxable_amt;
    console.log(this.invoicedetails);
    this.dataservice.updateInvoicMultieDetails(this.invoiceid,this.invoicedetails).subscribe(res=>{
     // console.log('1',res); 
      this.data1= res;
      Swal.fire('Added!', 'Invoice Details has been Updated.', 'success'); 
      this.route.navigateByUrl('/form/invoices/invoice/invoicemultipledetailslist');
    })
    this.getInvoiceInceC();
    this.getInvoiceInceS();
  }

  handleResponse(data){
  
    if(data.client_id == this.invoice.client_id){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Invoice Details has been added.', 'success'); 
    this.route.navigateByUrl('/form/invoices/invoice/invoicemultipledetailslist');
    }
  }

   
  handleError(error){
    this.error = error.error.errors;
  }

  getInvoiceInceC(){

    this.invoice_multi_id = this.invoicedetails.invoice_multi_id;
    this.dataservice.getInvoiceMultiInce(this.invoice_multi_id).subscribe(res => {
      this.invoMultiInce = res[0];
      this.invoiceince.closing_emp_id = this.invoMultiInce.closing_emp_id;
      //this.booking_date=this.invoMultiInce.booking_date;
      this.booking_date = this.invoMultiInce.booking_date.split("-").map(item => item.trim());
      this.invoiceince.year = this.booking_date[0];
      this.invoiceince.month = this.booking_date[1];
      this.booking_datesplit1 = this.booking_date[0] + '-' + this.booking_date[1];
      this.invoiceince.booking_date=this.invoMultiInce.booking_date;
      console.log("invoice_multi_id new 21", this.invoiceince);
      this.dataservice.getInvoMultiInceD(this.invoiceince).subscribe(res => {
        console.log("data C", res);
      this.closingData1 = res;
      for (var i = 0; i < this.closingData1.length; i++) {
        this.incedataC.cv_range[i] = this.closingData1[i].cv_range;
        this.incedataC.booking_date=this.invoMultiInce.booking_date;
        
      }
      this.LeadCount1 = this.closingData1.length;
      console.log("this.LeadCount1", this.incedataC);
      this.closingData = res[0];
      
      this.dataservice.getClosInvoiceInce(this.incedataC).subscribe(res => {
        console.log("invoice_multi_id  new", res);
        this.closinceAmt = res;
        this.addince1.ai_closing_amt = this.closinceAmt;
        this.addince1.user_id = this.closingData.closing_emp_id;
        this.addince1.ai_closing_ince = this.LeadCount1;
        this.addince1.YearMonth = this.booking_datesplit1;
        console.log("data add", this.addince1);
        this.dataservice.updatemonthlyInceC3(this.addince1).subscribe(res => {
          console.log("data add", res);
        });
      });
      });
    });
  }
  getInvoiceInceS(){

    this.invoice_multi_id = this.invoicedetails.invoice_multi_id;
    console.log("invoice_multi_id new", this.invoice_multi_id);
    this.dataservice.getInvoiceMultiInce(this.invoice_multi_id).subscribe(res => {
      console.log("invoice_multi_id new 1", res);
      this.invoMultiInce = res[0];
      this.invoiceince.sourcing_emp_id = this.invoMultiInce.sourcing_emp_id;
      //this.booking_date=this.invoMultiInce.booking_date;
      this.booking_date = this.invoMultiInce.booking_date.split("-").map(item => item.trim());
      this.invoiceince.year = this.booking_date[0];
      this.invoiceince.month = this.booking_date[1];
      this.booking_datesplit1 = this.booking_date[0] + '-' + this.booking_date[1];
      this.invoiceince.booking_date=this.invoMultiInce.booking_date;
      console.log("invoice_multi_id new 21", this.invoiceince);
          this.dataservice.getInvoMultiInceS(this.invoiceince).subscribe(res => {
            console.log("data S", res);
            this.sourcingData =res[0];
            this.sourcingData1 =res;
            for (var j = 0; j < this.sourcingData1.length; j++) {
              this.incedata.cv_range[j] = this.sourcingData1[j].cv_range;
              this.incedata.booking_date=this.invoMultiInce.booking_date;
              
            }
            console.log("sourInceAmt", this.incedata.cv_range);
            this.LeadCount = this.sourcingData1.length;
            this.dataservice.getMonthlyInceData().subscribe(res => {
              this.sourData= res;
              for (var i = 0; i < this.sourData.length; i++) {
                this.user_id= this.sourData[i].user_id;
                this.YearMonth= this.sourData[i].YearMonth;
                this.eligibility_ince=this.sourData[i].eligibility_ince;
                if(this.YearMonth == this.booking_datesplit1 && this.user_id == this.invoMultiInce.sourcing_emp_id && this.eligibility_ince=="1"){
                  // console.log("Hello");
                  this.dataservice.getSourInvoiceInce(this.incedata).subscribe(res => {
                    console.log("sourInceAmt", res);
                    this.sourInceAmt = res;
      
                    this.addince.ai_sourcing_amt = this.sourInceAmt;
                    this.addince.user_id = this.sourcingData.sourcing_emp_id;
                    this.addince.ai_sourcing_ince = this.LeadCount;
                    this.addince.YearMonth = this.booking_datesplit1;
                    console.log("s data", this.addince);
                    this.dataservice.updatemonthlyInceS3(this.addince).subscribe(res => {
                      console.log("data add 1", res);
                    })
                 });
                }
              }
          });
        });
    });
  }


}
