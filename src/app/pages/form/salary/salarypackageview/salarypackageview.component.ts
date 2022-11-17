import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Salarypackage } from '../salarypackage/salarypackage.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-salarypackageview',
  templateUrl: './salarypackageview.component.html',
  styleUrls: ['./salarypackageview.component.scss']
})
export class SalarypackageviewComponent implements OnInit {

  salarypackageid : any;
  salarypackage = new Salarypackage;
  data : any;
  usersArr : any;
  url: any;
  id: any;
  id1: any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.salarypackageid=this.route.snapshot.params.id;
    this.id = Number(this.salarypackageid) + Number(1);
    this.id1 = Number(this.salarypackageid) - Number(1);
    this.getSalarypackageData();
    this.getUsers();
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  getSalarypackageData(){
    this.dataservice.getOneSalarypackage(this.salarypackageid).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
    
  }

  handleResponse(data){
    this.salarypackage=data;
   }
    
     
    handleError(error){
     if(this.salarypackageid != '0'){
       this.url = '/form/salary/salarypackageview/'+1;
      this.reloadComponent(this.url);
     }
     else{
      this.dataservice.getSalarypackage().subscribe(res=>{
      this.data = res;
      var lastid = this.data[0].salary_package_id;
      this.url = '/form/salary/salarypackageview/'+lastid;
      this.reloadComponent(this.url);
      })
    }
    }
    

  reloadComponent(url) {
    let currentUrl = url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

    doSomeLogic(){
      this.url = '/form/salary/salarypackageview/'+this.id;
      this.reloadComponent(this.url);
    }
    doSomeLogics(){
      this.url = '/form/salary/salarypackageview/'+this.id1;
      this.reloadComponent(this.url);
    }
    back(){
      window.history.back();
    }
    
}
