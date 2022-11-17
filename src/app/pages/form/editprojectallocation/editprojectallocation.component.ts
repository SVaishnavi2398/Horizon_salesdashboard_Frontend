import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Projectallocations } from '../projectallocations/projectallocartions.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editprojectallocation',
  templateUrl: './editprojectallocation.component.html',
  styleUrls: ['./editprojectallocation.component.scss']
})
export class EditprojectallocationComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  projectallocationsArr:any;
  projectallocation = new Projectallocations;
  subprojectsArr : any;
  allocationid:any;
  projectsArr:any;
  usersArr:any;
  data:any;
  project_id: any;
  

  constructor(
    private dataservice: DataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.allocationid=this.route.snapshot.params.id;

    this.breadCrumbItems = [
      { label: 'Project Allocation' },
      { label: 'Dashboard', active: true },
    ];

    this.getProjectallocationsData();
    this.getProject();
    this.getUser();
   
  }

  getProjectallocationsData(){
    this.dataservice.getOneProjectAllocations(this.allocationid).subscribe(res=>{
      this.data=res;
      this.projectallocation=this.data[0];
      console.log(res);
    })
}


getState(event){
  //console.log(event.target.value);
  
    this.project_id = event.target.value


  this.dataservice.getSubprojectslist(this.project_id).subscribe(res => {
            this.subprojectsArr = res;
        this.projectallocation.subproject_name = this.subprojectsArr[0].subproject_name;
        this.projectallocation.subproject_id = this.subprojectsArr[0].subproject_id;    
  });
  


}


updateProjectAllocation(){
  this.dataservice.updateProjectAllocations(this.allocationid,this.projectallocation).subscribe(res=>{
   // console.log(res);
   Swal.fire('Updated!', 'Project Allocation has been updated.', 'success'); 
   this.router.navigate(['/form/projectallocationslist']);
  });
}

getProject(){
  this.dataservice.getProjectslist().subscribe(res=>{
    this.projectsArr = res;
  })
}


getUser(){
  this.dataservice.getUsers().subscribe(res=>{
    this.usersArr = res;
  })
}

}
