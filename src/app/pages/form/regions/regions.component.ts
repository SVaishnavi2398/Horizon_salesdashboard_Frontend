import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Regions } from './regions.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regions = new Regions();
  error = new Regions();

  constructor(private dataservice: DataService,
    private route: Router,
    private Token:TokenService

    ) { }

  ngOnInit(): void {
  }


  submitregion(){
    this.dataservice.registerRegions(this.regions).subscribe(
        //console.log(res);
      
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
    }
  
  
    handleResponse(data){
      this.Token.handle(data.access_token);
      Swal.fire('Added!', 'Region has been added.', 'success'); 
      this.route.navigate(['/form/regionslist']);
    }
  
     
    handleError(error){
      this.error = error.error.errors;
    }

}
