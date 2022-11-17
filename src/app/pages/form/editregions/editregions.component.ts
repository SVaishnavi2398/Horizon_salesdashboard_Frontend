import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Regions } from '../regions/regions.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editregions',
  templateUrl: './editregions.component.html',
  styleUrls: ['./editregions.component.scss']
})
export class EditregionsComponent implements OnInit {

  regionid:any;
  regions= new Regions;
  data:any;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private dataservice:DataService
  ) { }

  ngOnInit(): void {
    this.regionid=this.route.snapshot.params.id;
    this.getRegionData();
  }

  getRegionData(){
    this.dataservice.getOneRegions(this.regionid).subscribe(res=>{
      //console.log(res);
      this.data=res;
      this.regions=this.data;
  })
  }

  updateregion(){
    this.dataservice.updateRegions(this.regionid,this.regions).subscribe(res=>{
          //console.log(res);
          Swal.fire('Updated!', 'Region has been updated.', 'success'); 
          this.router.navigate(['/form/regionslist']);
          //this.data=res;
          //this.roles=this.data;
    })
  }
  

}
