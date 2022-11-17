import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Monthlysalary } from '../monthly-salary/monthly-salary.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-monthly-salary-view',
  templateUrl: './monthly-salary-view.component.html',
  styleUrls: ['./monthly-salary-view.component.scss']
})
export class MonthlySalaryViewComponent implements OnInit {

  monthlysalaryid : any;
  monthlysalary = new Monthlysalary;
  data : any;
  usersArr : any;
  salarypackageArr : any;
  salaryArr : any;
  salary : any;
  id: any;
  previousUrl: any;
  url: any;
  id1: any;


  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.monthlysalaryid=this.route.snapshot.params.id;
    this.id = Number(this.monthlysalaryid) + Number(1);
    this.id1 = Number(this.monthlysalaryid) - Number(1);
    this.getMonthlysalaryData();
    this.getUsers();
    this.getSalarypac();
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  getSalarypac(){
    this.dataservice.getSalarypackagelist().subscribe(res=>{
      //console.log(res);
      this.salarypackageArr = res;
    })
  }

  getMonthlysalaryData(){
    this.dataservice.getOneMonthlysalary(this.monthlysalaryid).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
   
 
  }

  handleResponse(data){
   this.monthlysalary = data;
    console.log(data);
   }
    
     
    handleError(error){
     if(this.monthlysalaryid != '0'){
       this.url = '/form/salary/monthly-salary-view/'+1;
      this.reloadComponent(this.url);
     }
     else{
      this.dataservice.getMonthlysalary().subscribe(res=>{
      this.data = res;
      var lastid = this.data.length;
      this.url = '/form/salary/monthly-salary-view/'+lastid;
      this.reloadComponent(this.url);
      })
    }
    }

  getState(event){
    //console.log(event.target.value);
    var obj = {
      user_id : event.target.value
    }

    this.dataservice.getSalaryPackage(obj).subscribe(res => {
   
           this.salaryArr=res;
           this.salary=res;
         var selectedOption = this.salary[0].basic_pay;
         this.monthlysalary.basic_pay=this.salary[0].basic_pay;

    });
   }

    
  reloadComponent(url) {
    let currentUrl = url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

    doSomeLogic(){
      this.url = '/form/salary/monthly-salary-view/'+this.id;
      this.reloadComponent(this.url);
    }
    doSomeLogics(){
      this.url = '/form/salary/monthly-salary-view/'+this.id1;
      this.reloadComponent(this.url);
    }

    back(){
      window.history.back();
    }
    
}
