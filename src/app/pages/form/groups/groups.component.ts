import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Groups } from './groups.model'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups = new Groups();
  constructor(private dataservice: DataService,
    private route: Router) { }

  ngOnInit(): void {
  }

  submitgroups(){
    this.dataservice.registerGroups(this.groups).subscribe(res =>{
        console.log(res);
        this.route.navigate(['/form/groupslist']);
    })
}

}
