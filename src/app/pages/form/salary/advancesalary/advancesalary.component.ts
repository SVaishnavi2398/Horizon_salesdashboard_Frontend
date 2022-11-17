import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Advancesalary } from './advancesalary.model';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-advancesalary',
  templateUrl: './advancesalary.component.html',
  styleUrls: ['./advancesalary.component.scss']
})
export class AdvancesalaryComponent implements OnInit {

  usersArr :any;
  advancesalary = new Advancesalary;
  error = new Advancesalary;
  lastrecord: any;
  value: any;
  user_id: any;
  amount: any;
  amount1: any;
  advanceemi: any;
  deducted_amount: any;
  adv_code: any;
  paid: any;
  paid1: any;
  deduction_amount: any;
  adv_amount
  //user_id1: any;
 

  constructor(
    private dataservice: DataService,
    private router: Router,
    private Token:TokenService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getlastrecord();
  }

  getUsers(){
    this.dataservice.getUserslist().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
      
    })
  }

  // getUser(event){
  //   console.log("hiii",event.target.value);
  // }

  getlastrecord(){
    this.dataservice.getAdvancesal().subscribe(res => {
console.log(res);
      
      this.lastrecord=res;
     
      var str = this.lastrecord[0].adv_code ;
      var str1 = str.replace(/\D/g, "");
      console.log(str1);
      this.value = Number(str1) + 1;
      console.log((this.value));
      this.advancesalary.adv_code = 'AD00' + this.value;
      console.log('hello',this.advancesalary.adv_code);
      
       } );
  }


  submitAdvancesalary(){


    
    console.log('all data',this.advancesalary);
    //console.log(this.balance_amount);

    this.dataservice.registerAdvancesalary(this.advancesalary).subscribe(
      
        //console.log(res);
      
        data=>this.handleResponse(data),
        error=>this.handleError(error)

      );
    
      
  }
  
  

 

  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Advance Salary has been added.', 'success');
        this.router.navigate(['/form/salary/advancesalarylist']);
  }

   
  handleError(error){
    this.error = error.error.errors;
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

  get bmi1() {  
          var selectedOption =Number(this.advancesalary.adv_amount);
          //this.advancesalary.paid = Number(this.advanceemi.deduction_amount);
          this.advancesalary.adv_amount = Number(this.advancesalary.amount);
         return Number(this.advancesalary.adv_amount);
        }
 
        get bmi2() {  
          var selectedOption =Number(this.advancesalary.paid);
          //this.advancesalary.paid = Number(this.advanceemi.deduction_amount);
          this.advancesalary.paid = 0;
         return Number(this.advancesalary.paid);
        }

        get bmi3() {  
          var selectedOption =Number(this.advancesalary.pending_amount);
          //this.advancesalary.paid = Number(this.advanceemi.deduction_amount);
          this.advancesalary.pending_amount = 0;
         return Number(this.advancesalary.pending_amount);
        }
        get bmi4() {  
          var selectedOption =Number(this.advancesalary.status);
          //this.advancesalary.paid = Number(this.advanceemi.deduction_amount);
          this.advancesalary.status = "Pending";
         return Number(this.advancesalary.status);
        }
}
