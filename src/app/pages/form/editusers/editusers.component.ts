import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Newusers } from '../newusers/newusers.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.scss']
})
export class EditusersComponent implements OnInit {
  
  designationArr :any;
  empstatusArr :any;
  usersid:any;
  name:any;
  usersArr :any;
  data:any;
  users = new Newusers;
  updtadata: any[]=[];

  
  constructor(
      private route:ActivatedRoute,
      private dataservice:DataService,
      private http : HttpClient,
      private router:Router

  ) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.usersid=this.route.snapshot.params.id;
    //this.usersid=this.route.snapshot.params.id;
    //this.getUsers(this.usersid);
    this.getDesignation();
    this.getEmpStatus();
    this.getUsers();
}

getDesignation(){
  this.dataservice.getDesignationList().subscribe(res=>{
    //console.log(res);
    this.designationArr = res;
  })
}

getEmpStatus(){
  this.dataservice.getEmpStatusList().subscribe(res=>{
    this.empstatusArr = res;
  })
}

getUsers(){
  this.dataservice.getOneUser(this.usersid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.users=this.data;

 });
}

 updateUsers(){
  this.dataservice.updateUsers(this.usersid,this.users).subscribe(res=>{
   // console.log(res);
  //  this.updtadata = [this.users];
   this.dataservice.updtaeteamdetails(this.users).subscribe(res=>{

   Swal.fire('Updated!', 'New User Details has been updated.', 'success');
   this.router.navigate(['/form/users']);

      })
  });
 }

}
