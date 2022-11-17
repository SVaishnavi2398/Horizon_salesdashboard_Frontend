import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Subprojects } from '../subprojects/subprojects.model';

@Component({
  selector: 'app-subprojectslist',
  templateUrl: './subprojectslist.component.html',
  styleUrls: ['./subprojectslist.component.scss']
})


export class SubprojectslistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public subprojectsList: Array<Subprojects> = [];
  searchsubprojects:string;
  subprojectsArr:any;
  totalCount: any;

   /***Sorting***/
   order: string = 'info.name';
   reverse: boolean = false;
   sortedCollection: any[];
   caseInsensitive: boolean = false;
    /***Searching***/
    project_name_search : "";
    subproject_name_Search:"";
    rera_Search: "";

  constructor(private dataservice:DataService ,orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.subprojectsArr, 'info.name');
   }

  ngOnInit(): void {
    this.getSubprojectsData();
  }

  getSubprojectsData(){
    this.dataservice.getSubprojects().subscribe(res=>{
      this.subprojectsArr=res;
      this.totalCount= this.subprojectsArr.length;
      this.subprojectsList = this.getSubprojectlist(this.totalCount);
    })
  }

  getSubprojectlist(count) {

    let list = [];
  
  
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteSubprojectsData(subproject_id){
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
  
        this.dataservice.deleteSubprojects(subproject_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Team has been deleted.', 'success'); 
        this.getSubprojectsData();
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
