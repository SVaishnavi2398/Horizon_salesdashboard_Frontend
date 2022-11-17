import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-groupslist',
  templateUrl: './groupslist.component.html',
  styleUrls: ['./groupslist.component.scss']
})
export class GroupslistComponent implements OnInit {
  groupsArr:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
        this.getGroupsData();
  }

  getGroupsData(){
    this.dataservice.getGroups().subscribe(res=>{
      this.groupsArr=res;
    })
}

deleteGroupsData(id){
  this.dataservice.deleteGroups(id).subscribe(res=>{
    this.getGroupsData();
  })
}

}
