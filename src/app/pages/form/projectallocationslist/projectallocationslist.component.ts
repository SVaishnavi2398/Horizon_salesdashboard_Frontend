import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
//import { Projectallocations } from './projectallocartions.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Projectallocations } from '../projectallocations/projectallocartions.model';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-projectallocationslist',
  templateUrl: './projectallocationslist.component.html',
  styleUrls: ['./projectallocationslist.component.scss']
})
export class ProjectallocationslistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public projectallocationList: Array<Projectallocations> = [];
  searchprojectallocations: string;
  projectallocationsArr: any;
  search: string;
  totalCount: any;
  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;
  /***Searching***/
  firstname_search:"";
  project_name_Search: "";
  subproject_name_Search: "";

  constructor(private dataservice: DataService,
    private route: Router,
    private http: HttpClient,
    orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.projectallocationsArr, 'info.name');
  }

  ngOnInit(): void {
    this.getProjectallocationsData();
  }

  getProjectallocationsData() {
    this.dataservice.getProjectAllocations().subscribe(res => {
      this.projectallocationsArr = res;
     // console.log(this.projectallocationsArr);
      this.totalCount = this.projectallocationsArr.length;
      this.projectallocationList = this.getProjectallocation(this.totalCount);
    })
  }

  getProjectallocation(count) {

    let list = [];


    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({ random: Math.random() });
    }
    return list;
  }
  deleteProjectallocationsData(projectallocation_id) {
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

        this.dataservice.deleteProjectAllocations(projectallocation_id).subscribe(res => {
          Swal.fire('Deleted!', 'Team has been deleted.', 'success');
          this.getProjectallocationsData();
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
