import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { Documents } from './documents.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  fileToUpload: File | null = null;

  // imageUrl:string = "/assets/img/upload-img.jpg";
  //fileToUpload:File=null;
  usersid:any;
  user_id:any
   //users : any;
   data:any;
   usersArr:any;
  
empdocuments = new Documents;
   
 
  public error ={
    'doc1':''

  };
  addblogform: any;
  length: any;
  docs: any;
  files1: any;
  files2: any;
  files3: any;
  files4: any;
  files5: any;
  constructor(
    private route:ActivatedRoute,

    private dataservice: DataService,
    private router: Router,
    private Jarwis:JarwisService,
    private Token:TokenService,
    private http : HttpClient,
    private fb: FormBuilder

  ) { }
  
 
 ngOnInit() {

 
  this.usersid=this.route.snapshot.params.id;
  this.getUsers();
  this.getalluser();

  }

  // handleFileInput(file : FileList){
  // this.fileToUpload = file.item(0);

  // var reader = new FileReader();
  // reader.onload = (event:any)=>{
  //   this.imageUrl=event.target.result;
  // }
  //  reader.readAsDataURL(this.fileToUpload);
  // }
  

  // onSubmit(){

  //   this.dataservice.registerDocuments(this.users).subscribe(res=>{
      
  //     data=>this.handleResponse(data);
  //     error=>this.handleError(error);
     
  //    } );

  // }
  handleResponse(data){
    //this.router.navigateByUrl('/form/users');
    console.log(data);
  }


  handleError(error){
    this.error = error.error.errors;
  }

  


  getUsers(){
    this.dataservice.getOneUser(this.usersid).subscribe(res=>{
      console.log(res);
      this.data=[res];
      this.usersArr=this.data;
      var selecteoption = this.usersArr[0].firstname;
      this.empdocuments.firstname=this.usersArr[0].firstname;
      this.empdocuments.user_id=this.usersArr[0].user_id;
   });
  }


  getalluser(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      //this.data=res;
      //this.usersArr=res;
  
   });
  }

  
  imageUpload1(event){
    //console.log(event);
    this.files1 = event.target.files[0];
    // if(event.target.files){
    //   var render =  new FileReader;
    //   render.readAsDataURL(event.target.files[0]);
    //   render.onload=(event:any)=>{
    //     this.imageUrl=event.target.result;
    //   }
    // }
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
    console.log(event);
    this.files5 = event.target.files[0];
    console.log(this.files5);
  }

  /* Upload button functioanlity */
  submitdocuments(f: NgForm){
    var empdocuments = new FormData();
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');

    empdocuments.append('user_id', this.empdocuments.user_id);
    empdocuments.append('doc1', this.files1);
    empdocuments.append('doc2', this.files2);
    empdocuments.append('doc3', this.files3);
    empdocuments.append('doc4', this.files4);
    empdocuments.append('doc5', this.files5);
  
 
    /* Image Post Request */
      this.dataservice.registerDocuments(empdocuments).subscribe(res=>{
        Swal.fire('Added!', 'Documents has been added.', 'success'); 
        this.router.navigate(['/form/userview/'+this.usersid]);
      });

    //   this.http.post('https://www.horizonfp.in/salesbackend1/api/emp_documents',empdocuments).subscribe(res=>{
    //   Swal.fire('Added!', 'Documents has been added.', 'success'); 
    //   this.router.navigate(['/form/documentslist']);
    // });
      
     //Check success message
     //sweetalert message popup
     
    };  
}





  


