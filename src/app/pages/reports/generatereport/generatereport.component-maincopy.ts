import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Reports } from '../addreports/addreports.model';

@Component({
  selector: 'app-generatereport',
  templateUrl: './generatereport.component.html',
  styleUrls: ['./generatereport.component.scss']
})
export class GeneratereportComponent implements OnInit {

  reports = new Reports;
  reportsid:any;
  reportsArr:any;
  data:any;
  string : any;
  arr : any;
  string1 : any;
  arr1 : any;
  modulesArr : any;
  modulefieldsArr : any;
  demo : any;
  reportArr : any;
  headerArr : any[]=[];
  valueArr : any[]=[];
  merged2Arr : any[]=[];
  value2Arr : any[]=[];
  index : any[]=[];
  array : any[]=[];

  constructor(private route:ActivatedRoute,
    private dataservice: DataService) { }

  ngOnInit(): void {
    this.reportsid=this.route.snapshot.params.id;
    this.getReportsData();
    this.getModules();
    this.getGenerate();
  }

  getReportsData(){
    this.dataservice.getOneReports(this.reportsid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.reports=this.data;

    
  })
  }

  getModules(){
    this.dataservice.getModuleslist().subscribe(res=>{
      this.modulesArr = res;
    })
  }

  getModulefields(event){
    //console.log(event.target.value);
    var obj = {
      module_id : event.target.value
    }

    this.dataservice.getModulefieldslist(obj).subscribe(res => {
              this.modulefieldsArr = res;
              //console.log(res);
    });

  }

  // getGenerate(){
  //   this.dataservice.getGenerate(this.reportsid).subscribe(res => {
  //     this.reportArr = res;
  // });
  // }

  getGenerate(){
    this.dataservice.getGenerate(this.reportsid).subscribe(res => {
    this.reportArr = res;
    console.log(this.reportArr);
    //console.log(Object.keys(this.reportArr[0]));
    //.log(Object.values(this.reportArr[0]));
   
    this.headerArr=Object.keys(this.reportArr[0]);

    for (var i=0; i<this.reportArr.length; i++){
    this.valueArr[i]=Object.values(this.reportArr[i]);
   // console.log(this.valueArr[i]);
    }

    for (var i=0; i<this.valueArr.length; i++){
      this.value2Arr[i]=Object.values(this.valueArr[i]);
      console.log(this.value2Arr[i]);
      }

//  console.log(Object.keys(this.reportArr[0]));
  //   var output = this.reportArr.map(function(obj) {
  //   return Object.keys(obj).sort().map(function(key) {
  //   return (obj[key]);
  //     });
  //   });

   

  //   this.mergedArr = output;
   
  //  console.log(this.mergedArr);
    for (var i=0; i<this.valueArr.length; i++){
    this.merged2Arr[i] = this.valueArr[i];
    this.index[i]=Object.keys(this.merged2Arr[i]);
    this.array =  this.index[0];
   // console.log(this.merged2Arr[i]);
}
 
  });
  }



 

 
}
