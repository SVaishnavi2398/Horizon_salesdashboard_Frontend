import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Channelpartner } from '../channelpartner/channelpartner.model';

@Component({
  selector: 'app-channelpartnerview',
  templateUrl: './channelpartnerview.component.html',
  styleUrls: ['./channelpartnerview.component.scss']
})
export class ChannelpartnerviewComponent implements OnInit {

  channelpartnerid:any;
  channelpartner= new Channelpartner;
  data:any;
  previousUrl: any;
  url: any;
  id:any;
  id1:any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.channelpartnerid=this.route.snapshot.params.id;
    this.id = Number(this.channelpartnerid) + Number(1);
    this.id1 = Number(this.channelpartnerid) - Number(1);
    this.getChannelpartnerData();
  }

  getChannelpartnerData(){
    this.dataservice.getOneChannelpartner(this.channelpartnerid).subscribe(
    data=>this.handleResponse(data),
     error=>this.handleError(error)
   );
  }

  handleResponse(data){
    this.channelpartner = data;
  }
    
     
    handleError(error){
     if(this.channelpartnerid != '0'){
       this.url = '/form/channelpartnerview/'+1;
      this.reloadComponent(this.url);
     }
     else{
      this.dataservice.getChannelpartner().subscribe(res=>{
      this.data = res;
      var lastid = this.data[0].cp_id;
      this.url = '/form/channelpartnerview/'+lastid;
      this.reloadComponent(this.url);
      })
    }
    }

  reloadComponent(url) {
    let currentUrl = url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

    doSomeLogic(){
      this.url = '/form/channelpartnerview/'+this.id;
      this.reloadComponent(this.url);
    }
    doSomeLogics(){
      this.url = '/form/channelpartnerview/'+this.id1;
      this.reloadComponent(this.url);
    }
    back(){
      window.history.back();
    }
    

}
