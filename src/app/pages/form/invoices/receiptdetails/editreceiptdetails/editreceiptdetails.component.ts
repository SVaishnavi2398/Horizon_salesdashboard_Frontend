import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { ReceiptDetails, InceDataArr, InceData, InceRec, RecepitInce } from '../receiptdetails/receiptdetails.model';

@Component({
  selector: 'app-editreceiptdetails',
  templateUrl: './editreceiptdetails.component.html',
  styleUrls: ['./editreceiptdetails.component.scss']
})
export class EditreceiptdetailsComponent implements OnInit {

  receiptid: any;
  invoicedetailsArr: any;
  data: any;
  invoiceArr: any;
  invoice: any;
  receiptdetails = new ReceiptDetails;
  invoice_id: any;
  invoice_id1: any;
  client_id: any;
  incedataarr = new InceDataArr;
  incedata = new InceData;
  incedataS = new InceData;
  addinceS = new InceRec;
  addinceC = new InceRec;
  recearr = new RecepitInce;
  recearrC = new RecepitInce;
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
  sourData: any;
  user_id: any;
  YearMonth: any;
  eligibility_ince: any;
  user_idC: any;
  booking_date1: any;
  incentive_status: any;
  gi_sourcing_amt: any;
  gi_closing_amt: any;
  incentive_status1: any;
  ince_status: any;
  data1= new RecepitInce;

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.receiptid = this.route.snapshot.params.id;
    this.getReceiptDetails();

  }

  getReceiptDetails() {
    this.dataservice.getOneReceiptdetails(this.receiptid).subscribe(res => {
      this.data = res;
      this.receiptdetails = this.data;
      this.invoice_id1 = this.receiptdetails.invoice_id;
      this.client_id = this.receiptdetails.client_id;
      this.dataservice.getreceiptdata(this.client_id).subscribe(res => {
        this.invoicedetailsArr = res;
        this.data1.invoice_num= this.invoicedetailsArr[0].invoice_num;
        this.data1.invoice_multi_id= this.invoicedetailsArr[0].invoice_multi_id;
        var selectedOption = this.data1.invoice_multi_id;
        for (var i = 0; i < this.invoicedetailsArr.length; i++) {
          this.invoice_id = this.invoicedetailsArr[i].invoice_multi_id;
          if (this.invoice_id == this.invoice_id1) {
            this.receiptdetails.receivable_amt = this.invoicedetailsArr[i].receivable_amt;
            this.receiptdetails.taxableAmt = this.invoicedetailsArr[i].taxable_amt;
          }
        }
      })
    })
  }

  bmi(event) {
    var selectedOption = Number(this.receiptdetails.taxableAmt) - Number(this.receiptdetails.received_amt);
    this.receiptdetails.suspense_amount = Number(this.receiptdetails.taxableAmt) - Number(this.receiptdetails.received_amt);
    return Number(this.receiptdetails.taxableAmt) - Number(this.receiptdetails.received_amt);
  }


  updateReceiptdetails() {
    this.dataservice.updateReceiptDetails(this.receiptid, this.receiptdetails).subscribe(res => {
      Swal.fire('Updated!', 'Receipt Details has been updated.', 'success');
      this.router.navigate(['/form/invoices/receiptdetails/receiptdetailslist']);
    })
    this.getReceIncentive();
    this.getReceIncentiveS();
  }


  getReceIncentive() {
    this.incedataarr.client_id = this.receiptdetails.client_id;
    this.incedataarr.invoice_id = this.receiptdetails.invoice_id;
    // console.log("incedataarr", this.incedataarr);
    this.dataservice.inceReceiptD(this.incedataarr).subscribe(res => {
      //console.log("res", res);
      // this.receiptArr = res[0];
      this.incedata.invoice_id = this.receiptdetails.invoice_id;
      this.incedata.closing_emp_id = this.receiptArr.closing_emp_id;
      this.incedata.sourcing_emp_id = this.receiptArr.sourcing_emp_id;
      this.booking_date = this.receiptArr.booking_date.split("-").map(item => item.trim());
      this.incedata.year = this.booking_date[0];
      this.incedata.month = this.booking_date[1];
      this.booking_datesplit = this.booking_date[0] + '-' + this.booking_date[1];
      this.incedata.booking_date = this.receiptArr.booking_date;
      //console.log("incedata1", this.incedata);

      this.dataservice.getCloReceInceData(this.incedata).subscribe(res => {
       // console.log("incedata closing", res);
        this.receClosingD = res[0];
        this.receClosingD1 = res;
        for (var i = 0; i < this.receClosingD1.length; i++) {
          this.recearrC.cv_range[i] = this.receClosingD1[i].cv_range;
          this.recearrC.booking_date = this.incedata.booking_date;

        }
        console.log("ince", this.recearrC);
        this.user_idC = this.receClosingD1.length;
        this.dataservice.getCloReceInce(this.recearrC).subscribe(res => {
          //console.log("sum C", res);
          this.closingAmt = res;
          this.addinceC.user_id = this.receClosingD.closing_emp_id;
          this.addinceC.YearMonth = this.booking_datesplit;
          this.addinceC.pi_closing_ince = this.user_idC;
          this.addinceC.pi_closing_amt = this.closingAmt;
          //console.log("add addinceC", this.addinceC);
          if (this.receiptdetails.suspense_amount <= 0) {
            this.dataservice.upCreReceiptC(this.addinceC).subscribe(res => {
              //console.log("add closing", res);
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
      //console.log("incedata1", this.incedata);
      this.dataservice.getMonthlyInceData().subscribe(res => {
        this.sourData = res;
        for (var i = 0; i < this.sourData.length; i++) {
          this.user_id = this.sourData[i].user_id;
          this.YearMonth = this.sourData[i].YearMonth;
          this.eligibility_ince = this.sourData[i].eligibility_ince;
          if (this.YearMonth == this.booking_datesplit && this.user_id == this.receiptArr.sourcing_emp_id && this.eligibility_ince == "1") {
            //console.log("Hello");
            this.dataservice.getSouReceInceData(this.incedata).subscribe(res => {

              
              //console.log("data", res);
              this.receSourcingD = res[0];
              this.receSourcingD1 = res;
              for (var i = 0; i < this.receSourcingD1.length; i++) {
                this.recearr.cv_range[i] = this.receSourcingD1[i].cv_range;
                this.recearr.booking_date = this.receiptArr.booking_date;
              }
              //console.log("ince", this.recearr);
              this.user_idS = this.receSourcingD1.length;
              this.dataservice.getSourReceInce(this.recearr).subscribe(res => {
                //console.log("incedata", res);
                this.sourcingAmt = res;
                this.addinceS.user_id = this.receSourcingD.sourcing_emp_id;
                this.addinceS.YearMonth = this.booking_datesplit;
                this.addinceS.pi_sourcing_ince = this.user_idS;
                this.addinceS.pi_sourcing_amt = this.sourcingAmt;
                //console.log("add addinceS", this.addinceS);
                if (this.receiptdetails.suspense_amount <= 0) {
                  this.dataservice.upCreReceiptS(this.addinceS).subscribe(res => {
                    //console.log("add Sourcing", res);
                  });
                }
              });
            });
          }
        }
      });
    });
  }


}

