import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Company } from '../company/company.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.scss']
})
export class EditcompanyComponent implements OnInit {

  companyid:any;
  company= new Company;
  data:any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.companyid=this.route.snapshot.params.id;
    this.getCompanyData();
  }

  getCompanyData(){
    this.dataservice.getOneCompany(this.companyid).subscribe(res=>{
      console.log(res);
      this.data=res;
      this.company=this.data;
  })
  }

  updatecompnay(){
    this.dataservice.updateCompany(this.companyid,this.company).subscribe(res=>{
      //console.log(res);
      Swal.fire('Updated!', 'Compnay Details has been updated.', 'success'); 

      this.router.navigate(['/form/companylist']);
      //console.log(res);
      //this.data=res;
      //this.roles=this.data;
    })
  }

  keyPressAlphanumeric(event) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
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
