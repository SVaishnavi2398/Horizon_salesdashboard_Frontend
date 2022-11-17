import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Newusers } from '../newusers/newusers.model';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { OrderPipe } from 'ngx-order-pipe';
//import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public newusersList: Array<Newusers> = [];
  searchusers:string;
  usersArr:any;
  usersdataArr : any;
  designationArr:any;
  totalCount: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  /***Searching***/
  firstname_Search:"";
  email_search: "";
  mobile_no_Search: "";
  designation_Search: "";
  empstatus_Search: "";

  constructor(private http : HttpClient,
    private dataservice:DataService,  orderPipe: OrderPipe,private location: Location){
      this.sortedCollection = orderPipe.transform(this.usersArr, 'info.name');

  }

    ngOnInit(): void {
      this.getUsers();   
   }
   back(){
    window.history.back();
  }
  
   getUsers(){
     
      this.dataservice.getUsers().subscribe(res =>{
      this.usersArr = res;
      console.log(this.usersArr,"user Array");
      
      this.totalCount= this.usersArr.length;
      this.newusersList = this.getUsers1(this.totalCount);

    });

  }

  getUsers1(count) {

    let list = [];
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  // deleteUsersData(id){
  //   this.http.delete('https://www.horizonfp.in/salesbackend1/api/users/'+id).subscribe(Response=>{
  //     this.getUsers();
  //   });
  // }

  // deleteUsersData(user_id){
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     //text: 'You won\'t be able to revert this!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#34c38f',
  //     cancelButtonColor: '#f46a6a',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then(res => {
  //     if (res.value) {
  
  //       this.dataservice.deleteTeams(user_id).subscribe(res=>{
  //       Swal.fire('Deleted!', 'Team has been deleted.', 'success'); 
  //       this.getUsers();
  //       });
  
  //     }
  //   })
  
  
  // }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
 
  
}