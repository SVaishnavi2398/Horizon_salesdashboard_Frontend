import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Advancesalary } from '../advancesalary/advancesalary.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editadvancesalary',
  templateUrl: './editadvancesalary.component.html',
  styleUrls: ['./editadvancesalary.component.scss']
})
export class EditadvancesalaryComponent implements OnInit {

  advancesalaryid : any;
  advancesalary = new Advancesalary;
  data : any;
  usersArr : any;
  deduction_amount: any;
  paid: any;
  advance_salary_id:any;
  public page = 1;
  public pageSize = 10;
  //public advanceemiList: Array<Advanceemi> = [];
  searchadvanceemi:string;
  advanceemiArr:any;
  totalCount: any;
  //data:any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.advancesalaryid=this.route.snapshot.params.id;
    this.getAdvancesalaryData();
    this.getUsers();
  }

  getUsers(){
    this.dataservice.getUserslist().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  getAdvancesalaryData(){
    this.dataservice.getOneAdvancesalary(this.advancesalaryid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.advancesalary=this.data;
    })
  }

  updateAdvancesalary(){
    this.dataservice.updateAdvancesalary(this.advancesalaryid,this.advancesalary).subscribe(res=>{
      console.log(res);
      Swal.fire('Updated!', 'Advance Salary has been updated.', 'success');
      this.router.navigate(['/form/salary/advancesalarylist']);
      })
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


//   getPaid(event){
//     console.log('addd',event.target.value);
//     this.paid =event.target.value
//     this.dataservice.getPaidData().subscribe(res=>{
//      this.paid=res;
//       console.log( this.paid);
//       console.log(JSON.stringify(res[0].paid));
     
//    })

// }

}
