import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Salesdocuments } from '../salesdocuments/salesdocuments.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-editdocuments',
  templateUrl: './editdocuments.component.html',
  styleUrls: ['./editdocuments.component.scss']
})
export class EditdocumentsComponent implements OnInit {

  salesArr : any;
  getSalesdocumentsArr : any;
  salesdocumentsid : any;
  data : any;
  salesdocuments = new Salesdocuments;
  files : any;
  formdata : any;
  sales_id : any;
  https: any;
  httpclient: any;

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
    //this.getSalesDocumets();
    //this.form.get('<name>').setValue(File, {emitModelToViewChange: false});
  }

  getSales(){
    this.dataservice.getSaleslist().subscribe(res=>{
      //console.log(res);
      this.salesArr = res;
    })
  }

  // getSalesDocumets(){
  //   this.dataservice.getSalesdocumentslist().subscribe(res=>{
  //     //console.log(res);
  //     this.getSalesdocumentsArr = res;
  //   })
  // }

  getSalesdocumentsData(){
    
    this.dataservice.getOneSalesdocuments(this.salesdocumentsid).subscribe(res=>{
    console.log(res);
    this.data=res;
    this.salesdocuments=this.data;
    })
  }

  imageUpload1(event){
    //console.log(event);
    this.files = event.target.files[0];
    console.log(this.files);
  }

  imageUpload2(event){
    //console.log(event);
    this.files = event.target.files[0];
    console.log(this.files);
  }

  imageUpload3(event){
    //console.log(event);
    this.files = event.target.files[0];
    console.log(this.files);
  }

  imageUpload4(event){
    //console.log(event);
    this.files = event.target.files[0];
    console.log(this.files);
  }

  imageUpload5(event){
    //console.log(event);
    this.files = event.target.files[0];
    console.log(this.files);
  }

  updatedocuments(f: NgForm){
    var salesdocuments = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    salesdocuments.append('sales_id', this.salesdocuments.sales_id);
    salesdocuments.append('doc1', this.files);
    salesdocuments.append('doc2', this.files);
    salesdocuments.append('doc3', this.files);
    salesdocuments.append('doc4', this.files);
    salesdocuments.append('doc5', this.files);
 
    /* Image Post Request */
    this.http.post('http://127.0.0.1:8000/api/sales_documents/', salesdocuments, {
    headers: headers
    }).subscribe(data => {
      
     //Check success message
     //sweetalert message popup
     Swal.fire('Updated!', 'Documents has been updated.', 'success'); 
     this.router.navigate(['/form/documentslist']);
    });  
  }

}
