import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Subregions } from './subregions.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-subregions',
  templateUrl: './subregions.component.html',
  styleUrls: ['./subregions.component.scss'],
  
})
export class SubregionsComponent implements OnInit {
  
  region_id :any; 
  regionsArr :any;
  subregions = new Subregions();
  error = new Subregions();


  constructor(private route:ActivatedRoute,
    private router:Router,
    private dataservice:DataService,
    private Token:TokenService
    ) { }

  ngOnInit(): void {
    this.getRegion();
  }

  getRegion(){
    this.dataservice.getRegionslist().subscribe(res=>{
      this.regionsArr = res;
    })
  }

  getRegionid(event){
      var obj = {
        region_id : event.target.value
      }

      this.dataservice.registerSubregions(this.subregions).subscribe(res =>{
       
    })


  }

  submitsubregion(){
    console.log(this.subregions)
    this.dataservice.registerSubregions(this.subregions).subscribe(
        
       
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
    }
  
  
    handleResponse(data){
      //console.log(data);
      this.Token.handle(data.access_token);
      Swal.fire('Added!', 'Subegion has been added.', 'success'); 
        this.router.navigate(['/form/subregionslist']);
    }
  
     
    handleError(error){
      this.error = error.error.errors;
    }

}
