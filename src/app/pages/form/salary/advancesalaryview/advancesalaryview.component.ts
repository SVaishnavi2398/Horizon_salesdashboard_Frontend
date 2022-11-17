import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Advancesalary } from '../advancesalary/advancesalary.model';
import { Router } from '@angular/router';
import { Advanceemi } from '../advance-emi/advance-emi.model';



@Component({
  selector: 'app-advancesalaryview',
  templateUrl: './advancesalaryview.component.html',
  styleUrls: ['./advancesalaryview.component.scss']
})
export class AdvancesalaryviewComponent implements OnInit {

  advancesalaryid : any;
  advancesalary = new Advancesalary;
  advanceemi = new Advanceemi;
 // advanceemiview = new Advanceemiview;
  data : any;
  usersArr : any;
  url: any;
  id: any;
  id1: any;
  
  //user_id:any;
  advanceemiArr:any;
  advanceemiviewArr:any;
  advancesalaryArr:any;
  //advanceemi:any;
  advemidata: any;
  userdata: any;
  useradd: any;
  user_id: any;
  

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.advancesalaryid=this.route.snapshot.params.id;

    this.id = Number(this.advancesalaryid) + Number(1);
    this.id1 = Number(this.advancesalaryid) - Number(1);
        this.getUsers();

    this.getAdvancesalaryData();
    //this.getAdvanceemiData();

    //this.getAdvancesalaryEmi();
    //this.getuseremidata();
   //this.getalldataview();
  }

  getUsers(){
    this.dataservice.getUserslist().subscribe(res=>{
     //console.log(res);
      this.usersArr = res;
    })
  }


  

  getAdvancesalaryData(){
    //console.log(this.advancesalaryid);
    this.dataservice.getOneAdvancesalary(this.advancesalaryid).subscribe(
    //console.log(res);
    data=>this.handleResponse(data),
    error=>this.handleError(error)
  );
    
  }
  handleResponse(data){
    this.advancesalary=data;
 this.user_id=this.advancesalary.user_id;
 this.getalldataview1(this.user_id);

   }
    
     
    handleError(error){
     if(this.advancesalaryid != '0'){
       this.url = '/form/salary/advancesalaryview/'+1;
      this.reloadComponent(this.url);
     }
     else{
      this.dataservice.getClientdetails().subscribe(res=>{
      this.data = res;
      var lastid = this.data[0].advance_salary_id;
      this.url = '/form/salary/advancesalaryview/'+lastid;
      this.reloadComponent(this.url);
      })
    }
    }

  

  // getAdvanceemiData(){
  //   //console.log("333",this.advanceemiArr)
  //   this.dataservice.getAdvanceemi().subscribe(res=>{
  //     this.advanceemiArr=res;
  //     //console.log('1561265',this.advanceemiArr);
      
  //   })
  // }
  

  getalldataview1(id){
  //this.advanceemi.user_id=this.user_id
    //console.log("111",id);

    this.dataservice.getadvlistview2(id).subscribe(res=>{
      this.advanceemiArr = res;
      console.log('Hello',this.advanceemiArr);

      
      
    })
  }

 

 

  reloadComponent(url) {
    let currentUrl = url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

    doSomeLogic(){
      this.url = '/form/salary/advancesalaryview/'+this.id;
      this.reloadComponent(this.url);
    }
    doSomeLogics(){
      this.url = '/form/salary/advancesalaryview/'+this.id1;
      this.reloadComponent(this.url);
    }

}
