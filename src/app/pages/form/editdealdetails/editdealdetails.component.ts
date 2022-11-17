import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { DealDetails } from '../dealdetails/dealdetails.model';

@Component({
  selector: 'app-editdealdetails',
  templateUrl: './editdealdetails.component.html',
  styleUrls: ['./editdealdetails.component.scss']
})
export class EditdealdetailsComponent implements OnInit {
  dealdetaildata: any;
  dealid: any;
  dealdetails = new DealDetails;
  data: any;
  userdetails: any;
  leadsourceArr: any;
  dealdate1: any;
  to_date: any;
  dealdata: any;
  user_id: any;
  from_date: any;
  showdata: any;
  dataArr: any;
  business_target: any;
  status: any;
  closingdata: any;
  openingdata: any;
  business_value: any;
  team_leader_name: any;
  emp_name: any[]=[];
  emp_name1: any[]=[];
  userdata: any;
  fromDate1: any;
  fromDate: any;
  toDate1: any;
  toDate: any;
  attdata: any;
  pre_days: Object;
  userdata1: any;
  salary_justify: any[]=[];
  teamdetails: any;
  walking_closing: any;
  walking_sourcing: any;
  deal_sourcing: any;
  deal_closing: any;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private dataservice: DataService
  ) { }

  ngOnInit(): void {
    this.dealid=this.route.snapshot.params.id;
    this.getdealdetailbyid();
    this.getUsersdetails();
    this.getleadsource();
  }

   updatedata(){
      this.dataservice.updatedealdata(this.dealid,this.dealdetails).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/form/dealdetailslist']);
      console.log(res);
     })
   }

  getdealdetailbyid(){
    this.dataservice.getDealdetailsid(this.dealid).subscribe( res=>{
      this.data=res;
      this.dealdetails=this.data;
      console.log(this.data);
    });
  }

  getUsersdetails(){
    this.dataservice.getTeamleader().subscribe( res=>{
      this.teamdetails=res;
       console.log('Team Leader',res);
    });
  }
  
  getleadsource(){
    this.dataservice.getLeadsourceList().subscribe( res=>{
      this.leadsourceArr=res;
  
    });
  }

  getState1(event){
    console.log(event.target.value);
   this.team_leader_name = event.target.value;
   console.log('temleadername',this.team_leader_name);
   
 }
  getState3(event){
    console.log(event.target.value);
    this.from_date = event.target.value;
  }

 getState2(event){
  console.log(event.target.value);
  this.to_date = event.target.value;
  this.dealdata.team_leader_name=this.team_leader_name;
  this.dealdata.to_date=this.to_date;
  this.dealdata.from_date = this.from_date;
  console.log('dealdate', this.dealdata);
  this.dataservice.getteamleader(this.dealdata).subscribe( res=>{
  console.log('team_id',res);
  this.userdata = res;
  for (let i = 0; i < this.userdata.length; i++) {
    this.userdata1=this.userdata[i];
    this.user_id=this.userdata1.user_id;
    this.dealdetails.user_id[i]=this.user_id;

    console.log('userid',this.user_id);
    this.salary_justify[i]=this.userdata1.monthly_salary*6;
    this.dealdata.user_id=this.user_id;
    console.log("dealdata",this.dealdata);
    this.dataservice.getuserid(this.dealdata).subscribe( res=>{
      console.log("res new",res);
    this.data = res;
    this.dealdetails.closing_emp_id[i]=this.data[0].closing_emp_id;
    this.dealdetails.sourcing_emp_id[i]=this.data[0].sourcing_emp_id;
    this.dealdetails.business_value[i]=this.data[0].business_value;
    this.dealdetails.leadsource_count[i]=this.data[0].leadsource_count;
    this.dealdetails.business_target[i]=this.data[0].net_payout-this.salary_justify[i];
    this.dealdetails.sales_value[i]=this.data[0].payout_value-this.data[0].net_shared_payout;
    this.dealdetails.walking_closing[i]=this.data[0].walking_closing;
    this.dealdetails.walking_sourcing[i]=this.data[0].walking_sourcing;
    this.dealdetails.deal_sourcing[i]=this.data[0].deal_sourcing;
    this.dealdetails.deal_closing[i]=this.data[0].deal_closing;
    console.log('dealdetails',this.dealdetails.business_value);
    console.log('dealdetails',this.dealdetails);
    console.log('dealdetails',this.dealdetails);
    console.log('source_emp', this.dealdetails.sourcing_emp_id);
    console.log('business_tar',this.dealdetails.business_target);
    console.log('walking_closing', this.walking_closing);
    console.log('walking_closing', this.walking_sourcing);
    console.log('deal_sourcing',this.deal_sourcing);
    console.log('deal_closing',this.deal_closing);

    if(this.business_target[i] > 0){
                this.dealdetails.deal_status1[i]="Yes";
           }
           else{
              this.dealdetails.deal_status1[i]="No";
           }
    this.emp_name1[i]=this.userdata[i].firstname + ' ' + this.userdata[i].lastname;
    this.emp_name[i] =this.emp_name1[i];
        this.fromDate1 = this.from_date.split("-").map(item => item.trim());
           this.fromDate = this.fromDate1[0] + '-' + this.fromDate1[1];
    this.toDate1 = this.to_date.split("-").map(item => item.trim());
           this.toDate = this.toDate1[0] + '-' + this.toDate1[1];
    this.attdata.emp_name=this.emp_name[i];
    this.attdata.to_date=this.toDate;
    this.attdata.from_date=this.fromDate;
        console.log('attdata',this.attdata);

    this.dataservice.getattend_day(this.attdata).subscribe( res=>{
      console.log('data5',res);
       this.pre_days=res;
       this.dealdetails.attendance[i]=this.pre_days[0].present_days;

    })
  }) 
  }
 })
}

}
