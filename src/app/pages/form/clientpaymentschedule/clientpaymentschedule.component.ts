import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Clientpaymentschedule } from './clientpaymentschedule.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-clientpaymentschedule',
  templateUrl: './clientpaymentschedule.component.html',
  styleUrls: ['./clientpaymentschedule.component.scss']
})
export class ClientpaymentscheduleComponent implements OnInit {

  salesArr : any;
  usersArr : any;
  clientpaymentschedule = new Clientpaymentschedule();
  error = new Clientpaymentschedule();

  constructor(private dataservice: DataService,
    private route: Router,
    private Token:TokenService) { }

  ngOnInit(): void {
    this.getSalesData();
    this.getUserData();
  }

  getSalesData(){
    this.dataservice.getSaleslist().subscribe(res=>{
      //console.log(res);
      this.salesArr = res;
    })
  }

  getUserData(){
    this.dataservice.getUsers().subscribe(res=>{
      this.usersArr = res;
    })
  }

  submitclietpaymentschedule(){
    this.dataservice.registerClientpaymentschedule(this.clientpaymentschedule).subscribe( 
        data=>this.handleResponse(data),
        error=>this.handleError(error)
  );
}

handleResponse(data){
  this.Token.handle(data.access_token);
  Swal.fire('Added!', 'Client Payment Schedule has been added.', 'success'); 
  this.route.navigateByUrl('/form/clientpaymentschedulelist');
}

 
handleError(error){
  this.error = error.error.errors;
}

}
