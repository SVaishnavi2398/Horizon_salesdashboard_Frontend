import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Newusers } from '../newusers/newusers.model';
import { OrderPipe } from 'ngx-order-pipe';
import Swal from 'sweetalert2';
import { Salarypackage } from '../../form/salary/salarypackage/salarypackage.model';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public salarypackageList: Array<Salarypackage> = [];
  searchsalarypackage:string;
  salarypackageArr:any;
  totalCount: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;

  /***Searching***/
  firstname_Search: "";
  from_date_Search: "";
  basic_pay_Search: "";
  monthly_salary_Search: "";
  yearly_salary_Search: "";


  active = 1;
  designationArr :any;
  empstatus :any;
  usersid:any;
  name:any;
  commentArr : any;
  users = new Newusers;
  data:any;
  usersArr:any;
  //comment:any;
  url: any;
  id1: any;
  id: any;
  public form = {
    user_id :null,
    comment : null
  }
  empDocumentArr: any;
  constructor(
    orderPipe: OrderPipe,
      private route:ActivatedRoute,
      private dataservice:DataService,
      private http : HttpClient,
      private router:Router

  ) {  this.sortedCollection = orderPipe.transform(this.salarypackageArr, 'info.name');}

  ngOnInit(): void {

    //console.log(this.route.snapshot.params.id);
    this.usersid=this.route.snapshot.params.id;
    this.id = Number(this.usersid) + Number(1);
    this.id1 = Number(this.usersid) - Number(1);
    //this.usersid=this.route.snapshot.params.id;
    //this.getUsers(this.usersid);
    this.getDesignation();
    this.getEmpStatus();
    this.getUsers();
    this.getusername();
    this.getComments();
    this.getEmpdocuments();
    this.getSalarypackageData();
}



getDesignation(){
  this.dataservice.getDesignationList().subscribe(res=>{
    //console.log(res);
    this.designationArr = res;
  })
}


getUsers(){
  this.dataservice.getOneUser(this.usersid).subscribe(
    data=>this.handleResponse(data),
    error=>this.handleError(error)
  );
}

handleResponse(data){
  this.users = data;
  console.log(this.users,"abccccc");
  
 }
  
   
  handleError(error){
   if(this.usersid != '0'){
     this.url = '/form/userview/'+1;
    this.reloadComponent1(this.url);
   }
   else{
    this.dataservice.getUsers().subscribe(res=>{
    this.data = res;
    var lastid = this.data.length;
    this.url = '/form/userview/'+lastid;
    this.reloadComponent1(this.url);
    })
  }
  }

getComments(){
  this.dataservice.getComments(this.usersid).subscribe(res=>{
   // console.log(res);
   this.commentArr = res;

 })
}

getEmpdocuments(){
  this.dataservice.getEmpDocuments(this.usersid).subscribe(res=>{
    console.log(res,"ressss");
   this.empDocumentArr = res;

 })
}


getusername(){
  this.dataservice.getUsers().subscribe(res=>{
    //console.log(res);
    //this.data=res;
    this.usersArr=res;

 });
}


getEmpStatus(){

  this.dataservice.getEmpStatusList().subscribe(res=>{
    this.data = res;
    this.empstatus=this.data;
  })
}

onSubmit(){
  this.dataservice.registerComments(this.users).subscribe(res=>{
  this.reloadComponent();

  });
}

reloadComponent() {
  let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

  reloadComponent1(url) {
    let currentUrl = url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

    doSomeLogic(){
      this.url = '/form/userview/'+this.id;
      this.reloadComponent1(this.url);
    }
    doSomeLogics(){
      this.url = '/form/userview/'+this.id1;
      this.reloadComponent1(this.url);
    }

    back(){
      window.history.back();
    }

    
  getSalarypackageData(){
    this.dataservice.getSalarypackageD(this.usersid).subscribe(res=>{
      this.salarypackageArr=res;
      console.log(this.salarypackageArr,"salary package");
      this.totalCount= this.salarypackageArr.length;
      console.log(this.totalCount,"aaaaaaaaaaa");
      
      this.salarypackageList = this.getSalarypackageData1(this.totalCount);
    })
  }

  getSalarypackageData1(count) {

    let list = [];
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteSalarypackageData(salary_package_id){
    Swal.fire({
      title: 'Are you sure?',
      //text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then(res => {
      if (res.value) {
  
        this.dataservice.deleteSalarypackage(salary_package_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Team has been deleted.', 'success'); 
        this.getSalarypackageData();
        });
  
      }
    })
  
  
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
    data1(){
      console.log("click");
      
    }

}
