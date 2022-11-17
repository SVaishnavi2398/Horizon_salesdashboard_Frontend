import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Roles } from '../roles/roles.model';

@Component({
  selector: 'app-editroles',
  templateUrl: './editroles.component.html',
  styleUrls: ['./editroles.component.scss']
})
export class EditrolesComponent implements OnInit {
  roleid:any;
  roles= new Roles;
  data:any;
  
  constructor(
      private route:ActivatedRoute,
      private dataservice:DataService
  ) { }

  ngOnInit(): void {
      //console.log(this.route.snapshot.params.id);
      this.roleid=this.route.snapshot.params.id;
      this.getRoleData();
  }


  getRoleData(){
      this.dataservice.getOneRoles(this.roleid).subscribe(res=>{
            //console.log(res);
            this.data=res;
            this.roles=this.data;
      })
  }


  updateroles(){
    this.dataservice.updateRoles(this.roleid,this.roles).subscribe(res=>{
          //console.log(res);
          //this.data=res;
          //this.roles=this.data;
    })
}
  

}
