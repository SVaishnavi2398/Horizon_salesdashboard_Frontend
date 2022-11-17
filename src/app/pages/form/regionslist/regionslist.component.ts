import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Regions } from '../regions/regions.model';

@Component({
  selector: 'app-regionslist',
  templateUrl: './regionslist.component.html',
  styleUrls: ['./regionslist.component.scss']
})
export class RegionslistComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public regionsList: Array<Regions> = [];
  searchregions:string;
  regionsArr:any;
  totalCount: any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getRegionsData();
  }

  getRegionsData(){
    this.dataservice.getRegions().subscribe(res=>{
      this.regionsArr=res;
      this.totalCount= this.regionsArr.length;
      this.regionsList = this.getRegionlist(this.totalCount);
    })
  }

  getRegionlist(count) {

    let list = [];
  
  
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteRegionsData(region_id){
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
  
        this.dataservice.deleteRegions(region_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Team has been deleted.', 'success'); 
        this.getRegionsData();
        });
  
      }
    })
  }

}
