import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Advanceemi } from '../advance-emi/advance-emi.model';

@Component({
  selector: 'app-advance-emi-list',
  templateUrl: './advance-emi-list.component.html',
  styleUrls: ['./advance-emi-list.component.scss']
})
export class AdvanceEmiListComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public advanceemiList: Array<Advanceemi> = [];
  searchadvanceemi:string;
  advanceemiArr:any;
  totalCount: any;
  data:any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;
 /****Searching */
 firstname_Search: "";
 emi_deduct_date_search: "";
 emi_amount_Search: "";
 deduction_amount_search:"";
 remark_Search: "";

  constructor(private dataservice:DataService, orderPipe: OrderPipe) { 
    this.sortedCollection = orderPipe.transform(this.advanceemiArr, 'info.name');

  }

  ngOnInit(): void {
    this.getAdvanceemiData();
  }

  getAdvanceemiData(){
    this.dataservice.getAdvanceemi().subscribe(res=>{
      this.advanceemiArr=res;
      this.totalCount= this.advanceemiArr.length;
      this.advanceemiList = this.getAdvanceemiData1(this.totalCount);
    })
  }

  getAdvanceemiData1(count) {

    let list = [];
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteAdvanceemiData(emi_id){
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
  
        this.dataservice.deleteAdvanceemi(emi_id,this.data).subscribe(res=>{
        Swal.fire('Deleted!', 'Advance EMI has been deleted.', 'success'); 
        this.getAdvanceemiData();
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
