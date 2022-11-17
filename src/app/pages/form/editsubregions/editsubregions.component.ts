import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Subregions } from '../subregions/subregions.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editsubregions',
  templateUrl: './editsubregions.component.html',
  styleUrls: ['./editsubregions.component.scss']
})
export class EditsubregionsComponent implements OnInit {
  region_id :any; 
  regionsArr :any;
  subregionid:any;
  subregions= new Subregions;
  data:any;
  

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private dataservice:DataService
  ) { }

  ngOnInit(): void {
    this.subregionid=this.route.snapshot.params.id;
      this.getSubregionData();
      this.getRegion();
  }

  getSubregionData(){
    this.dataservice.getOneSubregions(this.subregionid).subscribe(res=>{
      this.data=res;
      this.subregions=this.data;
  })
  }


  getRegion(){
    this.dataservice.getRegionslist().subscribe(res=>{
      this.regionsArr = res;
      
    })
  }

  updateregions(){
    this.dataservice.updateSubregions(this.subregionid,this.subregions).subscribe(res=>{
          //console.log(res);
          Swal.fire('Updated!', 'Subregion has been updatd.', 'success');
          this.router.navigate(['/form/subregionslist']);
          //this.data=res;
          //this.roles=this.data;
    })
  }
  

}
