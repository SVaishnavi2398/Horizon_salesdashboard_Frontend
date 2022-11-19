import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Channelpartner } from './channelpartner.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-channelpartner',
  templateUrl: './channelpartner.component.html',
  styleUrls: ['./channelpartner.component.scss']
})
export class ChannelpartnerComponent implements OnInit {

  channelpartner = new Channelpartner;
  error = new Channelpartner;
  constructor(
    private dataservice: DataService,
    private route: Router,
    private Token:TokenService
  ) { }

  ngOnInit(): void {}

  submitchannelpartner(editForm){
    this.dataservice.registerChannelpartner(this.channelpartner).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Client Details has been added.', 'success'); 
    this.route.navigateByUrl('/form/channelpartnerslist');
  }

  
handleError(error){
    this.error = error.error.errors;
  }

  reloadComponent() {
    let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl]);
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
