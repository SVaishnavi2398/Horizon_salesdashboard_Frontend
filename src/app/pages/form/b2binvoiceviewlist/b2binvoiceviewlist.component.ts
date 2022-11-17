import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { b2bInv } from './b2bInvDetails.model';

@Component({
  selector: 'app-b2binvoiceviewlist',
  templateUrl: './b2binvoiceviewlist.component.html',
  styleUrls: ['./b2binvoiceviewlist.component.scss']
})
export class B2binvoiceviewlistComponent implements OnInit {
  inv_no: any;
  b2bDetails = new b2bInv;
  data: any;

  constructor(
    private dataservice : DataService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inv_no = this.route.snapshot.params.id;
    this.getInvoicedetailsData();
  }

  getInvoicedetailsData() {
    this.dataservice.getB2bInvData(this.inv_no).subscribe(res=>{
      this.data= res;
       this.b2bDetails = this.data[0];
      //console.log(res);
    });
  }

}
