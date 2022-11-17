import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Subprojects } from './subprojects.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-subprojects',
  templateUrl: './subprojects.component.html',
  styleUrls: ['./subprojects.component.scss']
})
export class SubprojectsComponent implements OnInit {

  projectsArr :any;
  subprojectid:any;
  subprojects= new Subprojects;
  error = new Subprojects;
  data:any;
  constructor(
    private dataservice: DataService,
    private route: Router,
    private Token:TokenService
    ) { }
 

  ngOnInit(): void {
    this.getProject();
  }

  // getProjectData(){
  //   this.dataservice.getOneSubprojects(this.subprojectid).subscribe(res=>{
  //     //console.log(res);
  //     this.data=res;
  //     this.subprojects=this.data;
  // })
  // }

  getProject(){
    this.dataservice.getProjectslist().subscribe(res=>{
      this.projectsArr = res;
      //console.log(res);
    })
  }


  submitsubproject(){
    console.log(this.subprojects);
    this.dataservice.registerSubprojects(this.subprojects).subscribe(
        //console.log(res);
       
        data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
    }
  
  
    handleResponse(data){
      this.Token.handle(data.access_token);
      Swal.fire('Added!', 'Subproject has been added.', 'success'); 
        this.route.navigate(['/form/subprojectslist']);
    }
  
     
    handleError(error){
      this.error = error.error.errors;
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

}
