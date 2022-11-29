import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Designations } from '../designations/designations.model';

@Component({
  selector: 'app-designationslist',
  templateUrl: './designationslist.component.html',
  styleUrls: ['./designationslist.component.scss']
})
export class DesignationslistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  designationsArr:any;
  totalCount: any;
  public designation: Array<Designations> = [];
  searchdesignationslist:any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getDesignationsData();
  }

  getDesignationsData(){
    this.dataservice.getDesignations().subscribe(res=>{
      this.designationsArr=res;
      this.totalCount= this.designationsArr.length;
      this.designation = this.getUsers1(this.totalCount);
    })
  }

  getUsers1(count) {
    let list = [];
    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteDesignationsData(designation_id){
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
  
        this.dataservice.deleteDesignations(designation_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Team has been deleted.', 'success'); 
        this.getDesignationsData();
        });
  
      }
    })
  
  }

}
