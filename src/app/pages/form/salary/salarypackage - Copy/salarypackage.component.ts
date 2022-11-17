import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Salarypackage } from './salarypackage.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salarypackage',
  templateUrl: './salarypackage.component.html',
  styleUrls: ['./salarypackage.component.scss']
})
export class SalarypackageComponent implements OnInit {


  usersArr :any;
  salarypackage = new Salarypackage;
  constructor(
    private dataservice: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  submitSalarypackage(){
    this.dataservice.registerSalarypackage(this.salarypackage).subscribe(res =>{
        //console.log(res);
        Swal.fire('Added!', 'Salary Package has been added.', 'success');
        this.router.navigate(['/form/salary/salarypackagelist']);
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

}
