import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Subprojects } from '../subprojects/subprojects.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editsubprojects',
  templateUrl: './editsubprojects.component.html',
  styleUrls: ['./editsubprojects.component.scss']
})
export class EditsubprojectsComponent implements OnInit {

  project_id :any; 
  projectsArr :any;
  subprojectid:any;
  subprojects= new Subprojects;
  data:any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subprojectid=this.route.snapshot.params.id;
      this.getProjectData();
      this.getProject();
  }

  getProjectData(){
    this.dataservice.getOneSubprojects(this.subprojectid).subscribe(res=>{
      //console.log(res);
      this.data=res;
      this.subprojects=this.data;
  })
  }

  getProject(){
    this.dataservice.getProjectslist().subscribe(res=>{
      this.projectsArr = res;
    })
  }

  updatesubprojects(){
    this.dataservice.updateSubprojects(this.subprojectid,this.subprojects).subscribe(res=>{
          //console.log(res);
          Swal.fire('Updated!', 'Subproject has been updated.', 'success');
          this.router.navigate(['/form/subprojectslist']);
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

}
