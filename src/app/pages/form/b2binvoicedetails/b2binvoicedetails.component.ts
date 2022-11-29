import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { b2binvoicedetails } from './b2binvoicedetails.model';

@Component({
  selector: 'app-b2binvoicedetails',
  templateUrl: './b2binvoicedetails.component.html',
  styleUrls: ['./b2binvoicedetails.component.scss']
})
export class B2binvoicedetailsComponent implements OnInit {
  B2Bdetails = new b2binvoicedetails;
  data: any;
  id: any;
  Supp_gstin: any;
  url: any;
  id1: any;
  id2: any;
  b2bid: any;
  B2Bdetails1: any;

  constructor(
    private dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.b2bid = this.route.snapshot.params.id;
    this.id1 = Number(this.b2bid) + Number(1);
    this.id2 = Number(this.b2bid) - Number(1);
    this.getInvoicedetailsData();
  }

  getInvoicedetailsData() {
    this.dataservice.getOneB2bInvdetails(this.b2bid).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data: any) {
    this.B2Bdetails = data;
  }
  handleError(error) {
    if (this.b2bid != '0') {
      this.url = '/form/b2binvoicedetails/' + 1;
      this.reloadComponent(this.url);
    }
    else {
      this.dataservice.b2bInvoiceDetails().subscribe(res => {
        this.data = res;
        var lastid = this.data.length;
        this.url = '/form/b2binvoicedetails/' + lastid;
        this.reloadComponent(this.url);
      })
    }
  }

  reloadComponent(url) {
    let currentUrl = url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  doSomeLogic() {
    this.url = '/form/b2binvoicedetails/' + this.id1;
    error => this.handleError(error);
    this.reloadComponent(this.url);
  }
  doSomeLogics() {
    this.url = '/form/b2binvoicedetails/' + this.id2;
    error => this.handleError(error);
    this.reloadComponent(this.url);
  }

  goback() {
    this.url = '/form/b2binvoices/';
    this.reloadComponent(this.url);
  }
}
