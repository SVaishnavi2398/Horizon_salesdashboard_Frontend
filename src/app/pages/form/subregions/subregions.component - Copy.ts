import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Subregions } from './subregions.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subregions',
  templateUrl: './subregions.component.html',
  styleUrls: ['./subregions.component.scss'],
  
})
export class SubregionsComponent implements OnInit {
  
  subregions = new Subregions();
  constructor(private dataservice: DataService,
    private route: Router) { }
  public listItems : Array<string> =[];

  ngOnInit(): void {
    this.dropdownRefresh();
  }

  dropdownRefresh(){
      this.dataservice.getRegDropDownValues().subscribe(data=>{
        data.forEach(element =>{
          this.listItems.push(element["region_name"]);
        });
      })
  }

  submitsubregion(){
    this.dataservice.registerSubregions(this.subregions).subscribe(res =>{
        console.log(res);
        this.route.navigate(['/form/subregionslist']);
    })
  }

}
