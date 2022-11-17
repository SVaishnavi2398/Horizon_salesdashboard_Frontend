import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Designations } from '../designations/designations.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editdesignations',
  templateUrl: './editdesignations.component.html',
  styleUrls: ['./editdesignations.component.scss']
})
export class EditdesignationsComponent implements OnInit {
  designationid : any;
  designations = new Designations;
  data:any;

  constructor(
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.designationid=this.route.snapshot.params.id;
    this.getDesignationData();
  }

  getDesignationData(){
    this.dataservice.getOneDesignations(this.designationid).subscribe(res=>{
      //console.log(res);
      this.data=res;
      this.designations=this.data;
  })

  }

  updatedesignations(){
    this.dataservice.updateDesignations(this.designationid,this.designations).subscribe(res=>{
          //console.log(res);
          Swal.fire('Updated!', 'Designation has been updated.', 'success');
          this.router.navigate(['/form/designationslist']);
          //this.data=res;
          //this.roles=this.data;
    })
}

}
