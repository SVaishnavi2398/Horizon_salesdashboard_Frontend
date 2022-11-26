import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { Emp } from './attendance.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderPipe } from 'ngx-order-pipe';
type AOA = any[][];
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  emp = new Emp;
  strIntoObj: Emp[];
  count = 0;
  empname: any;
  length: any;
  docs: any;
  error: any;
  arrayBuffer: any;
  filelist: any;
  fileinfo: any;
  filelist1: any;
  date_info: any;
  rate_info: any;
  invalidata: any;
  file: any;
  reportdate: any;
  empcode: any;
  // emp: any[] = [];
  name = 'Angular';
  fileName: string = 'SheetJS.xlsx';
  data: any;
  data1: any[] = [];
  filtered: any[] = [];
  headData: any // excel row header
  headData1: any
  dataArr: any;
  userdata: any[] = [];
  empdetails: any[] = [];
  attendanceArr: any;
  present: any;
  presentArr: any;
  date: any;
  month: any;
  empdata: any;
  empArr: any;
  empdataArr: any[] = [];
  arr: any[] = [];
  str: string;
  stringVal: any;
  emp1: any[] = [];
  emp2: any[] = [];
  absentArr: any;
  year: any;
  MonthArr: any;
  // counts: any;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  attData: any;
  empid: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  /**Searching***/
  emp_code_Search: "";
  emp_name_search: "";
  month_search: "";
  present_days_Search: "";
  absent_days_Search: "";
  half_days_search: "";
  late_marks_search: "";
  mn: any;


  constructor(
    private dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal,
    orderPipe: OrderPipe
  ) {
    this.sortedCollection = orderPipe.transform(this.empdata, 'info.name');
  }

  ngOnInit(): void {
    this.getMonth();


  }


  saveMultipleImage() {
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
      for (let j = 0; j < this.filelist.length; j++) {
        this.filelist1 = this.filelist[j];
        if (this.filelist1.__EMPTY_1 != null && this.filelist1.__EMPTY != "EmpCode") {
          this.year = new Date().getFullYear();
          this.emp.month = this.month;
          this.mn = this.emp.month.toString().length
          if (this.mn != 2) {
            this.emp.year = this.year + '-' + '0' + this.month;
          } else {
            this.emp.year = this.year + '-' + this.month;
          }
          this.emp.emp_code = this.filelist1.__EMPTY;
          this.emp.emp_name = this.filelist1.__EMPTY_1;
          this.emp.d1 = this.filelist1.__EMPTY_2;
          this.emp.d2 = this.filelist1.__EMPTY_3;
          this.emp.d3 = this.filelist1.__EMPTY_4;
          this.emp.d4 = this.filelist1.__EMPTY_5;
          this.emp.d5 = this.filelist1.__EMPTY_6;
          this.emp.d6 = this.filelist1.__EMPTY_8;
          this.emp.d7 = this.filelist1.__EMPTY_9;
          this.emp.d8 = this.filelist1.__EMPTY_10;
          this.emp.d9 = this.filelist1.__EMPTY_11;
          this.emp.d10 = this.filelist1.__EMPTY_12;
          this.emp.d11 = this.filelist1.__EMPTY_13;
          this.emp.d12 = this.filelist1.__EMPTY_14;
          this.emp.d13 = this.filelist1.__EMPTY_15;
          this.emp.d14 = this.filelist1.__EMPTY_16;
          this.emp.d15 = this.filelist1.__EMPTY_17;
          this.emp.d16 = this.filelist1.__EMPTY_28;
          this.emp.d17 = this.filelist1.__EMPTY_19;
          this.emp.d18 = this.filelist1.__EMPTY_20;
          this.emp.d19 = this.filelist1.__EMPTY_21;
          this.emp.d20 = this.filelist1.__EMPTY_22;
          this.emp.d21 = this.filelist1.__EMPTY_23;
          this.emp.d22 = this.filelist1.__EMPTY_24;
          this.emp.d23 = this.filelist1.__EMPTY_25;
          this.emp.d24 = this.filelist1.__EMPTY_26;
          this.emp.d25 = this.filelist1.__EMPTY_27;
          this.emp.d26 = this.filelist1.__EMPTY_28;
          this.emp.d27 = this.filelist1.__EMPTY_29;
          this.emp.d28 = this.filelist1.__EMPTY_30;
          this.emp.d29 = this.filelist1.__EMPTY_31;
          this.emp.d30 = this.filelist1.__EMPTY_32;
          this.emp.d31 = this.filelist1.__EMPTY_33;
          this.presentArr = [this.emp.d1, this.emp.d2, this.emp.d3, this.emp.d4, this.emp.d5,
          this.emp.d6, this.emp.d7, this.emp.d8, this.emp.d9, this.emp.d10, this.emp.d11, this.emp.d12,
          this.emp.d13, this.emp.d14, this.emp.d15, this.emp.d16, this.emp.d17, this.emp.d18, this.emp.d19, this.emp.d20,
          this.emp.d21, this.emp.d22, this.emp.d23, this.emp.d24, this.emp.d25, this.emp.d26, this.emp.d27, this.emp.d28, this.emp.d29, this.emp.d30, this.emp.d31]
          const counts = {};

          for (const num of this.presentArr) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
          }
          this.emp.present_days = counts["P"];

          const counts1 = {};

          for (const num1 of this.presentArr) {
            counts1[num1] = counts1[num1] ? counts1[num1] + 1 : 1;
          }
          this.emp.absent_days = counts1["A"];
          const counts2 = {};

          for (const num2 of this.presentArr) {
            counts2[num2] = counts2[num2] ? counts2[num2] + 1 : 1;
          }
          this.emp.half_days = counts2["P/2"];

          if (this.emp.absent_days == undefined) {
            this.emp.absent_days = 0;
          }

          if (this.emp.half_days == undefined) {
            this.emp.half_days = 0;
          }
          this.dataservice.add_emp_attentance(this.emp).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
          )
        }
      }
      this.show();
    }
  }

  handleResponse(data: any) {

    if (this.emp.emp_code == data.emp_code) {
      this.cancel();
      this.reloadComponent();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Data has been Added.',
        showConfirmButton: false,
        timer: 1500,
      });
    }


  }
  handleError(error: any) {
    this.error = error.error.errors;
    this.cancel();
    Swal.fire(
      'Cancelled',
      'Please Delete Empty Columns Of Excel File',
      'error'
    );

    // console.log(this.error);
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

    Swal.close();

  }
  addfilevent(event: any) {
    this.file = event.target.files[0];
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  get_data() {

    this.emp.month1 = this.emp.year + '-' + this.emp.month;
    console.log(this.emp)
    this.dataservice.get_attendance_monthwise(this.emp).subscribe(res => {
      this.empdata = res;
      //console.log(this.empdata);
    })
  }

  getMonth() {
    this.dataservice.getAllmonth().subscribe(res => {
      this.MonthArr = res;
    })
  }

  openModal(content: any, data: any) {

    this.attData = data;
    console.log(this.attData);
    this.modalService.open(content, this.attData);
  }

  update() {

    this.presentArr = [this.attData.d1, this.attData.d2, this.attData.d3, this.attData.d4, this.attData.d5,
    this.attData.d6, this.attData.d7, this.attData.d8, this.attData.d9, this.attData.d10, this.attData.d11, this.attData.d12,
    this.attData.d13, this.attData.d14, this.attData.d15, this.attData.d16, this.attData.d17, this.attData.d18, this.attData.d19, this.attData.d20,
    this.attData.d21, this.attData.d22, this.attData.d23, this.attData.d24, this.attData.d25, this.attData.d26, this.attData.d27, this.attData.d28, this.attData.d29, this.attData.d30]
    const counts = {};
    console.log(this.presentArr);
    for (const num of this.presentArr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    this.attData.present_days = counts["P"];
    const counts1 = {};

    for (const num1 of this.presentArr) {
      counts1[num1] = counts1[num1] ? counts1[num1] + 1 : 1;
    }
    this.attData.absent_days = counts1["A"];
    const counts2 = {};

    for (const num2 of this.presentArr) {
      counts2[num2] = counts2[num2] ? counts2[num2] + 1 : 1;
    }
    this.attData.half_days = counts2["P/2"];

    this.attData.late_marks = counts["L"];

    console.log(this.attData);

    this.empid = this.attData.emp_code;
    this.dataservice.updateAttendance(this.empid, this.attData).subscribe(
      data => this.handleResponse1(data),
      error => this.handleError2(error)

    )
  }

  handleResponse1(data: any) {
    //this.codes = data;
    this.closeModal(content);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Employee Attendance has been Updated.',
      showConfirmButton: false,
      timer: 1500,
    });
    // console.log(data);
  }

  handleError2(error: any) {
    this.error = error.error.errors;
    //console.log(this.error);
  }

  closeModal(content: any) {
    this.modalService.dismissAll(content);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
function content(content: any) {
  throw new Error('Function not implemented.');
}

