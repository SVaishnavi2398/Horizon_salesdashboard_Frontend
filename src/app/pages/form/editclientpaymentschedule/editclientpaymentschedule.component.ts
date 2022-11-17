import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Clientpaymentschedule } from '../clientpaymentschedule/clientpaymentschedule.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editclientpaymentschedule',
  templateUrl: './editclientpaymentschedule.component.html',
  styleUrls: ['./editclientpaymentschedule.component.scss']
})
export class EditclientpaymentscheduleComponent implements OnInit {

  clientpaymentscheduleid : any;
  clientpaymentschedule = new Clientpaymentschedule;
  data : any;
  salesArr : any;
  usersArr : any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientpaymentscheduleid=this.route.snapshot.params.id;
    this.getClientpaymentscheduleData();
    this.getSales();
    this.getUsers();
  }

  getSales(){
    this.dataservice.getSaleslist().subscribe(res=>{
      //console.log(res);
      this.salesArr = res;
    })
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  getClientpaymentscheduleData(){
    this.dataservice.getOneClientpaymentschedule(this.clientpaymentscheduleid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.clientpaymentschedule=this.data;
    })
  }

  updateclietpaymentschedule(){
    this.dataservice.updateClientpaymentschedule(this.clientpaymentscheduleid,this.clientpaymentschedule).subscribe(res=>{
      console.log(res);
      Swal.fire('Updated!', 'Client Payment Schedule has been updated.', 'success'); 
      this.router.navigate(['/form/clientpaymentschedulelist']);
      })
  }

}
