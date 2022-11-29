import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Clientpaymentschedule } from '../clientpaymentschedule/clientpaymentschedule.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientpaymentschedulelist',
  templateUrl: './clientpaymentschedulelist.component.html',
  styleUrls: ['./clientpaymentschedulelist.component.scss']
})
export class ClientpaymentschedulelistComponent implements OnInit {

  public page = 1;
  public pageSize = 10;
  public clientpaymentscheduleList: Array<Clientpaymentschedule> = [];
  searchclientpayment : string;

  clientpaymentscheduleArr : any;
  searchteamdetailslist : string;
  totalCount: any;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getClientpaymentscheduleData();
  }

  getClientpaymentscheduleData(){
    this.dataservice.getClientpaymentschedule().subscribe(res=>{
      this.clientpaymentscheduleArr=res;
      this.totalCount= this.clientpaymentscheduleArr.length;
      this.clientpaymentscheduleList = this.getClientpaymentscheduleData1(this.totalCount);
    })
  }

  getClientpaymentscheduleData1(count) {
    let list = [];
    for (let index = 0; index < count; index++) {
      list.push({random: Math.random()});
    }
    return list;
  }

  deleteClientpaymentscheduleData(client_payment_schedule_id){
    Swal.fire({
      title: 'Are you sure?',
      //text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then(res => {
      if (res.value) {
  
        this.dataservice.deleteClientpaymentschedule(client_payment_schedule_id).subscribe(res=>{
        Swal.fire('Deleted!', 'Client Payment Schedule has been deleted.', 'success'); 
        this.getClientpaymentscheduleData();
        });
  
      }
    })
  
  
  }

}
