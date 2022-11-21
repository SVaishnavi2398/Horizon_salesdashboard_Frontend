import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Salesdocuments } from './salesdocuments.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-salesdocuments',
  templateUrl: './salesdocuments.component.html',
  styleUrls: ['./salesdocuments.component.scss']
})
export class SalesdocumentsComponent implements OnInit {

  salesArr : any;
  salesdocumentsid : any;
  data : any;
  salesdocuments = new Salesdocuments;
  files1 : any;
  files2 : any;
  files3 : any;
  files4 : any;
  files5 : any;
  formdata : any;
  sales_id : any;
  https: any;
  httpclient: any;
  usersArr:any;
  //salesdetails: any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router,
    private http:HttpClient 
  ) { }

  ngOnInit(): void {
    this.salesdocumentsid=this.route.snapshot.params.id;
    this.getSales();
    this.getSalesdocumentsData();
  }

  getSales(){
    this.dataservice.getSaleslist().subscribe(res=>{
      //console.log(res);
      this.salesArr = res;
    })
  }

  getSalesdocumentsData(){
    this.dataservice.getclientname(this.salesdocumentsid).subscribe(res=>{
    console.log(res);
    this.data=res;
    this.salesdocuments=this.data;
    this.salesdocuments.name=this.data[0].name;
    this.salesdocuments.sales_id=this.data[0].sales_id;
    })
  }


  imageUpload1(event){
    //console.log(event);
    this.files1 = event.target.files[0];
    console.log(this.files1);
  }

  imageUpload2(event){
    //console.log(event);
    this.files2 = event.target.files[0];
    console.log(this.files2);
  }

  imageUpload3(event){
    //console.log(event);
    this.files3 = event.target.files[0];
    console.log(this.files3);
  }

  imageUpload4(event){
    //console.log(event);
    this.files4 = event.target.files[0];
    console.log(this.files4);
  }

  imageUpload5(event){
    //console.log(event);
    this.files5 = event.target.files[0];
    console.log(this.files5);
  }

  submitdocuments(f: NgForm){
    var salesdocuments = new FormData();
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');

    salesdocuments.append('sales_id', this.salesdocuments.sales_id);
    salesdocuments.append('doc1', this.files1);
    salesdocuments.append('doc2', this.files2);
    salesdocuments.append('doc3', this.files3);
    salesdocuments.append('doc4', this.files4);
    salesdocuments.append('doc5', this.files5);
    console.log(salesdocuments);

    /* Image Post Request */
    this.dataservice.registerSalesdocuments(salesdocuments).subscribe(res=>{
     Swal.fire('Added!', 'Documents has been added.', 'success'); 
   // console.log(res);

      this.router.navigate(['/form/documentslist']);
    });
      
     //Check success message
     //sweetalert message popup
     
    };  
  }


