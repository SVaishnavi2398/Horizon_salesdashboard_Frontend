import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import gstr2a from './gstr2a_files/gstr2a.json';
import { Json } from './gstr2a.model';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-gstr2a',
  templateUrl: './gstr2a.component.html',
  styleUrls: ['./gstr2a.component.scss']
})
export class Gstr2aComponent implements OnInit {

  public gstr2a: {}[] = gstr2a;
  json = new Json;
  error = new Json;
  length: any;
  docs: any;
  //error: any;
  gstdata: any;
  gstinfo: any;
  info: any;
  inv: any;
  financial_year: any;
  financial_month: any;
  inv_month: any;
  monthyear: any;
  gstr2aData: any;
  gst2Adata: any;
  add: any;
  B2bInvoice: any;
  invMTotal: any[] = [];
  b2bData: any;
  date: any[] = [];
  JsonTotal: any[] = [];
  B2bInvTotal: any[] = [];
  array2: any[] = [];
  month: any[] = [];
  year: any[] = [];
  dis_array2: any[] = [];
  //length:any;
  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;
  constructor(
    private dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    orderPipe: OrderPipe
  ) {
    this.sortedCollection = orderPipe.transform(this.dis_array2, 'info.name');
  }

  ngOnInit(): void {

    this.getTotalMonthWise();
    //console.log(this.gstr2a);
  }

  getTotalMonthWise() {
    this.dataservice.getgstr2amonth().subscribe(res => {
      //console.log(res);
      this.gstr2aData = res;

      this.dataservice.getB2baInvoice().subscribe(res => {
        this.B2bInvoice = res;

        for (var j = 0; j < this.B2bInvoice.length; j++) {
          this.date[j] = this.B2bInvoice[j].new_date;

          this.b2bData = this.B2bInvoice[j];
          this.b2bData.b2bctotal = Math.round(Number(this.B2bInvoice[j].b2bctotal));
          this.b2bData.b2bstotal = Math.round(Number(this.B2bInvoice[j].b2bstotal));
          this.b2bData.b2bitotal = Math.round(Number(this.B2bInvoice[j].b2bitotal));

          for (var i = 0; i < this.gstr2aData.length; i++) {
            this.invMTotal[i] = this.gstr2aData[i].inv_month;
            this.gst2Adata = this.gstr2aData[i];

            this.gst2Adata.ctotal = Math.round(Number(this.gstr2aData[i].ctotal));
            this.gst2Adata.stotal = Math.round(Number(this.gstr2aData[i].stotal));
            this.gst2Adata.itotal = Math.round(Number(this.gstr2aData[i].itotal));
            this.add = [this.gst2Adata.ctotal, this.gst2Adata.stotal, this.gst2Adata.itotal];
            this.gst2Adata.gstr2atotal = Math.round(Number(this.add.reduce((a, b) => a + b, 0)));

            if (this.invMTotal[i] == this.date[j]) {
              this.JsonTotal[i] = this.gst2Adata;

              this.B2bInvTotal[j] = this.b2bData;
              this.JsonTotal = this.JsonTotal.concat(this.B2bInvTotal);

              this.array2[i] = this.JsonTotal.reduce((acc, cur) => ({ ...acc, ...cur }));
              //console.log(this.array2);
              this.month[i] = this.array2[i].inv_month;
              this.monthyear = this.month[i].split("-").map(item => item.trim());
              this.array2[i].new_date = this.monthyear[1];
              this.array2[i].new_year = this.monthyear[0];
              this.year[i] = this.array2[i].new_date;
            }
          }
        }
        this.dis_array2 = this.array2.filter(function (el) {
          return el != null;
        });
      })
    })
  }

  UploadFiles() {
    
    this.gstdata = this.gstr2a;
    this.gstinfo = this.gstdata.b2b;
    //console.log(this.gstinfo);
    for (var i = 0; i < this.gstinfo.length; i++) {
      this.info = this.gstinfo[i];

      this.json.cfs = this.info.cfs;
      this.json.cfs3b = this.info.cfs3b;
      this.json.fldtr1 = this.info.fldtr1;
      this.json.ctin = this.info.ctin;
      this.json.flprdr1 = this.info.flprdr1;

      for (var j = 0; j < this.info.inv.length; j++) {
        this.inv = this.info.inv[j];
        this.monthyear = this.inv.idt.split("-").map(item => item.trim());
        //console.log(this.monthyear);
        this.json.inv_month = this.monthyear[2] + '-' + this.monthyear[1];
        this.json.chksum = this.inv.chksum;
        this.json.idt = this.inv.idt;
        this.json.inum = this.inv.inum;
        this.json.inv_typ = this.inv.inv_typ;
        this.json.rchrg = this.inv.rchrg;
        this.json.pos = this.inv.pos;
        this.json.val = this.inv.val;

        this.json.num = this.inv.itms[0].num;
        this.json.camt = this.inv.itms[0].itm_det.camt;
        this.json.csamt = this.inv.itms[0].itm_det.csamt;
        this.json.iamt = this.inv.itms[0].itm_det.iamt;
        this.json.rt = this.inv.itms[0].itm_det.rt;
        this.json.samt = this.inv.itms[0].itm_det.samt;
        this.json.txval = this.inv.itms[0].itm_det.txval;
        // console.log(this.json.financial_year);
        // console.log(this.json.financial_month);

        this.dataservice.UpdateGstr2AData(this.json).subscribe(
          data => this.handleResponse1(data),
          error => this.handleError1(error)
        );
      }
    }
    this.show();
  }

  handleResponse1(data: any) {
    if (this.json.inum == data.inum) {
      this.cancel();
      this.reloadComponent();
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

  handleError1(error: any) {
    this.error = error.error.errors;

  }

  cancel() {
    // Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: 'Json Data Has Been Added Successfully',
    //   showConfirmButton: false,
    //   timer: 1500,
    // })
    Swal.close();
    
  }

  saveMultipleImage() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    var formdata = new FormData();
    for (let i = 0; i < this.length; i++) {
      formdata.append('gstr2a_filename' + [i], this.docs[i], this.docs[i].name);
      formdata.append('length', this.length);
    }

    this.http.post('https://www.horizonfp.in/salesbackend1/api/uploadgstr2a', formdata
    ).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  onSelectFile(e: any) {
    //  this.filedata = e.target.files[0];
    //console.log(e);
    this.docs = <File>e.target.files;
    this.length = <File>e.target.files.length;
  }

  handleResponse(data: any) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Json File Has Been Added Successfully',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  handleError(error: any) {
    this.error = error.error.errors;
    //console.log(this.error.Type);
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
