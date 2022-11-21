import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Advancesalary } from '../advancesalary/advancesalary.model';

@Component({
  selector: 'app-advancesalarylist',
  templateUrl: './advancesalarylist.component.html',
  styleUrls: ['./advancesalarylist.component.scss']
})
export class AdvancesalarylistComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public advancesalaryList: Array<Advancesalary> = [];
  searchadvancesalary:any;
  advancesalaryArr:any;
  totalCount: any;

   /***Sorting***/
   order: string = 'info.name';
   reverse: boolean = false;
   sortedCollection: any[];
   caseInsensitive: boolean = false;

    /***Searching ***/
    firstname_Search: "";
    advanced_paid_date_search: "";
    emi_amount_Search: "";
    repaid_amount_Search:"";
    balance_amount_Search: "";
    paid_Search: "";
    status_Search:"";
    pending_amount_Search:"";
    adv_amount_Search: "";
  deduction_amount: any;


  constructor(private dataservice:DataService, orderPipe: OrderPipe) { 
    this.sortedCollection = orderPipe.transform(this.advancesalaryArr, 'info.name');

  }

  ngOnInit(): void {
    this.getAdvancesalaryData();
  }

  getAdvancesalaryData(){
    this.dataservice.getAdvancesalary().subscribe(res=>{
      this.advancesalaryArr=res;
      //console.log(this.advancesalaryArr);
      this.totalCount= this.advancesalaryArr.length;
      this.advancesalaryList = this.getAdvancesalaryData1(this.totalCount);
    })
  }

  getAdvancesalaryData1(count) {

    let list = [];
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteAdvancesalaryData(advance_salary_id){
    Swal.fire({
      title: 'Are you sure?',
      //text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then(res => {
      if (res.value) {
  
        this.dataservice.deleteAdvancesalary(advance_salary_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Advance Salary has been deleted.', 'success'); 
        this.getAdvancesalaryData();
        });
  
      }
    })
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  getuseremi(event){
    console.log('hello',event.target.value);
    this.deduction_amount =event.target.value;
    this.dataservice.getUserEmi(this.deduction_amount).subscribe(res=>{
      // this.amount1=res;
      // this.advanceAmt= JSON.stringify(res[0].amount)
      //console.log("333",this.amount1);
      console.log('hi',JSON.stringify(res[0].amount));
      
     
    })
  }

}

