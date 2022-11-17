import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Salarypackage } from '../salarypackage/salarypackage.model';

@Component({
  selector: 'app-salarypackagelist',
  templateUrl: './salarypackagelist.component.html',
  styleUrls: ['./salarypackagelist.component.scss']
})
export class SalarypackagelistComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public salarypackageList: Array<Salarypackage> = [];
  searchsalarypackage:string;
  salarypackageArr:any;
  totalCount: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  /***Searching***/
  firstname_Search: "";
  from_date_Search: "";
  basic_pay_Search: "";
  monthly_salary_Search: "";
  yearly_salary_Search: "";

  constructor(private dataservice:DataService,orderPipe: OrderPipe) { 
    this.sortedCollection = orderPipe.transform(this.salarypackageArr, 'info.name');
  }

  ngOnInit(): void {
    this.getSalarypackageData();
  }

  getSalarypackageData(){
    this.dataservice.getSalarypackage().subscribe(res=>{
      this.salarypackageArr=res;
      this.totalCount= this.salarypackageArr.length;
      this.salarypackageList = this.getSalarypackageData1(this.totalCount);
    })
  }

  getSalarypackageData1(count) {

    let list = [];
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteSalarypackageData(salary_package_id){
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
  
        this.dataservice.deleteSalarypackage(salary_package_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Team has been deleted.', 'success'); 
        this.getSalarypackageData();
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
