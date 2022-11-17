import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-designationslist',
  templateUrl: './designationslist.component.html',
  styleUrls: ['./designationslist.component.scss']
})
export class DesignationslistComponent implements OnInit {

  designationsArr:any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getDesignationsData();
  }

  getDesignationsData(){
    this.dataservice.getDesignations().subscribe(res=>{
      this.designationsArr=res;
    })
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
