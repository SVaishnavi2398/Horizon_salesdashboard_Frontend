import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Clientdetails } from './clientdetails.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.scss']
})
export class ClientdetailsComponent implements OnInit {

  clientdetails = new Clientdetails;
  registerForm : any;
  name: any;
  mobile1: any;
  email1: any;
  catrgory_id: any;
  date_of_birth: any;
  occupation_id: any;
  address: any;
 error = new Clientdetails;
  //alertify: any;
  constructor(
    private dataservice: DataService,
    private router: Router,
    private Token:TokenService,
  ) { }

  ngOnInit(): void {
  }

  submitclientdetails(editForm){
    this.dataservice.registerClientdetails(this.clientdetails).subscribe(
      //console.log(res);
      // Swal.fire('Added!', 'Team has been added.', 'success'); 
      // this.router.navigate(['/form/clientdetailslist']);
      // console.log(res);
      // editForm.reset();
      // this.reloadComponent();

      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );

  }


  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Client Details has been added.', 'success'); 
    this.router.navigateByUrl('/form/clientdetailslist');
  }

  
handleError(error){
    this.error = error.error.errors;
  }
  
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
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
