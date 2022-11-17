import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Reports } from '../addreports/addreports.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  reportArr : any;
  report_id : any;
  module_name: any;
  columnArr: any;
  selectedColumn : any[]=[];
  arr : any[]=[];
  id : any;
  arr1 : any[]=[];
  reports_id : any;
  //data : any;
  reports = new Reports;

  public data = {
    cal_sum : null,
    cal_avg :null

  }
  primary_module_name: any;
  secondary_module_name: any;
  header: any[]=[];
  arrayvalue1: any;
  header1: any[]=[];
  arrayvalue : any;

  constructor(private dataservice:DataService,
    private route: Router) { }

  ngOnInit(): void {
    this.getreportdetails();
  }

  // getreportdetails(){
  //   this.dataservice.getReportid().subscribe(res =>{
  //     this.reportArr=res;
      
  //   })

  // }
  
  getreportdetails(){
    this.dataservice.getReportid().subscribe(res =>{
      this.reportArr=res;
      this.id = this.reportArr[0].reports_id;
     
      this.primary_module_name = this.reportArr[0].primary_module_name;
      this.secondary_module_name = this.reportArr[0].secondary_module_name;

      this.dataservice.getcalculation().subscribe(res =>{
      this.columnArr=res
       
       for(var i=0; i<this.columnArr.length; i++){
        if(this.primary_module_name == this.columnArr[i].module_name){
          this.header[i] = this.columnArr[i];
           }
         }
        this.arrayvalue1 = this.header.filter(function (el){
        return el != null;
        });
       
      for(var i=0; i<this.columnArr.length; i++){
          if(this.secondary_module_name == this.columnArr[i].module_name){
            this.header1[i] = this.columnArr[i]
           }
         }
      this.arrayvalue = this.header1.filter(function (el) {
      return el != null;
      });

      console.log(this.arrayvalue);
      })
   })
  }

  GetCalsum(event) {
    //console.log(event.target.value);

    let index = this.arr.indexOf(event.target.value);
    //console.log(index);
    if ( index == -1 ){
          this.arr.push(event.target.value);
    } else {
          this.arr.splice(index,1);
    }
    console.log(this.arr);

    this.data.cal_sum=this.arr;
 
    // this.dataservice.addSum(this.id,this.arr).subscribe(res => {
    // console.log(res);
   //})
  }

  GetCalavg(event){
    //console.log(event.target.value);

    let index = this.arr1.indexOf(event.target.value);
    //console.log(index);
    if ( index == -1 ){
          this.arr1.push(event.target.value);
    } else {
          this.arr1.splice(index,1);
    }
    //this.arr1.push(event.target.value);
    console.log(this.arr1);

    this.data.cal_avg=this.arr1;

  }

  // updateReports(){

  //   this.dataservice.updateReports(this.reports_id,this.reports).subscribe(res=>{
  //     console.log(res);
  //     Swal.fire('Added!', 'Reports has been updated.', 'success'); 
  //     this.route.navigate(['/reports']);
  
  //   })
  // }

  updateReports(){
    console.log(this.id);
    console.log(this.data);
    
      this.dataservice.addSum(this.id,this.data).subscribe(res=>{
        console.log(res);
        Swal.fire('Added!', 'Reports has been updated.', 'success');
        this.route.navigate(['/reports']);
    
      })
    
    }


}
