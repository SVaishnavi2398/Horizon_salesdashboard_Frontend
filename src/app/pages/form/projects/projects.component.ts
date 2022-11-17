import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Projects } from './projects.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  regionsArr: any;
  subregionsArr: any;
  companyArr: any;
  //project_name : any;
  projects = new Projects();
  error = new Projects();

  constructor(private dataservice: DataService,
    private route: Router,
    private modalService: NgbModal,
    private Token: TokenService

  ) { }

  ngOnInit(): void {
    this.getRegion();
    this.getCompany();

  }

  submitproject() {
    this.dataservice.registerProjects(this.projects).subscribe(
      //console.log(res);

      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


  handleResponse(data) {
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Project has been added.', 'success');
    this.route.navigate(['/form/projectslist']);
  }


  handleError(error) {
    this.error = error.error.errors;
  }

  getRegion() {
    this.dataservice.getRegionslist().subscribe(res => {
      this.regionsArr = res;
    })
  }

  getSubregion(event) {
    console.log(event.target.value);
    var obj = {
      region_id: event.target.value
    }
console.log(obj);
    this.dataservice.getOneSubregions(obj.region_id).subscribe(res => {
      this.subregionsArr = res;
      this.projects.subregion_id = this.subregionsArr.subregion_id;
      this.projects.subregion_name = this.subregionsArr.subregion_name;
      console.log(res);
    });

  }

  getCompany() {
    this.dataservice.getCompanylist().subscribe(res => {
      this.companyArr = res;
      //console.log(res);
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

  openModal(content: any) {
    this.modalService.open(content, { windowClass: 'modal-holder' });
  }

}
