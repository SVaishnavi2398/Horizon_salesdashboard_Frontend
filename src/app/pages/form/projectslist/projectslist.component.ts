import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { Projects } from '../projects/projects.model';

@Component({
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styleUrls: ['./projectslist.component.scss']
})
export class ProjectslistComponent implements OnInit {
  
  public page = 1;
  public pageSize = 10;
  public projectsList: Array<Projects> = [];
  searchprojects:string
  projectsArr:any;
  totalCount: any;

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;
   /***Searching***/
  cname_Search : "";
  project_name_search:"";
  rera_Search: "";
  location_Search:"";
  region_name_Search:"";
  subregion_name_Search: "";
  constructor(private dataservice:DataService,  orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.projectsArr, 'info.name');

   }

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData(){
    this.dataservice.getProjects().subscribe(res=>{
      this.projectsArr=res;
      // console.log(this.projectsArr);
      this.totalCount= this.projectsArr.length;
      this.projectsList = this.getprojectsList(this.totalCount);
    })
  }

  getprojectsList(count) {

    let list = [];
  
  
    //console.log(count);

    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }


  deleteProjectsData(project_id){
    Swal.fire({
      title: 'Are you sure?',
      //text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then(res => {
      if (res.value) {
  
        this.dataservice.deleteProjects(project_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Team has been deleted.', 'success'); 
        this.getProjectsData();
        });
  
      }
    })
  
  
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
