import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { ReceiptDetails, InvDataArr, InceDataArr, InceData, InceRec, InvoiceInceS,RecepitInce } from './receiptdetails.model';

@Component({
  selector: 'app-receiptdetails',
  templateUrl: './receiptdetails.component.html',
  styleUrls: ['./receiptdetails.component.scss']
})
export class ReceiptdetailsComponent implements OnInit {

  receiptdetails = new ReceiptDetails;
  error = new ReceiptDetails;
  incedataarr = new InceDataArr;
  incedata = new InceData;
  addinceS = new InceRec;
  addinceC = new InceRec;
  invoiceInce = new InvoiceInceS;
  invoiceInceC = new InvoiceInceS;
  recearr = new RecepitInce;
  recearrC = new RecepitInce;
  invoicedetailsArr: any;
  invoiceArr: any;
  invoice: any;
  DataArr: any;
  taxableAmt: any;
  invoice_num: any;
  invoice_num1: any;
  receiptData: any;
  client_id: any;
  suspense_amount: any;
  invoice_id: any;
  invoice_multi: any;
  receiptArr: any;
  booking_date: any;
  receSourcingD: any;
  sourcingAmt: any;
  receClosingD: any;
  closingAmt: any;
  booking_datesplit: any;
  receSourcingD1: any;
  user_idS: any;
  receClosingD1: any;
  user_idC: any;
  sourData: any;
  user_id: any;
  YearMonth: any;
  eligibility_ince: any;
  constructor(
    private dataservice: DataService,
    private route: Router,
    private Token: TokenService,

  ) { }

  ngOnInit(): void {
    this.getinvoicedetails();
  }

  getinvoicedetails() {
    this.dataservice.pendinginvoice().subscribe(res => {
      //console.log(res);
      this.invoicedetailsArr = res;
    })
  }

  getInvoice(event) {
    this.invoice_multi = event.target.value;

    this.dataservice.getOneInvoiceMultidetails(this.invoice_multi).subscribe(res => {
      this.invoice = res;
      this.invoice_num1 = this.invoice[0].invoice_num;
      var selectedOption = this.invoice[0].receivable_amt;
      this.receiptdetails.receivable_amt = this.invoice[0].receivable_amt;
      this.invoiceArr = res;
    })
  }

  getInvoice1(event) {

    this.getInvoice2();
    var client_id = event.target.value;
    this.dataservice.getreceiptdata(client_id).subscribe(res => {
      this.DataArr = res;
      for (var i = 0; i < this.DataArr.length; i++) {
        this.invoice_num = this.DataArr[i].invoice_num;
        this.suspense_amount = this.DataArr[i].suspense_amount;

        if (this.invoice_num1 == this.invoice_num) {
          this.receiptdetails.taxableAmt = this.DataArr[i].taxable_amt;
        }
      }
    });
  }
  getInvoice2() {
    this.dataservice.getReceiptdetails().subscribe(res => {
      //console.log("hiiiii",res);
      this.receiptData = res;
      for (var i = 0; i < this.receiptData.length; i++) {
        this.invoice_id = this.receiptData[i].invoice_id;
        this.client_id = this.receiptData[i].client_id;
        this.suspense_amount = this.receiptData[i].suspense_amount;

        if ((this.receiptdetails.invoice_id == this.invoice_id) && (this.receiptdetails.client_id == this.client_id) && (this.suspense_amount <= 0)) {
          Swal.fire('Added!', 'Receipt Details Already added.', 'warning');
        }
        if ((this.receiptdetails.invoice_id == this.invoice_id) && (this.receiptdetails.client_id == this.client_id)) {
          this.receiptdetails.suspense_amount = this.receiptData[i].suspense_amount;
          //console.log("hiiiii", this.receiptdetails.suspense_amount);
        }
      }
    })
  }
  submitReceiptdetails() {
    this.dataservice.upCreReceipt(this.receiptdetails).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    this.getReceIncentive();
    this.getReceIncentiveS();
  }

  getReceIncentive() {
    this.incedataarr.client_id = this.receiptdetails.client_id;
    this.incedataarr.invoice_id = this.receiptdetails.invoice_id;
    // console.log("incedataarr", this.incedataarr);
    this.dataservice.inceReceiptD(this.incedataarr).subscribe(res => {
      // console.log("res", res);
      this.receiptArr = res[0];
      this.incedata.invoice_id = this.receiptdetails.invoice_id;
      this.incedata.closing_emp_id = this.receiptArr.closing_emp_id;
      this.incedata.sourcing_emp_id = this.receiptArr.sourcing_emp_id;
      this.booking_date = this.receiptArr.booking_date.split("-").map(item => item.trim());
      this.incedata.year = this.booking_date[0];
      this.incedata.month = this.booking_date[1];
      this.booking_datesplit = this.booking_date[0] + '-' + this.booking_date[1];
      this.incedata.booking_date = this.receiptArr.booking_date;
      // console.log("incedata1", this.incedata);

      this.dataservice.getCloReceInceData(this.incedata).subscribe(res => {
        //console.log("incedata closing", res);
        this.receClosingD = res[0];
        this.receClosingD1 = res;
        for (var i = 0; i < this.receClosingD1.length; i++) {
          this.recearrC.cv_range[i] = this.receClosingD1[i].cv_range;
          this.recearrC.booking_date = this.incedata.booking_date;

        }
        //console.log("ince", this.recearrC);
        this.user_idC = this.receClosingD1.length;
        this.dataservice.getCloReceInce(this.recearrC).subscribe(res => {
          //console.log("sum C", res);
          this.closingAmt = res;
          this.addinceC.user_id = this.receClosingD.closing_emp_id;
          this.addinceC.YearMonth = this.booking_datesplit;
          this.addinceC.pi_closing_ince = this.user_idC;
          this.addinceC.pi_closing_amt = this.closingAmt;
         // console.log("add addinceC", this.addinceC);
          if (this.receiptdetails.suspense_amount <= 0) {
            this.dataservice.upCreReceiptC(this.addinceC).subscribe(res => {
             // console.log("add closing", res);
            });
          }
        });
      });
    });
  }
  getReceIncentiveS() {
    this.incedataarr.client_id = this.receiptdetails.client_id;
    this.incedataarr.invoice_id = this.receiptdetails.invoice_id;
    //console.log("incedataarr", this.incedataarr);
    this.dataservice.inceReceiptD(this.incedataarr).subscribe(res => {
      //console.log("res", res);
      this.receiptArr = res[0];
      this.incedata.invoice_id = this.receiptdetails.invoice_id;
      this.incedata.closing_emp_id = this.receiptArr.closing_emp_id;
      this.incedata.sourcing_emp_id = this.receiptArr.sourcing_emp_id;
      this.booking_date = this.receiptArr.booking_date.split("-").map(item => item.trim());
      this.incedata.year = this.booking_date[0];
      this.incedata.month = this.booking_date[1];
      this.booking_datesplit = this.booking_date[0] + '-' + this.booking_date[1];
      this.incedata.booking_date = this.receiptArr.booking_date;
     // console.log("incedata1", this.incedata);
      this.dataservice.getMonthlyInceData().subscribe(res => {
        this.sourData = res;
        for (var i = 0; i < this.sourData.length; i++) {
          this.user_id = this.sourData[i].user_id;
          this.YearMonth = this.sourData[i].YearMonth;
          this.eligibility_ince = this.sourData[i].eligibility_ince;
          if (this.YearMonth == this.booking_datesplit && this.user_id == this.receiptArr.sourcing_emp_id && this.eligibility_ince == "1") {
           // console.log("Hello");
            this.dataservice.getSouReceInceData(this.incedata).subscribe(res => {
           //   console.log("data", res);
              this.receSourcingD = res[0];
              this.receSourcingD1 = res;
              for (var i = 0; i < this.receSourcingD1.length; i++) {
                this.recearr.cv_range[i] = this.receSourcingD1[i].cv_range;
                this.recearr.booking_date = this.receiptArr.booking_date;
              }
             // console.log("ince", this.recearr);
              this.user_idS = this.receSourcingD1.length;
              this.dataservice.getSourReceInce(this.recearr).subscribe(res => {
               // console.log("incedata", res);
                this.sourcingAmt = res;
                this.addinceS.user_id = this.receSourcingD.sourcing_emp_id;
                this.addinceS.YearMonth = this.booking_datesplit;
                this.addinceS.pi_sourcing_ince = this.user_idS;
                this.addinceS.pi_sourcing_amt = this.sourcingAmt;
               // console.log("add addinceS", this.addinceS);
                if (this.receiptdetails.suspense_amount <= 0) {
                  this.dataservice.upCreReceiptS(this.addinceS).subscribe(res => {
                   // console.log("add Sourcing", res);
                  });
                }
              });
            });
          }
        }
      });
    });
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Receipt Details has been added.', 'success');
    this.route.navigateByUrl('/form/invoices/receiptdetails/receiptdetailslist');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  bmi(event) {
    

    var selectedOption = Number(this.receiptdetails.taxableAmt) - Number(this.receiptdetails.received_amt);
    this.receiptdetails.suspense_amount = Number(this.receiptdetails.taxableAmt) - Number(this.receiptdetails.received_amt);
    return Number(this.receiptdetails.taxableAmt) - Number(this.receiptdetails.received_amt);
  }
}
