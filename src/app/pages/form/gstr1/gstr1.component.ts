import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-gstr1',
  templateUrl: './gstr1.component.html',
  styleUrls: ['./gstr1.component.scss']
})
export class Gstr1Component implements OnInit {
  
  invoicejoin: any;
  month: any;
  json_sgst_amt: any[] =[];
  json_cgst_amt: any[] =[];
  json_igst_amt: any[] =[];
  jArr: any;
  JsonTotal: any;
  constructor(
    private dataservice:DataService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.month = this.route.snapshot.params.id;
    this.getgstjson1();
  }

  getgstjson1() {
    this.dataservice.getSysJson(this.month).subscribe(res => {
      this.invoicejoin = res;
      
      for(var i = 0; i < this.invoicejoin.length; i++){
        this.json_sgst_amt = this.invoicejoin[i].samt;
        this.json_cgst_amt = this.invoicejoin[i].camt;
        this.json_igst_amt = this.invoicejoin[i].csamt;
        this.jArr = [this.json_sgst_amt, this.json_cgst_amt, this.json_igst_amt];
         this.invoicejoin[i].JsonTotal = Math.round(Number(this.jArr.reduce((a, b) => a + b, 0)));
        // console.log(this.invoicejoin.JsonTotal);
         
      }
     
    })
  }


}
