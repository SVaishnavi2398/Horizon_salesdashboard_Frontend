import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Subregions } from '../subregions/subregions.model';

@Component({
  selector: 'app-subregionslist',
  templateUrl: './subregionslist.component.html',
  styleUrls: ['./subregionslist.component.scss']
})
export class SubregionslistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public subregionList: Array<Subregions> = [];
  subregionsArr:any;
  totalCount: any;
  searchsubregions:string;
  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;
 /***Searching***/
  region_name_search:"";
  subregion_name_Search: "";

  constructor(private dataservice:DataService, orderPipe: OrderPipe) { 
    this.sortedCollection = orderPipe.transform(this.subregionsArr, 'info.name');
  }

  ngOnInit(): void {
    this.getSubregionsData();
  }

  getSubregionsData(){
    this.dataservice.getSubregions().subscribe(res=>{
      this.subregionsArr=res;
      this.totalCount= this.subregionsArr.length;
      this.subregionList = this.getSubregionlist(this.totalCount);
    })
  }

  getSubregionlist(count) {

    let list = [];
  
  
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteSubregionsData(subproject_id){
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
  
        this.dataservice.deleteSubregions(subproject_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Subregion has been deleted.', 'success'); 
        this.getSubregionsData();
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
