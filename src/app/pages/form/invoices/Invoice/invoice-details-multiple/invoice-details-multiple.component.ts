import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { Invoicedetails, InvoiceInce, InvoiceInceS, AddInce,InceData } from './invoice-details.multiple.model';

@Component({
  selector: 'app-invoice-details-multiple',
  templateUrl: './invoice-details-multiple.component.html',
  styleUrls: ['./invoice-details-multiple.component.scss']
})
export class InvoiceDetailsMultipleComponent implements OnInit {

  companylistArr: any;
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
  form1: any[] = [];
  empList: any[] = [];
  tax_amt: any[] = [];
  array: any[] = [];
  sales_id: any[] = [];
  flat_no: any[] = [];
  building_name: any[] = [];
  payout_value: any[] = [];
  consideration_value: any[] = [];
  taxable_amt: any[] = [];
  wing: any[] = [];
  booking_date: any[] = [];
  project_name: any[] = [];
  company_id:any[] = [];
  CGST: number;
  total_taxableamt: any;
  taxablearr: any;
  sumNumber: any;
  value: any;
  tax: any[] = [];
  received_amt: any[] = [];
  tds_rate: any[] = [];
  invoicestatusArr: any;
  toastr: any;
  case_payout_percentage: any[] = [];
  check: any[] = [];
  case_payout: any;
  tds = new Invoicedetails;
  IGST: any;
  SGST: any;
  TDS_rate: any;
  taxa_amt: any;
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
  sourData: any;
  user_id: any;
  eligibility_ince: any;
  YearMonth: any;
  value1: any[];
  DataSource:any;
  newarray1:any[]=[];
  newclient:any[]=[];
  constructor(
    private dataservice: DataService,
    private route: Router,
    private Token: TokenService,
  ) { }

  ngOnInit(): void {
   
    this.form = new FormGroup({
      
      passenger: new FormArray([
        
        new FormGroup({
          taxable_amt: new FormControl(''),
          received_amt: new FormControl(''),
          tds_rate: new FormControl(''),
          case_payout_percentage: new FormControl(''),
          client_id:new FormControl(''),
          company_id :new FormControl('')
        })
      
      
      ])  
    });

   
    this.bmi();
    this.gettdsrate();
    this.getCompanyData();
    this.getInvoicestatus();
    
    
  }

  getInvoicestatus() {
    this.dataservice.getInvoiceStatus().subscribe(res => {
      this.invoicestatusArr = res;
    })
   
   
    
  }

  gettdsrate() {
    this.dataservice.gettdsrate().subscribe(res => {
      this.data = res;
      this.tds = this.data;
      this.CGST = this.tds[0].CGST;
      this.SGST = this.tds[0].SGST;
      this.IGST = this.tds[0].IGST;
      this.invoicedetails.tds_rate = this.tds[0].TDS_rate;
      
    })
  }

  getCompanyData() {
    this.dataservice.getCompany().subscribe(res => {
      this.companylistArr = res;

    })
  }

  getState1(event) {
    console.log('event',event.target.value);
    var compny_id = event.target.value;
    this.invoicedetails.company_id = compny_id;
    this.dataservice.getCompanygst(compny_id).subscribe(res => {
      this.gstArr = res;
      this.invoicedetails.cgst = this.gstArr[0].cgst;
      this.invoicedetails.company_id = this.gstArr[0].debtor_company_det_id;
      var selectedOption = this.invoicedetails.cgst;
      if (this.gstArr[0].cgst != null) {
        this.value = this.gstArr[0].cgst.startsWith('27');
      }
      else {
        this.value = true;
      }
      this.bmi();
      console.log(compny_id);
      this.dataservice.getclientid(compny_id).subscribe(res => {
        this.clientsArr = res;
        console.log('clientarry',res);
      })
    })

   
  }

  get passenger(): FormArray {
    
    return this.form.get('passenger') as FormArray;
    
  }

  addPassenger() {

    console.log('FormArray',FormArray);

    this.passenger.push(
      new FormGroup({
        
        taxable_amt: new FormControl(''),
        received_amt: new FormControl(''),
        tds_rate: new FormControl(''),
        case_payout_percentage: new FormControl(''),
        client_id:new FormControl('')


      })
    
    );
    
    console.log('pass',this.passenger.value)
  }


  getState2(event) {
console.log('t1',this.taxable_amt)
console.log('c1',this.case_payout_percentage)

    var client_id = event.target.value;
    this.newclient.push(event.target.value);
   console.log('newclient',this.newclient);
   
    this.dataservice.getsalesdetails(client_id).subscribe(res => {
      console.log('1', res);
      this.data = res;
      this.sales.client_id = client_id;
      this.sales = this.data;
      this.empList.push(this.sales);
      this.array = this.empList;
      console.log('array', this.array);
      for (var i = 0; i < this.array.length; i++) {
        this.project_name[i] = this.array[i][0].project_name;
        this.sales_id[i] = this.array[i][0].sales_id;
        this.flat_no[i] = (this.array[i][0].flat_no);
        this.wing[i] = (this.array[i][0].wing);
        this.booking_date[i] = (this.array[i][0].booking_date);
        this.building_name[i] = (this.array[i][0].building_name);
        this.payout_value[i] = (this.array[i][0].payout_value);
        this.case_payout_percentage[i] = (this.array[i][0].case_payout_percentage);
        this.consideration_value[i] = (this.array[i][0].consideration_value);
        this.taxable_amt[i] = (this.consideration_value[i] * this.case_payout_percentage[i]) / 100;
      }
      console.log('t1',this.taxable_amt)
      console.log('c2',this.case_payout_percentage)

      this.bmi();
    })
    // this.newarray(client_id);
    }

newarray(id){
  this.newarray1 = this.clientsArr;
  this.newarray1.forEach((value,index)=>{
    if(value.client_id==id) this.newarray1.splice(index,1);
  console.log('array1',this.newarray1);
});

}


  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }
  getstate11(event) {
    console.log('e',event.target.value);
    console.log('e2',this.form.value)

    this.case_payout = this.form.value;
    var amt = this.case_payout.passenger;
  console.log(amt);
    for (var i = 0; i < amt.length; i++) {
      this.case_payout[i] = amt[i].case_payout_percentage;
    }

    for (var i = 0; i < this.case_payout_percentage.length; i++) {
      if (!(this.case_payout[i])) {
        this.tax[i] = this.taxable_amt[i];
        this.taxable_amt[i] = this.taxable_amt[i];
      }
      else {
        this.tax[i] = Math.round(Number(this.consideration_value[i]) * Number(this.case_payout[i]) / 100);
        this.taxable_amt[i] = Math.round(Number(this.consideration_value[i]) * Number(this.case_payout[i]) / 100);
      }
    }
    this.invoicedetails.sumNumber = this.tax.reduce((acc, cur) => acc + Number(cur), 0)
    this.bmi1();
    this.bmi();
  }

  getstate3(event) {

    console.log('e',event.target.value);
    console.log('e2',this.form.value)

    this.taxablearr = this.form.value;
    var amt = this.taxablearr.passenger;
    for (var i = 0; i < amt.length; i++) {
      this.tax_amt[i] = amt[i].taxable_amt;
    }
    this.bmi();
  }

  bmi() {
    console.log('2', this.taxable_amt);
    console.log('tax',this.tax_amt)
    for (var i = 0; i < this.taxable_amt.length; i++) {
      if (!(this.tax_amt[i])) {
        this.tax[i] = this.taxable_amt[i];
      }
      else {
        this.tax[i] = this.tax_amt[i];
      }
    }
    console.log('tax2',this.tax_amt)

    this.invoicedetails.sumNumber = this.tax.reduce((acc, cur) => acc + Number(cur), 0)
    console.log(this.invoicedetails.sumNumber);
    this.bmi1();

    if (this.value == true) {
      var selectedOption = Math.round((Number(this.invoicedetails.sumNumber) * Number(this.CGST)) / 100);
      this.invoicedetails.cgst_amt = Math.round((Number(this.invoicedetails.sumNumber) * Number(this.CGST)) / 100);
      this.invoicedetails.sgst_amt = Math.round((Number(this.invoicedetails.sumNumber) * Number(this.SGST)) / 100);
      this.invoicedetails.igst_amt = 0;
      this.invoicedetails.total_gst_amt = Math.round(Number(this.invoicedetails.cgst_amt) + Number(this.invoicedetails.sgst_amt));
      this.invoicedetails.total_invoice_amt = Math.round(Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.sumNumber));
      this.bmi1();
    }
    else {
      var selectedOption = 0;
      this.invoicedetails.cgst_amt = 0;
      this.invoicedetails.sgst_amt = 0;
      this.invoicedetails.igst_amt = Math.round((Number(this.invoicedetails.sumNumber) * Number(this.IGST)) / 100);
      this.invoicedetails.total_gst_amt = Number(this.invoicedetails.igst_amt);
      this.invoicedetails.total_invoice_amt = Math.round(Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.sumNumber));
      this.bmi1();
      return 0;
    }
  }

  getstate4(event) {
    this.invoicedetails.tds_rate = event.target.value;
    this.bmi1();
  }

  getstate5(event) {
    console.log(event.target.value);
    this.invoicedetails.received_amt = event.target.value;
    this.bmi1();
  }


  bmi1() {
    this.invoicedetails.receivable_tds_amt = Math.round((Number(this.invoicedetails.sumNumber) * Number(this.invoicedetails.tds_rate)) / 100);
    this.invoicedetails.receivable_amt = Math.round(Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt));
    this.invoicedetails.suspense_amt = Math.round(Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt));
    this.invoicedetails.due_amt = Math.round(Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt));

  }
  getstate6(event) {
    this.invoicedetails.inv_status_id = event.target.value;
    if (this.invoicedetails.inv_status_id == 5) {
      this.invoicedetails.receivable_tds_amt = 0;
      this.invoicedetails.receivable_amt = 0;
      this.invoicedetails.suspense_amt = 0;
      this.invoicedetails.due_amt = 0;

    }
  }
  getstate7(event) {
    this.invoicedetails.inv_submitted_date = event.target.value;
  }
  getstate8(event) {
    this.invoicedetails.credit_note_amt = event.target.value;
  }
  getstate9(event) {
    this.invoicedetails.invoice_num = event.target.value;
  }
  getstate10(event) {
    this.invoicedetails.invoice_date = event.target.value;
  }

  submitInvoicedetails() {
    console.log(this.invoicedetails);
    this.invoicedetails.taxable_amt = this.invoicedetails.sumNumber;
    //console.log(this.invoicedetails);
    this.dataservice.registerinvoiceMultidetails(this.invoicedetails).subscribe(
      data1 => this.handleResponse(data1),
      error => this.handleError(error)
    );
  }

  handleResponse(data1) {
    //console.log(data1);
    for (var i = 0; i < this.array.length; i++) {
      this.invoice.invoice_multi_id = data1.invoice_multi_id;
      this.invoice.project_name = this.array[i][0].project_name;
      this.invoice.project_name = this.project_name[i];
      this.invoice.sales_id = this.array[i][0].sales_id;
      this.invoice.sales_id = this.sales_id[i];
      this.invoice.flat_no = (this.array[i][0].flat_no);
      this.invoice.wing = (this.array[i][0].wing);
      this.invoice.booking_date = (this.array[i][0].booking_date);
      this.invoice.building_name = (this.array[i][0].building_name);
      this.invoice.payout_value = (this.array[i][0].payout_value);
      this.invoice.consideration_value = (this.array[i][0].consideration_value);
      //this.invoice.taxable_amt = (this.consideration_value[i] * this.payout_value[i]) / 100;
      this.invoice.client_id = this.array[i][0].client_id;
      this.invoice.payout_value = this.tax[i];

      this.invoice.taxable_amt = this.tax[i];
      //console.log('2', this.invoice);
      this.dataservice.registerSales(this.invoice).subscribe(

        data => this.handleResponse1(data),
        error => this.handleError(error)
      );
    }


  }
  handleResponse1(data) {
    if (data.client_id == this.invoice.client_id) {
      this.Token.handle(data.access_token);
      Swal.fire('Added!', 'Invoice Details has been added.', 'success');
      this.route.navigateByUrl('/form/invoices/invoice/invoicemultipledetailslist');
    }
    this.getInvoiceInceC();
    this.getInvoiceInceS();
  }
  handleError(error) {
    this.error = error.error.errors;
  }

  getInvoiceInceC(){

    this.invoice_multi_id = this.invoicedetails.invoice_multi_id;
    this.dataservice.getInvoiceMultiInce(this.invoice_multi_id).subscribe(res => {
      this.invoMultiInce = res[0];
      this.invoiceince.sourcing_emp_id = this.invoMultiInce.sourcing_emp_id;
      this.invoiceince.closing_emp_id = this.invoMultiInce.closing_emp_id;
      //this.booking_date=this.invoMultiInce.booking_date;
      this.booking_date = this.invoMultiInce.booking_date.split("-").map(item => item.trim());
      this.invoiceince.year = this.booking_date[0];
      this.invoiceince.month = this.booking_date[1];
      this.booking_datesplit1 = this.booking_date[0] + '-' + this.booking_date[1];
      this.invoiceince.booking_date=this.invoMultiInce.booking_date;
      // console.log("invoice_multi_id new 21", this.invoiceince);
      this.dataservice.getInvoMultiInceD(this.invoiceince).subscribe(res => {
        // console.log("data C", res);
      this.closingData1 = res;
      for (var i = 0; i < this.closingData1.length; i++) {
        this.incedataC.cv_range[i] = this.closingData1[i].cv_range;
        this.incedataC.booking_date=this.invoMultiInce.booking_date;
        
      }
      this.LeadCount1 = this.closingData1.length;
      // console.log("this.LeadCount1", this.incedataC);
      this.closingData = res[0];
      
      this.dataservice.getClosInvoiceInce(this.incedataC).subscribe(res => {
        // console.log("invoice_multi_id  new", res);
        this.closinceAmt = res;
        this.addince1.ai_closing_amt = this.closinceAmt;
        this.addince1.user_id = this.closingData.closing_emp_id;
        this.addince1.ai_closing_ince = this.LeadCount1;
        this.addince1.YearMonth = this.booking_datesplit1;
        // console.log("data add", this.addince1);
        this.dataservice.updatemonthlyInceC3(this.addince1).subscribe(res => {
          // console.log("data add", res);
        });
      });
      });
    });
  }
  getInvoiceInceS(){

    this.invoice_multi_id = this.invoicedetails.invoice_multi_id;
    this.dataservice.getInvoiceMultiInce(this.invoice_multi_id).subscribe(res => {
      this.invoMultiInce = res[0];
      this.invoiceince.sourcing_emp_id = this.invoMultiInce.sourcing_emp_id;
      this.invoiceince.closing_emp_id = this.invoMultiInce.closing_emp_id;
      //this.booking_date=this.invoMultiInce.booking_date;
      this.booking_date = this.invoMultiInce.booking_date.split("-").map(item => item.trim());
      this.invoiceince.year = this.booking_date[0];
      this.invoiceince.month = this.booking_date[1];
      this.booking_datesplit1 = this.booking_date[0] + '-' + this.booking_date[1];
      this.invoiceince.booking_date=this.invoMultiInce.booking_date;
          this.dataservice.getInvoMultiInceS(this.invoiceince).subscribe(res => {
            // console.log("data S", res);
            this.sourcingData =res[0];
            this.sourcingData1 =res;
            for (var j = 0; j < this.sourcingData1.length; j++) {
              this.incedata.cv_range[j] = this.sourcingData1[j].cv_range;
              this.incedata.booking_date=this.invoMultiInce.booking_date;
              
            }
            // console.log("sourInceAmt", this.incedata.cv_range);
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
                    // console.log("sourInceAmt", res);
                    this.sourInceAmt = res;
      
                    this.addince.ai_sourcing_amt = this.sourInceAmt;
                    this.addince.user_id = this.sourcingData.sourcing_emp_id;
                    this.addince.ai_sourcing_ince = this.LeadCount;
                    this.addince.YearMonth = this.booking_datesplit1;
                    // console.log("s data", this.addince);
                    this.dataservice.updatemonthlyInceS3(this.addince).subscribe(res => {
                      // console.log("data add 1", res);
                    })
                 });
                }
              }
            });
          });
    });
  }

  reset(index){
    // this.form.passenger.splice(index, 1);
     console.log('p1',this.form.value);
     this.taxable_amt.splice(index);
     this.form1 =this.form.value;
    //  this.form.controls.passenger.controls.splice(index, 1);
    (<FormArray>this.form.controls.passenger).removeAt(index);
    this.array.splice(index);
     this.tax.splice(index);
     this.case_payout_percentage.splice(index);

     console.log('p2',this.form.value);

 // this.taxable_amt = [this.taxable_amt];
  console.log('remove',this.taxable_amt)
  this.bmi2(this.taxable_amt);
  //this.getevent(this.taxable_amt);
  }



  bmi2(e) {
    console.log('e', e);
    this.taxable_amt = e;
    

    this.invoicedetails.sumNumber = this.taxable_amt.reduce((acc, cur) => acc + Number(cur), 0)
    console.log(this.invoicedetails.sumNumber);
    this.bmi1();

    if (this.value == true) {
      var selectedOption = Math.round((Number(this.invoicedetails.sumNumber) * Number(this.CGST)) / 100);
      this.invoicedetails.cgst_amt = Math.round((Number(this.invoicedetails.sumNumber) * Number(this.CGST)) / 100);
      this.invoicedetails.sgst_amt = Math.round((Number(this.invoicedetails.sumNumber) * Number(this.SGST)) / 100);
      this.invoicedetails.igst_amt = 0;
      this.invoicedetails.total_gst_amt = Math.round(Number(this.invoicedetails.cgst_amt) + Number(this.invoicedetails.sgst_amt));
      this.invoicedetails.total_invoice_amt = Math.round(Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.sumNumber));
      this.bmi1();
    }
    else {
      var selectedOption = 0;
      this.invoicedetails.cgst_amt = 0;
      this.invoicedetails.sgst_amt = 0;
      this.invoicedetails.igst_amt = Math.round((Number(this.invoicedetails.sumNumber) * Number(this.IGST)) / 100);
      this.invoicedetails.total_gst_amt = Number(this.invoicedetails.igst_amt);
      this.invoicedetails.total_invoice_amt = Math.round(Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.sumNumber));
      this.bmi1();
      return 0;
    }
  }


  // getevent(event) {

  //   console.log('e',event);
  //   console.log('e2',this.form.value)
    
  //   this.taxablearr = this.form.value;
  //   var amt = this.taxablearr.passenger;
  //   console.log('amt',amt);
  //   for (var i = 0; i < amt.length; i++) {
  //     this.tax_amt[i] = amt[i].taxable_amt;
  //   }
  //   this.bmi();
  // }

  

}
