import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { Generatereport } from './generatereport.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generatereport',
  templateUrl: './generatereport.component.html',
  styleUrls: ['./generatereport.component.scss']
})
export class GeneratereportComponent implements OnInit {

  generatereport = new Generatereport;
  selectedItem : string;
  tableHeaderElements = ['ID', 'FIRST', 'SECOND'];
  companyArr :any;
  modulesArr : any;
  secmodulesArr : any;
  modulefieldsArr : any;
  secmodulefieldsArr : any;

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
      module_id : event.target.value
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
      module_id : event.target.value
    }

    this.dataservice.getModulefieldslist1(obj).subscribe(res => {
              this.secmodulefieldsArr = res;
              //console.log(res);
    });

  }

  submitprojectallocation(){
    this.dataservice.registerProjectAllocations(this.generatereport).subscribe(res =>{
      //console.log(res);
      Swal.fire('Added!', 'Project Allocation has been added.', 'success'); 
      this.route.navigate(['/form/projectallocationslist']);
  })

  }

}
