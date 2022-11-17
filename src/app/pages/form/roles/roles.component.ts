import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Roles } from './roles.model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles = new Roles();
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
  }

  submitroles(){
      this.dataservice.registerRoles(this.roles).subscribe(res =>{
          console.log(res);
      })
  }

}
