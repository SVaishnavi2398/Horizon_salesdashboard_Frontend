import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Clientdetails } from '../clientdetails/clientdetails.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editclientdetails',
  templateUrl: './editclientdetails.component.html',
  styleUrls: ['./editclientdetails.component.scss']
})
export class EditclientdetailsComponent implements OnInit {

  clientdetailsid:any;
  clientdetails= new Clientdetails;
  data:any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientdetailsid=this.route.snapshot.params.id;
    this.getClientdetailsData();
  }

  getClientdetailsData(){
    this.dataservice.getOneClientdetails(this.clientdetailsid).subscribe(res=>{
      //console.log(res);
      this.data=res;
      this.clientdetails=this.data;
  })
  }

  updateclientdetails(){
    this.dataservice.updateClientdetails(this.clientdetailsid,this.clientdetails).subscribe(res=>{
      //console.log(res);
      Swal.fire('Edited!', 'Client Details has been edited.', 'success'); 
      this.router.navigate(['/form/clientdetailslist']);
      //console.log(res);
      //this.data=res;
      //this.roles=this.data;
    })
  }

  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}
