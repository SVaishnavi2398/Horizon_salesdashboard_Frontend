import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Projectallocations } from './projectallocartions.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projectallocations',
  templateUrl: './projectallocations.component.html',
  styleUrls: ['./projectallocations.component.scss']
})
export class ProjectallocationsComponent implements OnInit {


  // bread crumb items
  breadCrumbItems: Array<{}>;

  projectallocations = new Projectallocations;
  error = new Projectallocations;
  //dataarray=[];
  project_id :any; 
  projectsArr :any;
  subprojectsArr : any;
  subprojectid:any;
  user_id :any; 
  usersArr :any;
  projectallocationsArr:any;
  search:string;


  constructor(private dataservice: DataService,
    private route: Router,
    private http: HttpClient,
    private Token:TokenService) { }

    ngOnInit(): void {

      this.breadCrumbItems = [
        { label: 'Project Allocation' },
        { label: 'Dashboard', active: true },
      ];

      this.projectallocations = new Projectallocations()
      //this.dataarray.push(this.projectallocations);
      this.getProject();
      this.getUser();
      this.getProjectallocationsData();
    }

    // addForm()
    // {
    //     this.projectallocations = new Projectallocations()
    //     this.dataarray.push(this.projectallocations);
    // }
  
    // removeForm(index){
    //     this.dataarray.splice(index);
    // }

    submitprojectallocation(){
      this.dataservice.registerProjectAllocations(this.projectallocations).subscribe(
        //console.log(res);
       data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
    }
  
  
    handleResponse(data){
      this.Token.handle(data.access_token);
      Swal.fire('Added!', 'Project Allocation has been added.', 'success'); 
      this.route.navigate(['/form/projectallocationslist']);
    }
  
     
    handleError(error){
      this.error = error.error.errors;
    }
  
    getProject(){
      this.dataservice.getProjectslist().subscribe(res=>{
        this.projectsArr = res;
      })
    }

    getState(event){
      //console.log(event.target.value);
    
        this.project_id = event.target.value
 
      this.dataservice.getSubprojectslist(this.project_id ).subscribe(res => {
                this.subprojectsArr = res;
                console.log(res);
      });
      
  
  
    }


    getUser(){
      this.dataservice.getUsers().subscribe(res=>{
        this.usersArr = res;
      })
    }
  
    getUserid(event){
        var obj = {
          
          user_id : event.target.value
        }
  
        this.dataservice.registerProjectAllocations(this.projectallocations).subscribe(res =>{
         
      })
  
  
    }


    getProjectallocationsData(){
      this.dataservice.getProjectAllocations().subscribe(res=>{
        this.projectallocationsArr=res;
      })
  }


  

}
