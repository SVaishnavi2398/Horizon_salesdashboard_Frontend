import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Reports } from '../addreports/addreports.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-generatereport',
  templateUrl: './generatereport.component.html',
  styleUrls: ['./generatereport.component.scss']
})
export class GeneratereportComponent implements OnInit {

  fileName= 'Reports.xlsx';
  
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
  headerArr:any[]=[];
  headerArr1:any[]=[];
  headerArr2:any[]=[];
  merged2Arr:any[]=[];
  arr3:any;

  mergedArr:any;
  array:any[]=[];
  index:any[]=[];
  valueArr: any[]=[];
  value2Arr: any[]=[];
  value3Arr: any[]=[];
  value4Arr:any[]=[];
  result1:any[]=[];
  result:any[]=[];
  avgArr:any;
  sumArr:any;
  sumvalue:any[]=[];
  sumkeys:any[]=[];
  avgvalue:any[]=[];
  avgkeys1:any[]=[];
  avgkeys:any[]=[];
  obj:any[]=[];
  filteredArray:any;
  

  constructor(private route:ActivatedRoute,
    private dataservice: DataService) { }

  ngOnInit(): void {
    this.reportsid=this.route.snapshot.params.id;
    this.getReportsData();
    this.getModules();
    this.getGenerate();
    this.getSumvalue();
    this.getAvgvalue()
  }

  getReportsData(){
    this.dataservice.getOneReports(this.reportsid).subscribe(res=>{
//console.log(res);
    this.data=res;
    this.reports=this.data;

    //this.demo = this.reports.primary_module_name;
    //console.log(this.demo);

    this.string = this.reports.primary_module_field_name;
 
    this.arr = this.string.split(",");
   
    for(var i=0; i<this.arr.length; i+=2){

   // this.headerArr[i] =(this.arr[i]);
   //console.log(this.headerArr[i]);
    }
   // console.log(this.arr);

    this.string1 = this.reports.secondary_module_field_name;
    this.arr1 = this.string1.split(",");
    for(var i=0; i<this.arr1.length; i+=2){

      this.headerArr1[i] =(this.arr1[i]);
    //console.log(this.headerArr1[i]);
      }
    //console.log(this.arr1);
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

  getGenerate(){
    this.dataservice.getGenerate(this.reportsid).subscribe(res => {
    this.reportArr = res;
    //console.log(this.reportArr);
    //console.log(Object.keys(this.reportArr[0]));
    //.log(Object.values(this.reportArr[0]));
    
    this.headerArr=Object.keys(this.reportArr[0]);

    for (var i=0; i<this.reportArr.length; i++){
     
    this.valueArr[i]=(Object.values(this.reportArr[i]));
    this.value3Arr[i]=String(this.valueArr[i]).replace(/['"]+/g, '');
    this.value4Arr[i]=(Object.keys(this.reportArr[i]));
    //console.log( this.value4Arr[i]);
    }
    // console.log( this.value4Arr);
     for (var i=0; i<this.valueArr.length; i++){
     this.value2Arr[i]=Object.values(this.valueArr[i]);
     //console.log( this.value2Arr[i]);
      //console.log(Object.entries(this.value2Arr[i]).reduce((r, v) => (r[v[0]] = +v[1], r), {}));
    }

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


  getSumvalue(){
    this.dataservice.getsum(this.reportsid).subscribe(res => {
    this.sumArr = res;
    for (var i=0; i<this.sumArr.length; i++){
      this.sumvalue[i] = (Object.values(this.sumArr[i]));
      this.sumkeys[i] = (Object.keys(this.sumArr[i]));
      var myString = JSON.stringify(this.sumkeys[i]);
      this.result[i] = myString.substring( myString.indexOf( '(' ) + 1, myString.indexOf( ')' ) );
      }
      //  console.log(this.result);
     
    })
  }

 

  getAvgvalue(){
    this.dataservice.getavg(this.reportsid).subscribe(res => {
    this.avgArr = res;
    
    for (var i=0; i<this.avgArr.length; i++){
      this.avgvalue[i] = (Object.values(this.avgArr[i]));
      this.avgkeys[i] = (Object.keys(this.avgArr[i]));
     }

    if(this.avgArr.length != 0 && this.sumArr.length != 0)
    {
        this.avgkeys1 = this.sumkeys.concat(this.avgkeys);
        for (var i=0; i<this.avgkeys1.length; i++)
        {
        var myString = JSON.stringify(this.avgkeys1[i]);
        this.result1[i] = myString.substring( myString.indexOf( '(' ) + 1, myString.indexOf( ')' ) );
       }
        console.log(myString);
        
        var arr = this.result1; 
        var filteredArray = arr.filter(function(item, pos)
        {
        return arr.indexOf(item)== pos; 
        });
        this.filteredArray = filteredArray;
    }

      else
      {
        if(this.avgArr.length == 0 && this.sumArr.length == 0) 
        {
          return  this.avgkeys1 = null;  
        } 

        if(this.avgArr.length > 0)
        {
           for (var i=0; i<this.avgArr.length; i++)
           {
           var myString = JSON.stringify(this.avgArr[i]);
           this.result1[i] = myString.substring( myString.indexOf( '(' ) + 1, myString.indexOf( ')' ) );
          }
          return this.filteredArray = this.result1;
        }

          else
          {
            for (var i=0; i<this.sumArr.length; i++)
            {
              var myString = JSON.stringify(this.sumArr[i]);
              this.result1[i] = myString.substring( myString.indexOf( '(' ) + 1, myString.indexOf( ')' ) );
            }
             return this.filteredArray = this.result1;
          }
      }
     
    })
  }


  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }


  
  
}



