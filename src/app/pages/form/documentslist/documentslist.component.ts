import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-documentslist',
  templateUrl: './documentslist.component.html',
  styleUrls: ['./documentslist.component.scss']
})
export class DocumentslistComponent implements OnInit {

  salesdocumentsArr : any;
  searchcompanylist : string;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getSalesdetailsData();
  }

  getSalesdetailsData(){
    this.dataservice.getDocuments().subscribe(res=>{
      this.salesdocumentsArr=res;
      console.log(this.salesdocumentsArr,"res");
      
    })
  }

}
