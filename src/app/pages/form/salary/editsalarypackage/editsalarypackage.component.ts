import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Salarypackage } from '../salarypackage/salarypackage.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editsalarypackage',
  templateUrl: './editsalarypackage.component.html',
  styleUrls: ['./editsalarypackage.component.scss']
})
export class EditsalarypackageComponent implements OnInit {

  salarypackageid : any;
  salarypackage = new Salarypackage;
  data : any;
  usersArr : any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.salarypackageid=this.route.snapshot.params.id;
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
    this.dataservice.getOneSalarypackage(this.salarypackageid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.salarypackage=this.data;
    })
  }

  updateSalarypackage(){
    this.dataservice.updateSalarypackage(this.salarypackageid,this.salarypackage).subscribe(res=>{
      //console.log(res);
      Swal.fire('Updated!', 'Salary Package has been updated.', 'success');
      this.router.navigate(['/form/salarypackagelist']);
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


  cancel(){
    this.router.navigate(['/form/salarypackagelist']);

  }

}
