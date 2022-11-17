import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Salescomments } from './salescomments.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salescomments',
  templateUrl: './salescomments.component.html',
  styleUrls: ['./salescomments.component.scss']
})
export class SalescommentsComponent implements OnInit {

  salesArr : any;
  usersArr : any;
  salescomments = new Salescomments;
  data : any;
  salescommentsid : any;
  postComment = [];
  comment : any;
  chatMessagesData : any;
  formData: any;
  salescommentsArr:any;

 

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.salescommentsid=this.route.snapshot.params.id;
    this.getSales();
    this.getUsers();
    this.getSalescommentsData();
    //this.getSalescommetsId();
    this.getSalesomments();
  }

  getSales(){
    this.dataservice.getSaleslist().subscribe(res=>{
      //console.log(res);
      this.salesArr = res;
    })
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  getSalescommentsData(){
    this.dataservice.getOneSalesdetails(this.salescommentsid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.salescomments=this.data;
    })
  }


  submitcomments(){
    this.dataservice.registerSalescomments(this.salescomments).subscribe(res =>{
      //console.log(res);
      this.reloadComponent();
      //Swal.fire('Added!', 'Sales Details been added.', 'success'); 
      //this.router.navigate(['/form/salesdetailslist']);
  })
  }

  getSalesomments(){
    this.dataservice.getSalesomments(this.salescommentsid).subscribe(res=>{
     // console.log(res);
     this.salescommentsArr = res;
  
   })
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}
