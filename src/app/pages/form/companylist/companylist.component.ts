import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import { Company } from '../company/company.model';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.scss']
})
export class CompanylistComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  companylistArr : any;
  searchcompanylist : string;
  totalCount: any;
  public companyList: Array<Company> = [];

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

   /***Searching***/
   cname_Search: "";
   cpan_search:"";
   cgst_Search: "";
   registered_address_Search:"";
   contact1_Search:"";
   email1_Search: "";

  constructor(private dataservice:DataService,  orderPipe: OrderPipe) { 
    this.sortedCollection = orderPipe.transform(this.companylistArr, 'info.name');

  }

  ngOnInit(): void {
    this.getCompanyData();
  }

  getCompanyData(){
    this.dataservice.getCompany().subscribe(res=>{
      this.companylistArr=res;
      this.totalCount= this.companylistArr.length;
      this.companyList = this.getUsers1(this.totalCount);

    })
  }

  getUsers1(count) {

    let list = [];
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
