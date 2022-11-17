import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Monthlysalary } from '../monthly-salary/monthly-salary.model';

@Component({
  selector: 'app-monthly-target-list',
  templateUrl: './monthly-target-list.component.html',
  styleUrls: ['./monthly-target-list.component.scss']
})
export class MonthlyTargetListComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public monthlysalaryList: Array<Monthlysalary> = [];
  searchmonthlytarget:string;
  monthlytargetArr:any;
  totalCount: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;
  /***Searching ***/
  firstname_Search: "";
  from_date_Search: "";
  to_date_Search: "";
  status_Search:"";

  constructor(private dataservice:DataService, orderPipe: OrderPipe) { 
    this.sortedCollection = orderPipe.transform(this.monthlytargetArr, 'info.name');

  }

  ngOnInit(): void {
    this.getMonthlytargetData();
  }

  getMonthlytargetData(){
    this.dataservice.getMonthlytarget().subscribe(res=>{
      this.monthlytargetArr=res;
      this.totalCount= this.monthlytargetArr.length;
      this.monthlysalaryList = this.getMonthlytargetData1(this.totalCount);
    })
  }

  getMonthlytargetData1(count) {

    let list = [];
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteMonthlytargetData(monthly_target_id){
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
  
        this.dataservice.deleteMonthlytarget(monthly_target_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Monthly Target been deleted.', 'success'); 
        this.getMonthlytargetData();
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

}
