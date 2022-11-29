import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Designations } from './designations.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.scss']
})
export class DesignationsComponent implements OnInit {

  designations = new Designations();
  error = new Designations();

  constructor(private dataservice: DataService,
    private route: Router,
    private Token:TokenService) { }

  ngOnInit(): void {
  }

  submitdesignation(){
    this.dataservice.registerDesignations(this.designations).subscribe(
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
    }
  
  
    handleResponse(data){
      this.Token.handle(data.access_token);
      Swal.fire('Added!', 'Designation has been added.', 'success');
      this.route.navigate(['/form/designationslist']);
    }
  
     
    handleError(error){
      this.error = error.error.errors;
    }

}
