import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Monthlysalary } from './monthly-salary.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-monthly-salary',
  templateUrl: './monthly-salary.component.html',
  styleUrls: ['./monthly-salary.component.scss']
})
export class MonthlySalaryComponent implements OnInit {

  usersArr :any;
  salarypackageArr : any;
  monthlysalary = new Monthlysalary;
  constructor(
    private dataservice: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
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

  submitMonthlysalary(){
    this.dataservice.registerMonthlysalary(this.monthlysalary).subscribe(res =>{
        //console.log(res);
        Swal.fire('Added!', 'Monthly Salary has been added.', 'success');
        this.router.navigate(['/form/salary/monthly-salary-list']);
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
