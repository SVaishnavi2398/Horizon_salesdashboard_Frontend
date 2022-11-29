import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Company } from './company.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company = new Company();
  error = new Company();

  constructor(
    private dataservice: DataService,
    private route: Router,
    private Token:TokenService) { }

  ngOnInit(): void {
  }

  submitcompnay(editForm){
    this.dataservice.registerCompany(this.company).subscribe(
     data=>this.handleResponse(data),
     error=>this.handleError(error)
   );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Compnay has been added.', 'success'); 
    this.route.navigate(['/form/companylist']);
  }

 handleError(error){
    this.error = error.error.errors;
  }

  keyPressAlphanumeric(event) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}
