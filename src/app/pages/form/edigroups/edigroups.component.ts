import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Groups } from '../groups/groups.model';

@Component({
  selector: 'app-edigroups',
  templateUrl: './edigroups.component.html',
  styleUrls: ['./edigroups.component.scss']
})
export class EdigroupsComponent implements OnInit {

  groupid:any;
  groups= new Groups;
  data:any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService
  ) { }

  ngOnInit(): void {
    this.groupid=this.route.snapshot.params.id;
    this.getGroupData();
  }

  getGroupData(){
    this.dataservice.getOneGroups(this.groupid).subscribe(res=>{
      this.data=res;
      this.groups=this.data;
  })
  }

  updategroups(){
    this.dataservice.updateGroups(this.groupid,this.groups).subscribe(res=>{
          //this.data=res;
          //this.roles=this.data;
    })
  }
}
