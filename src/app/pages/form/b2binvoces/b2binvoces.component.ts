import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Invoice } from './b2binvoice.model';
import * as XLSX from 'xlsx';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-b2binvoces',
  templateUrl: './b2binvoces.component.html',
  styleUrls: ['./b2binvoces.component.scss']
})
export class B2binvocesComponent implements OnInit {

  searchb2binvoice: any;
  public page = 1;
  public pageSize = 10;
  length: any;
  docs: any;
  error: any;
  invoice = new Invoice;
  B2bData: any;
  datalength: any;
  file: any;
  arrayBuffer: any;
  filelist: any;
  fileinfo: any;
  filelist1: any;
  date_info: any;
  rate_info: any;
  invalidata: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  /***Searching***/
  party_name_Search: "";
  inv_no_Search: "";
  inv_val_Search: "";
  total_tax_amt_Search: "";
  total_tax_val_Search: "";
  inv_dt_Search: "";

  constructor(
    private http: HttpClient,
    private dataservice: DataService,
    private router: Router,
    orderPipe: OrderPipe
  ) {
    this.sortedCollection = orderPipe.transform(this.B2bData, 'info.name');

  }

  ngOnInit(): void {
    this.getB2bData();

  }
  getB2bData() {
    this.dataservice.b2bInvoiceDetails().subscribe(res => {
      this.B2bData = res;
      this.datalength = this.B2bData.length;
    })
  }

  addfile() {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.filelist = XLSX.utils.sheet_to_json(worksheet, { raw: true });

      for (let i = 0; i < this.filelist.length; i++) {
        this.fileinfo = this.filelist[i];
        this.invoice.Supp_gstin = this.fileinfo.__EMPTY;
        this.invoice.party_name = this.fileinfo.__EMPTY_1;
        this.invoice.inv_no = this.fileinfo.__EMPTY_2;

        var utc_days = Math.floor(this.fileinfo.__EMPTY_3 - 25569);
        var utc_value = utc_days * 86400;
        var date_info = new Date(utc_value * 1000);
        this.filelist1 = new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate());

        var date = new Date(this.filelist1),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        this.date_info = [date.getFullYear(), mnth, day].join("-");
        this.invoice.inv_dt = this.date_info;
        this.invoice.inv_val = this.fileinfo.__EMPTY_4;
        this.rate_info = this.fileinfo.__EMPTY_5 * 100;
        this.invoice.rate = this.rate_info;
        this.invoice.total_tax_val = this.fileinfo.__EMPTY_6;
        this.invoice.int_tax = this.fileinfo.__EMPTY_7;
        this.invoice.central_tax = this.fileinfo.__EMPTY_8;
        this.invoice.sta_ut_tax = this.fileinfo.__EMPTY_9;
        this.invoice.cess = this.fileinfo.__EMPTY_10;
        this.invoice.total_tax_amt = this.fileinfo.__EMPTY_11;
        // this.dataservice.UpdateGstrB2BData(this.invoice).subscribe(
        //   data => this.handleResponse1(data),
        //   error => this.handleError1(error)
        // );
      }
      if (this.invoice.inv_no == undefined) {
        this.invalidata = "Invalid File Selected";
      }
      else {
        this.show();
      }
    }
  }
  addfilevent(event: any) {
    this.file = event.target.files[0];
  }

  handleResponse1(data: any) {
    if (this.invoice.inv_no == data.inv_no) {
      this.cancel();
    }
  }

  show() {
    Swal
      .fire({
        title: 'Please Wait!',
        html: 'Data is Adding...',
        didOpen: () => {
          Swal.showLoading();
        },
      })
  }
  cancel() {
    // Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: 'Excel File Has Been Added Successfully',
    //   showConfirmButton: false,
    //   timer: 1500,
    // })
    Swal.close();
    this.reloadComponent();
  }
  invalid() {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Invalid File Selected',
      showConfirmButton: false,
      timer: 2500,
    })
    // this.reloadComponent();
  }

  handleError1(error: any) {
    this.error = error.error.errors;
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}

