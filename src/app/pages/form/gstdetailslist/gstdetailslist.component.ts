import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Json } from './gstdetailslist.model';
import gst from './_files1/gst.json';



@Component({
  selector: 'app-gstdetailslist',
  templateUrl: './gstdetailslist.component.html',
  styleUrls: ['./gstdetailslist.component.scss']
})
export class GstdetailslistComponent implements OnInit {
  gstdata:any;
  json = new Json;
  error= new Json;
  public gst:{}[] = gst;
  gstinfo: any;
  inv: any;
  info: any;
  invinfo: any[]=[];
  count_info: void;
  camt: any;
  samt: any;
  inum: any;
  invoicedata: any;
  invoices: any;
  cdiff: any;
  dbinvoice: any;
  jsiondata: any;
  dbdata: any;
  gstin: any;
  jsoncamt: any[]=[];
  gstr1_totalsales: any;
  sum: any;
  value: Number;
  arr: any;
  jsoninvigst: any[]=[];
  jsoniamt: number;
  jsonTotalGst: any;
  jsonGst: any[]=[];
  sysinvcamt: any[]=[];
  syscamt: number;
  sysTotalSales: any;
  sysinvsgst: any[]=[];
  syssamt: number;
  sysGst: any[]=[];
  sysTotalGst: any;
  jangst: any;
  jangstinfo: any;
  month: any[]=[];
  sysinvigst: any[]=[];
  sysTotal: number;
  mergedData = [];
  dataArr : any[]=[];
  DecjsonArr: any[];
  JanjsonArr: any[];
  inv_date: any;
  inv_month: any;
  cu_month: any;
  jsonData: any;
  itmes: any[]=[];
  itmes1: any[]=[];
  decinvoicedata: any;
  cgst: any[]=[];
  sgst_amt: any[]=[];
  SysTotalcgst: number;
  SysTotalsgst: number;
  total: any;
  SysTotal: number;
  Arr: any[]=[];
  Decmonth: any;
  Janmonth: any;
  janarr: any;
  Jancgst: any[]=[];
  Jansgst_amt:any[]=[];
  Jantotal: any;
  JanArr: any[]=[];
  allArr: any;
 
  FebArr: any[];
  jsonres: any;
  Jsonmonth: any;
  Jsonarr: any;
  DecjsonTotalSales: any;
  Decjsoncgst: any[]=[];
  Decjsonsgst_amt:any[]=[];
  count: any;

  DecArr: any[];
  count1:any[]=[];
  Decsales: any[]=[];
  count2: any;
  monthyear: any;
  invDate: any;
  str: any[]=[];
  jsondate: any[]=[];
  invmonthyear: any[]=[];
  invArr: any[]=[];
  invMonth: any[];
  jsonArr: any[]=[];
  invmonthArr: any[]=[];
  syscgst:any[]=[];
  syssgst: any[]=[];
  sysigst: any[]=[];
  jsoncgst: any[]=[];
  jsonsgst: any[]=[];
  jsonigst: any[]=[];
  date: any[]=[];
  itotal: any;
  invdata: any;
  jsonctotal: any[]=[];
  jsonstotal: any;
  jsonitotal: any;
  jsontotal: any;
  jsondata: any;
  invTotal: any[]=[];
  JsonTotal: any[]=[];
  array2: any[]=[];
  invtotal: any;
  add: any;
  year: any[]=[];
  docs: File;
  length: any;
  jsonadd: any;
  financial_year: any;
  financial_month: any;
  table: any[]=[];
  new_year: any[];
  data: any;
  timmer: any;
  dis_array2: any[]=[];
  monthArr: any[]=[];
  dis_month: any;
  new_date: any;
  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  /**Searching***/
  new_year_Search: "";
  Invcount_search: "";
  invctotal_search: "";
  invstotal_Search: "";
  invitotal_Search: "";
  total_Search: "";
  Jcount_search: "";
  ctotal_search: "";
  stotal_Search: "";
  itotal_Search: "";
  Jtotal_Search: "";
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private dataservice:DataService,
    private http: HttpClient,
    orderPipe: OrderPipe
  ) { 
    this.sortedCollection = orderPipe.transform(this.dis_array2, 'info.name');
  }

  ngOnInit(): void {
     this.getAllMonthWise();
  }

  

  uploadJson() {
    this.show();
    this.gstdata = this.gst;

    this.gstinfo = this.gstdata.b2b;

    this.gstr1_totalsales = this.gstinfo.length;

    for (var i = 0; i < this.gstinfo.length; i++) {
      this.info = this.gstinfo[i];
      //  console.log(this.info);
      this.json.cfs = this.info.cfs;
      this.json.ctin = this.info.ctin;
      //  console.log(this.json.ctin);
      for (var j = 0; j < this.info.inv.length; j++) {

        this.inv = this.info.inv[j];
        this.monthyear = this.inv.idt.split("-").map(item => item.trim());
        // console.log(this.monthyear);
        this.json.inv_month = this.monthyear[2] + '-' + this.monthyear[1];
        this.json.cflag = this.inv.cflag;
        this.json.chksum = this.inv.chksum;
        this.json.flag = this.inv.flag;
        this.json.idt = this.inv.idt;
        this.json.inum = this.inv.inum;
        this.json.inv_typ = this.inv.inv_typ;
        this.json.pos = this.inv.pos;
        this.json.rchrg = this.inv.rchrg;
        this.json.updby = this.inv.updby;
        this.json.val = this.inv.val;
        this.json.num = this.inv.itms[0].num;
        this.json.camt = this.inv.itms[0].itm_det.camt;
        this.json.csamt = this.inv.itms[0].itm_det.csamt;
        this.json.rt = this.inv.itms[0].itm_det.rt;
        this.json.samt = this.inv.itms[0].itm_det.samt;
        this.json.txval = this.inv.itms[0].itm_det.txval;

        //  this.jsondata[i] = this.json;
        this.dataservice.UpdateGstr1Data(this.json).subscribe(

          data => this.handleResponse1(data),
          error => this.handleError1(error)
        );


      }

    }

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
        title: 'Wait!',
        html: 'Data is Adding...',
        didOpen: () => {
          Swal.showLoading();

        },
      })
  }

  handleError1(error: any) {
    this.error = error.error.errors;
    // console.log(this.error);
  }

  cancel() {
    Swal.close();
  }
  saveMultipleImage() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    var formdata = new FormData();
    for (let i = 0; i < this.length; i++) {
      formdata.append('jsonfilename' + [i], this.docs[i], this.docs[i].name);
      formdata.append('length', this.length);
    }

    this.http.post('http://127.0.0.1:8000/api/jsonupload', formdata
    ).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  onSelectFile(e: any) {
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


  getmonth(data: any) {
    this.router.navigateByUrl('/gstr1/data');
  }

  getAllMonthWise() {
    this.dataservice.getSysmonth().subscribe(res => {
      // console.log(res);
      this.invoicedata = res;
      this.dataservice.getJsonmonth().subscribe(res => {
        // console.log(res);
        this.jsonData = res;

        for (var i = 0; i < this.invoicedata.length; i++) {
          this.date[i] = this.invoicedata[i].new_date;

          this.invdata = this.invoicedata[i];
          this.invdata.invctotal = Math.round(Number(this.invoicedata[i].invctotal));
          this.invdata.invstotal = Math.round(Number(this.invoicedata[i].invstotal));
          this.invdata.invitotal = Math.round(Number(this.invoicedata[i].invitotal));
          this.invdata.total = Math.round(Number(this.invoicedata[i].total));


          for (var j = 0; j < this.jsonData.length; j++) {
            this.jsonctotal[j] = this.jsonData[j].inv_month;
            this.jsondata = this.jsonData[j];

            this.jsondata.ctotal = Math.round(Number(this.jsonData[j].ctotal));
            this.jsondata.stotal = Math.round(Number(this.jsonData[j].stotal));
            this.jsondata.itotal = Math.round(Number(this.jsonData[j].itotal));
            this.add = [this.jsondata.ctotal, this.jsondata.stotal, this.jsondata.itotal];
            this.jsondata.Jtotal = Math.round(Number(this.add.reduce((a, b) => a + b, 0)));
            //  console.log(this.jsondata.total);

            if (this.date[i] == this.jsonctotal[j]) {
              this.invTotal[i] = this.invdata;

              this.JsonTotal[j] = this.jsondata;
              this.invTotal = this.invTotal.concat(this.JsonTotal);

              this.array2[i] = this.invTotal.reduce((acc, cur) => ({ ...acc, ...cur }));

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
