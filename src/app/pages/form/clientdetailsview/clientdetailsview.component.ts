import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { DataService } from 'src/app/service/data.service';
import { Clientdetails } from '../clientdetails/clientdetails.model';


@Component({
  selector: 'app-clientdetailsview',
  templateUrl: './clientdetailsview.component.html',
  styleUrls: ['./clientdetailsview.component.scss']
})
export class ClientdetailsviewComponent implements OnInit {

  clientdetailsid: any;
  clientdetails = new Clientdetails;
  data: any;
  id: any;
  previousUrl: any;
  url: any;
  id1: any;
  error: any;
  arr: any;

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientdetailsid = this.route.snapshot.params.id;
    this.id = Number(this.clientdetailsid) + Number(1);
    this.id1 = Number(this.clientdetailsid) - Number(1);
    this.getClientdetailsData();
  }

  getClientdetailsData() {
    this.dataservice.getOneClientdetails(this.clientdetailsid).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.clientdetails = data;
  }


  handleError(error) {
    if (this.clientdetailsid != '0') {
      this.url = '/form/clientdetailsview/' + 1;
      this.reloadComponent(this.url);
    }
    else {
      this.dataservice.getClientdetails().subscribe(res => {
        this.data = res;
        var lastid = this.data[0].client_id;
        this.url = '/form/clientdetailsview/' + lastid;
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
    this.url = '/form/clientdetailsview/' + this.id;
    this.reloadComponent(this.url);
  }
  doSomeLogics() {
    this.url = '/form/clientdetailsview/' + this.id1;
    this.reloadComponent(this.url);
  }

  back() {
    window.history.back();
  }

}
