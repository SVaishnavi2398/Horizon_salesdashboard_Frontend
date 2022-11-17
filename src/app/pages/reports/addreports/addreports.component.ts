import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Reports } from './addreports.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addreports',
  templateUrl: './addreports.component.html',
  styleUrls: ['./addreports.component.scss']
})
export class AddreportsComponent implements OnInit {

  reports = new Reports;
  selectedItem : string;
  tableHeaderElements = ['ID', 'FIRST', 'SECOND'];
  companyArr :any;
  modulesArr : any;
  secmodulesArr : any;
  modulefieldsArr : any;
  secmodulefieldsArr : any;
  value1Arr : any;
  length : any;
  value : any;
  value2Arr : any[]=[];

  constructor(private dataservice: DataService,
    private route: Router) { }

  ngOnInit(): void {
    this.getDropdown();
    this.getModules();
    this.getSecModules();
  }


  getDropdown(){
    this.dataservice.getSalesDropdownlist().subscribe(res=>{
      this.companyArr = res;
      //console.log(res);
    })
  }

  getModules(){
    this.dataservice.getModuleslist().subscribe(res=>{
      this.modulesArr = res;
    })
  }

  getModulefields(event){
    //console.log(event.target.value);
    var obj = {
      module_name : event.target.value
    }

    this.dataservice.getModulefieldslist(obj).subscribe(res => {
              this.modulefieldsArr = res;
              //console.log(res);
    });

  }

  getSecModules(){
    this.dataservice.getModuleslist1().subscribe(res=>{
      this.secmodulesArr = res;
    })
  }

  getSecModulefields(event){
    //console.log(event.target.value);
    var obj = {
      module_name : event.target.value
    }

    this.dataservice.getModulefieldslist1(obj).subscribe(res => {
              this.secmodulefieldsArr = res;
              //console.log(res);
    });

  }

  getModulefields1(event){
    //console.log(event.target.value);
    var obj = {
      table_field : event.target.value
    }
   
     
    this.dataservice.getModulefieldslist(obj).subscribe(res => {
              this.value2Arr = [];
               this.value1Arr = res;
              console.log(this.value1Arr);
              var list =  res;
              this.length =  this.value1Arr.length;
              //console.log(this.length);
              for (let index = 0; index<this.length; index++) {
              this.value = Object.values(this.value1Arr[index]);
              this.value2Arr[index] =this.value;
              //console.log(this.value2Arr[index]);
            }
          console.log(this.value2Arr);
    });

  }

  submitreports(){
     let arr = this.reports.primary_module_field_name;
     this.reports.primary_module_field_name = arr.join(', ');

     let arr1 = this.reports.secondary_module_field_name;
     this.reports.secondary_module_field_name = arr1.join(', ');

     //console.log(this.reports.primary_module_field_name);
     //console.log(this.reports.secondary_module_field_name);


    //console.log(this.reports);
    this.dataservice.registerReports(this.reports).subscribe(res =>{
      console.log(res);
      Swal.fire('Added!', 'Reports has been added.', 'success'); 
      this.route.navigate(['/reports/calculations']);
  })

  }

 

}
