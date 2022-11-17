import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Advanceemi } from './advance-emi.model';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';
import { Advancesalary } from '../advancesalary/advancesalary.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-advance-emi',
  templateUrl: './advance-emi.component.html',
  styleUrls: ['./advance-emi.component.scss']
})
export class AdvanceEmiComponent implements OnInit {

  advancesalArr :any;
  advancesalary = new Advancesalary;
  advanceemi = new Advanceemi;
  adddata = new Advanceemi;
  adArr:any;
  error = new Advanceemi;
  usersArr :any;
  advance_salary_id: any;
  user_id: any;
  adv_code: any;
  advcode: any;
  amount: any;
  paid:any;
  amount1: any;
  pending_amount: any;
  deduction_amount: any;
  deduction_amount1: any;
  addpending_amount: any;
  advanceAmt: any;
  deduction: any;
  AdvanceSal1: any;
  advdedut: any;
  paid1: any;
  amount2: any;
  amountexceederror: string;
  constructor(
    private dataservice: DataService,
    private router: Router,
    private Token:TokenService

  ) { }

  ngOnInit(): void {
   // this.getAdvancesal();
   this.getUsers();
   //this.deduction_amount=new FormControl("",)
 
  }

  getUsers(){
    this.dataservice.getUserslist().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
      
    })
  }
 
  getuserdata(event){
    
     
    console.log('hi',event.target.value);
    this.user_id =event.target.value;
    this.adddata.user_id=this.user_id;
    this.adddata.adv_code=this.adv_code;
    //console.log("hello" ) 
    this.dataservice.getUserData1(this.user_id).subscribe(res=>{
      this.advcode=res;
      console.log("hello",res);
      

    })
    
    // getuserdata(event){
    
    //   console.log('hi',event.target.value);
    //   this.user_id =event.target.value;
    //   //console.log("hello" ) 
    
    //   //this.amount= this.user_id 
    //   this.dataservice.getUserName(this.user_id).subscribe(res=>{
    
    //     this.amount1=res;
    //     console.log(this.amount1);
    //     this.advancesalary.amount=this.amount1[0].amount;
    //     console.log("hello",this.advancesalary.amount);
    //   })
     
    // }
   

  }
  getuseremi(event){
    console.log('hello',event.target.value);
    this.adv_code =event.target.value;
    this.dataservice.getUserEmi(this.adv_code).subscribe(res=>{
      this.amount1=res;
      this.adddata.user_id=this.user_id;
      this.adddata.adv_code=this.adv_code;
      this.advanceAmt= JSON.stringify(res[0].amount)
      //console.log("333",this.amount1);
      console.log('hi',JSON.stringify(res[0].amount));
      console.log('aaaa',this.advanceAmt);
      //console.log(JSON.stringify(res[0].paid));
     // console.log(JSON.stringify(res[0].pending_amount));
      //console.log(JSON.stringify(res));
     
    })
  }
  keyPressNumbers(event) {
     
    this.deduction= this.advanceAmt - this.advanceemi.deduction_amount
    console.log(this.deduction)
    console.log("sahd",this.advanceemi.deduction_amount);
    this.paid1=this.advanceemi.deduction_amount
   this.amount2=this.deduction
  //  if(this.advanceAmt<this.paid1){
  //   this.amountexceederror="Amount exceed";
    
  
  // }
//    if(this.advanceAmt>=this.paid1){
//       console.log(this.deduction);
//  // Swal.fire('exceed Amount!', 'Advance amount exceed', 'success');
//     }
//     else{
//       console.log("Amount Exceed")

//     }
  }

//   getdeduction(event){
//     console.log(event.target.value)

   
//    this.dataservice.getDeduct(this.deduction_amount).subscribe(res=>{
//    this.deduction_amount1 = res;
//      console.log(res);
//     console.log(this.amount1);
//    this.pending_amount=this.amount1-this.deduction_amount1;
//    console.log(this.pending_amount);
//   })
// }
// if(this.advanceAmt>=this.paid1){
//   console.log(this.deduction);

// }
// else if (this.advanceAmt<=this.paid1){
//   console.log("Amount Exceed");
// }
// else{
//   console.log("Done");
// }
// if(this.advanceAmt<this.paid1){
//   this.amountexceederror="Amount exceed";

// }

// else{
// console.log('all data',this.advanceemi);
// this.dataservice.registerAdvanceemi(this.advanceemi).subscribe(
//   //console.log(res);
  
//   data=>this.handleResponse(data),
//   error=>this.handleError(error)
// );
// }

  //this.pending_amount=(this.amount)-(this.deduction_amount);
  submitAdvanceemi(){
   
    if(this.deduction<this.advanceemi.deduction_amount){
        this.amountexceederror="Amount exceed";
      
      }
      
     else{
    console.log('all data',this.advanceemi);
    this.dataservice.registerAdvanceemi(this.advanceemi).subscribe(
        //console.log(res);
        
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
   }
  }
 

    handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Advance EMI has been added.', 'success');
    this.router.navigate(['/form/salary/advance-emi-list']);
    this.getTotalAmount();

  }

  handleError(error){
    this.error = error.error.errors;
  }
  getTotalAmount(){
    
    this.adddata.user_id=this.user_id;
    this.adddata.adv_code=this.adv_code;
    this.adddata.pending_amount=this.deduction;
    if(this.adddata.pending_amount==0){
          this.adddata.status="Paid";
    }
    else{
      this.adddata.status="Pending";
    }
    
    this.adddata.paid=this.paid1;
    this.adddata.amount=this.amount2;
   
    
    // if(this.adddata.pending_amount<this.adddata.paid){
    //   alert("Amount Exceed from to Actual Amount");

    // }
    // submitAdvanceemi(){
   
    //   if(this.advanceAmt<this.paid1){
    //       this.amountexceederror="Amount exceed";
        
    //     }
        
    //     else{
    //   console.log('all data',this.advanceemi);
    //   this.dataservice.registerAdvanceemi(this.advanceemi).subscribe(
    //       //console.log(res);
          
    //       data=>this.handleResponse(data),
    //       error=>this.handleError(error)
    //     );
    //   }
    // }

    console.log("amt ",this.adddata);

    this.dataservice.getAdvancesal1(this.adddata).subscribe(res=>{
              console.log('total',res);
             this.AdvanceSal1 = res;       
       });
      

  }

  // keyPressNumbers(event) {
  //   var charCode = (event.which) ? event.which : event.keyCode;
  //   // Only Numbers 0-9
  //   if ((charCode < 48 || charCode > 57)) {
  //     event.preventDefault();
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // get bmi() {
  //   console.log(this.advancesalary.pending_amount);
  //   var selectedOption = Number(this.advancesalary.amount) - Number(this.advanceemi.deduction_amount);
  //   this.advancesalary.pending_amount = Number(this.advancesalary.amount) - Number(this.advanceemi.deduction_amount);
  //  return  Number(this.advancesalary.amount) - Number(this.advanceemi.deduction_amount);
  
  // }
  // get bmi() {
  //     console.log(this.advancesalary.paid);
  //     var selectedOption = Number(this.advancesalary.amount) - Number(this.advanceemi.deduction_amount);
  //     this.advancesalary.pending_amount = Number(this.advancesalary.amount) - Number(this.advanceemi.deduction_amount);
  //    return  Number(this.advancesalary.amount) - Number(this.advanceemi.deduction_amount);
  //   }

  //   get bmi1() {  
  //       var selectedOption =Number(this.advanceemi.deduction_amount);
  //       //this.advancesalary.paid = Number(this.advanceemi.deduction_amount);
  //       this.advanceemi.deduction_amount = Number(this.advancesalary.paid);
  //      return Number(this.advanceemi.deduction_amount);
  //     }
    
   // pending_amount

}
