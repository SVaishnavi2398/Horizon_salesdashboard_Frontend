import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Default } from './default.model';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnInit {

  default = new Default;
  variable: any[];
  ChartType: { chart: { height: number; type: string; stacked: boolean; toolbar: { show: boolean; }; }; plotOptions: { bar: { columnWidth: string; }; }; colors: string[]; series: { data: any[]; }[]; fill: { opacity: number[]; gradient: { inverseColors: boolean; shade: string; type: string; opacityFrom: number; opacityTo: number; stops: number[]; }; }; labels: string[]; xaxis: { type: string; }; yaxis: { title: { text: string; }; }; grid: { borderColor: string; }; };

  constructor(private dataservice: DataService) { }

  ngOnInit() {

    this.FormCountActive();
    this.getUsers();
    this.getProjects();
    this.getSalesdetails();
    this.getInvoicedetails();
    this.getCompanyData();
  }


  userscount: any;
  projectscount: any;
  salescount: any;
  invoicescount: any;
  usersArr: any;
  projectsArr: any;
  salesArr: any;
  invoicesArr: any;
  companylistArr: any;
  sourcecount: any;
  source: any;
  sourcename: any;
  value: any[] = [];
  labels: any[] = [];
  index: any;
  value1: any;
  Count: any;
  Count1: any;
  Count2: any;
  Count3: any;
  Count4: any;
  Count5: any;
  Count6: any;
  Count7: any;
  Count8: any;
  Count9: any;
  Count10: any;
  Count11: any;
  Count12: any;
  Count13: any;
  Count14: any;
  Count15: any;
  Count16: any;
  Count17: any;
  countArr: any;
  count1Arr: any;
  date1: any;
  date2: any;


  getUsers() {
    this.dataservice.getUsers().subscribe(res => {
      this.usersArr = res;
      this.userscount = this.usersArr.length;
    });
  }

  getProjects() {
    this.dataservice.getProjects().subscribe(res => {
      this.projectsArr = res;
      this.projectscount = this.projectsArr.length;
    });
  }

  getSalesdetails() {
    this.dataservice.getSalesdetails().subscribe(res => {
      this.salesArr = res;
      this.salescount = this.salesArr.length;
    });
  }

  getInvoicedetails() {
    this.dataservice.getInvoicedetails().subscribe(res => {
      this.invoicesArr = res;
      this.invoicescount = this.invoicesArr.length;
    });
  }

  getCompanyData() {
    this.dataservice.getCompany().subscribe(res => {
      this.companylistArr = res;
    })
  }

  FormCountActive() {
    this.dataservice.getSalescount().subscribe(res => {
      this.sourcecount = res;

      //this.Count = this.sourcecount.toString();
      //this.Count1 = this.Count.replace(',',', ');
      //this.Count1= (this.Count.split(',').join(', ')).trim();

      this.Count1 = this.sourcecount[0];
      this.Count2 = this.sourcecount[1];
      this.Count3 = this.sourcecount[2];
      this.Count4 = this.sourcecount[3];
      this.Count5 = this.sourcecount[4];
      this.Count6 = this.sourcecount[5];
      this.Count7 = this.sourcecount[6];
      this.Count8 = this.sourcecount[7];
      this.Count9 = this.sourcecount[8];
      this.Count10 = this.sourcecount[9];
      this.Count11 = this.sourcecount[10];
      this.Count12 = this.sourcecount[11];
      this.Count13 = this.sourcecount[12];
      this.Count14 = this.sourcecount[13];
      this.Count15 = this.sourcecount[14];
      this.Count16 = this.sourcecount[15];
      this.Count17 = this.sourcecount[16];

      //console.log(this.Count1);

      this.ChartType = {
        chart: {
          height: 320,
          type: 'bar',
          stacked: false,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '30%'
          }
        },
        colors: ['#556ee6', '#dcdfe3', '#f1b44c'],
        series: [{
          data: [this.Count1, this.Count2, this.Count3, this.Count4, this.Count5, this.Count6, this.Count7, this.Count8, this.Count9, this.Count10, this.Count11, this.Count12, this.Count13, this.Count14, this.Count15, this.Count16, this.Count17]
        }],
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['Housingpushall', 'Channel Partner', 'Conference', 'Direct', 'Existing Customber', 'Housing', 'Mail Service', 'Other', 'Pamplet Distribution', 'Public Relations', 'Self Generated', 'SMS Marketing', 'Tele-Marketing', 'Web Call', 'Website', 'Whatsapp Marketing', 'Word Of Mouth'],
        xaxis: {
          type: 'Text',
        },
        yaxis: {
          title: {
            text: 'Points',
          },
        },
        grid: {
          borderColor: '#5b73e8'
        }
      };





    })

  }

  monthnumber1(event) {
    console.log(event.target.value);
    this.date1 = event.target.value;
    var date = new Date(event.target.value);
    console.log(date);

    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    console.log(firstDay.getFullYear());
    console.log(firstDay.getMonth() + 1);
    console.log(firstDay.getDate());
    //console.log(this.date1);
    console.log(firstDay);
    console.log(lastDay);
  }

  monthnumber2(event) {
    //console.log(event.target.value);
    this.date2 = event.target.value
    //console.log(this.date2);
  }

  getApply() {

    this.variable = [this.date1, this.date2]
    console.log(this.variable);

    this.dataservice.getcount1(this.variable).subscribe(res => {
      this.countArr = res;
      console.log(res);

      this.Count1 = this.countArr[0];
      this.Count2 = this.countArr[1];
      this.Count3 = this.countArr[2];
      this.Count4 = this.countArr[3];
      this.Count5 = this.countArr[4];
      this.Count6 = this.countArr[5];
      this.Count7 = this.countArr[6];
      this.Count8 = this.countArr[7];
      this.Count9 = this.countArr[8];
      this.Count10 = this.countArr[9];
      this.Count11 = this.countArr[10];
      this.Count12 = this.countArr[11];
      this.Count13 = this.countArr[12];
      this.Count14 = this.countArr[13];
      this.Count15 = this.countArr[14];
      this.Count16 = this.countArr[15];
      this.Count17 = this.countArr[16];

      //console.log(this.Count1);

      this.ChartType = {
        chart: {
          height: 320,
          type: 'bar',
          stacked: false,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '30%'
          }
        },
        colors: ['#556ee6', '#dcdfe3', '#f1b44c'],
        series: [{
          data: [this.Count1, this.Count2, this.Count3, this.Count4, this.Count5, this.Count6, this.Count7, this.Count8, this.Count9, this.Count10, this.Count11, this.Count12, this.Count13, this.Count14, this.Count15, this.Count16, this.Count17]
        }],
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['Housingpushall', 'Channel Partner', 'Conference', 'Direct', 'Existing Customber', 'Housing', 'Mail Service', 'Other', 'Pamplet Distribution', 'Public Relations', 'Self Generated', 'SMS Marketing', 'Tele-Marketing', 'Web Call', 'Website', 'Whatsapp Marketing', 'Word Of Mouth'],
        xaxis: {
          type: 'Text',
        },
        yaxis: {
          title: {
            text: 'Points',
          },
        },
        grid: {
          borderColor: '#5b73e8'
        }
      };
    });
  }



}
