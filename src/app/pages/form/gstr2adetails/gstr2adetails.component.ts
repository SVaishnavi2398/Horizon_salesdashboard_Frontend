import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gstr2adetails',
  templateUrl: './gstr2adetails.component.html',
  styleUrls: ['./gstr2adetails.component.scss']
})
export class Gstr2adetailsComponent implements OnInit {
  invoicejoin: any;
  month: any;
  json_sgst_amt: any[] =[];
  json_cgst_amt: any[] =[];
  json_igst_amt: any[] =[];
  jArr: any[];
  b2bdata: any;
  gstr2Adata: any;

  constructor(
    private dataservice :DataService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.month=this.route.snapshot.params.id;
    this.gstr2Ajson();
    //this.getallData();
  }

  gstr2Ajson() {
    this.dataservice.getGstr2aJoin(this.month).subscribe(res => {
      //console.log(res);
      this.invoicejoin = res;
      for(var i = 0; i < this.invoicejoin.length; i++){
        this.json_sgst_amt = this.invoicejoin[i].samt;
        this.json_cgst_amt = this.invoicejoin[i].camt;
        this.json_igst_amt = this.invoicejoin[i].iamt;
        this.jArr = [this.json_sgst_amt, this.json_cgst_amt, this.json_igst_amt];
         this.invoicejoin[i].JsonTotal = Math.round(Number(this.jArr.reduce((a, b) => a + b, 0)));
         //console.log(this.invoicejoin[i].JsonTotal);
      }
    })
  }

  // getallData(){

  //   this.dataservice.b2bInvoiceDetails().subscribe(res => {
  //     this.b2bdata = res;
  //     console.log(this.b2bdata);

  //     this.dataservice.Gstr2ADetails().subscribe(res => {
  //       this.gstr2Adata = res;
  //       console.log(this.gstr2Adata);
  //     })
  //   })
  // }

}
