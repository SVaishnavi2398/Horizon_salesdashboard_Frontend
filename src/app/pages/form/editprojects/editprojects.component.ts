import { Renderer2, Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Projects } from '../projects/projects.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprojects',
  templateUrl: './editprojects.component.html',
  styleUrls: ['./editprojects.component.scss']
})
export class EditprojectsComponent implements OnInit {

  projectid:any;
  projects= new Projects;
  data:any;
  regionsArr :any;
  subregionsArr :any;
  companyArr :any;

  constructor(
    private _renderer2: Renderer2,
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectid=this.route.snapshot.params.id;
    this.getProjectsData();
    this.getRegion();
    this.getCompany();
    this.getSubregion();
  }

  getProjectsData(){
    this.dataservice.getOneProjects(this.projectid).subscribe(res=>{
      this.data=res;
      this.projects=this.data;
      // console.log(res);
      // console.log(this.projects.profile_score);
  })
  }

  getRegion(){
    this.dataservice.getRegionslist().subscribe(res=>{
      this.regionsArr = res;
    })
  }
  
  getSubregion(){
    //console.log(event.target.value);

    this.dataservice.getSubregion().subscribe(res => {
              this.subregionsArr = res;
              //console.log(res);
    });

  }


  getCompany(){
    this.dataservice.getCompanylist().subscribe(res=>{
      this.companyArr = res;
      //console.log(res);
    })
  }

  updatecproject(){
    this.dataservice.updateProjects(this.projectid,this.projects).subscribe(res=>{
      //console.log(res);
      Swal.fire('Updated!', 'Project has been updated.', 'success'); 
      this.router.navigate(['/form/projectslist']);
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


  
}
