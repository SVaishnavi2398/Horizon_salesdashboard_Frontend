import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-roleslist',
  templateUrl: './roleslist.component.html',
  styleUrls: ['./roleslist.component.scss']
})
export class RoleslistComponent implements OnInit {
  rolesArr:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
      this.getRolesData();
  }

  getRolesData(){
        this.dataservice.getRoles().subscribe(res=>{
          this.rolesArr=res;
        })
  }

  deleteRolesData(id){
    this.dataservice.deleteRoles(id).subscribe(res=>{
      this.getRolesData();
    })
  }


}
