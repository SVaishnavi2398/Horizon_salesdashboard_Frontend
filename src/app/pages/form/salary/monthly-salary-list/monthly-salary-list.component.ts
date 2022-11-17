import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Monthlysalary } from '../monthly-salary/monthly-salary.model';
@Component({
  selector: 'app-monthly-salary-list',
  templateUrl: './monthly-salary-list.component.html',
  styleUrls: ['./monthly-salary-list.component.scss']
})
export class MonthlySalaryListComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public monthlysalaryList: Array<Monthlysalary> = [];
  searchmonthlysalary:string;
  monthlysalaryArr : any;
  totalCount: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

   /***Searching ***/
   firstname_Search: "";
   salary_month_Search: "";
   absent_days_Search: "";
   no_of_late_marks_Search:"";
   penalty_leave_days_Search: "";
   extra_days_Search: "";

  constructor(private dataservice:DataService,
    orderPipe: OrderPipe) { 
      this.sortedCollection = orderPipe.transform(this.monthlysalaryArr, 'info.name');
    }

  ngOnInit(): void {
    this.getMonthlysalaryData();
  }

  getMonthlysalaryData(){
    this.dataservice.getMonthlysalary().subscribe(res=>{
      this.monthlysalaryArr=res;
      this.totalCount= this.monthlysalaryArr.length;
      this.monthlysalaryList = this.getMonthlysalaryData1(this.totalCount);
    })
  }

  getMonthlysalaryData1(count) {

    let list = [];
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteMonthlysalaryData(monthly_salary_id){
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
  
        this.dataservice.deleteMonthlysalary(monthly_salary_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Monthly Salary been deleted.', 'success'); 
        this.getMonthlysalaryData();
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
