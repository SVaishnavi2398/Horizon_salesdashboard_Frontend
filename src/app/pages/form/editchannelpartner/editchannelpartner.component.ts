import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Channelpartner } from '../channelpartner/channelpartner.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editchannelpartner',
  templateUrl: './editchannelpartner.component.html',
  styleUrls: ['./editchannelpartner.component.scss']
})
export class EditchannelpartnerComponent implements OnInit {

  channelpartnerid:any;
  channelpartner= new Channelpartner;
  data:any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.channelpartnerid=this.route.snapshot.params.id;
    this.getChannelpartnerData();
  }

  getChannelpartnerData(){
    this.dataservice.getOneChannelpartner(this.channelpartnerid).subscribe(res=>{
      //console.log(res);
      this.data=res;
      this.channelpartner=this.data;
  })
  }

  updatechannelpartner(){
    this.dataservice.updateChannelpartner(this.channelpartnerid,this.channelpartner).subscribe(res=>{
      //console.log(res);
      Swal.fire('Edited!', 'Channel Partner has been edited.', 'success'); 
      this.router.navigate(['/form/channelpartnerslist']);
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
