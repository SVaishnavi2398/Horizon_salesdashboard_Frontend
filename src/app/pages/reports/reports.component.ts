import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
//import { ExcelService } from 'src/app/service/excel.service';
import { DataService } from 'src/app/service/data.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})


export class ReportsComponent implements OnInit {

//   teamsArr : any;
//   constructor(private excelService:ExcelService,
//     private dataservice:DataService) { }

//   ngOnInit(): void {
//     this.getTeamsData();
//   }

//   getTeamsData(){
//     this.dataservice.getTeams().subscribe(res=>{
//       this.teamsArr=res;
//     })
// }

//   exportAsXLSX():void {
//     this.excelService.exportAsExcelFile(this.teamsArr, 'footballer_data');
//   }
  
  reportsArr : any;

  fileName= 'Reports.xlsx'; 

  /***Sorting***/
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  caseInsensitive: boolean = false;
  /***Searching***/
  report_name_Search: "";
  primary_module_name_search:"";
  primary_module_field_name_search: "";
  secondary_module_name_Search: "";
  secondary_module_field_name_Search: "";

  constructor(private dataservice:DataService, orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.reportsArr, 'info.name');

  }

  ngOnInit(): void {
    this.getReports();
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

    getReports(){
      this.dataservice.getReports().subscribe(res =>{
        this.reportsArr = res;
       
      });
    }

    setOrder(value: string) {
      if (this.order === value) {
        this.reverse = !this.reverse;
      }
  
      this.order = value;
    }


}
