import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import { DealDetails,DealData, Attdata } from './dealdetails.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dealdetails',
  templateUrl: './dealdetails.component.html',
  styleUrls: ['./dealdetails.component.scss']
})
export class DealdetailsComponent implements OnInit {

  dealdetails = new DealDetails;
  error = new DealDetails;
  dealdata = new DealData;
  dealdata1 = new DealDetails;
  userdetails: any;
  leadsourceArr: any;
  value:any;
  deal_date: any;
  dealdate1: any;
  year: any;
  month: any;
  showdata: any;
  basic_pay: any;
  dataArr: any;
  net_payout: any;
  business_target: any[]=[];
  deal_status: any[]=[];
  closingdata: any;
  closing: any;
  openingdata: any;
  open: any;
  from_date: any;
  to_date: any;
  businessvalue: any;
  business_value: any[]=[];
  date: Date;
  first_date: any;
  end_date: any;
  team_id: any;
  teamdetails: any;
  team_leader_id: any;
  team_name: any;
  team_leader_name: any;
  userdata: any;
  userdata1: any;
  data: any;
  data1: any[]=[];
  salary_justify:any[]=[];
  leadsource_count: any[]=[];
  deal_closing: any[]=[];
  closing_emp_id: any[]=[];
  sourcing_emp_id: any[]=[];
  empdata: any;
  emp_name: any[]=[];
  attdata = new Attdata;
  fromDate1: any;
  fromDate: any;
  toDate1: any;
  toDate: any;
  emp_name1: any[]=[];
  pre_days: Object;
  attendance: any[]=[];
  sales_value:  any[]=[];
  listServiceFeature: any[]=[];
  user_id: any[]=[];
  walking:any = [];
  source_walk:any = [];
  leads: any = [];
  mondata: any;
  months: any;
  date1: any;
  day1: any;
  day2: any;
  day3: any;

  constructor(
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) { }



  ngOnInit(): void {
    this.getUsersdetails();
    this.getleadsource();
    this.getmonthdetails();
     this.monthDate();
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
    // this.a= this.leadsourceArr.id *6;
     //console.log(this.leadsourceArr);
  });
}

getmonthdetails(){
  this.dataservice.getMonthslist().subscribe( res=>{
    this.months=res;
    console.log('Months Data',this.months);
  })
}



getState1(event){
   console.log(event.target.value);
  this.team_leader_name = event.target.value;
  console.log('temleadername',this.team_leader_name);
}
monthDate(){
var date = new Date();
// year = date.getFullYear(), month = date.getMonth();
  var firstDay = new Date(date.getFullYear(), date.getMonth(),1);
  console.log('first_day',firstDay);
  this.from_date =this.datepipe.transform(firstDay,'yyyy-MM-dd');
  console.log('firstDay',this.from_date);
  var end_date = new Date(date.getFullYear(), date.getMonth() + 1,0);
  this.to_date =this.datepipe.transform(end_date, 'yyyy-MM-dd');
  console.log('lastDay',this.to_date);
}
getState3(event){
  this.from_date = event.target.value;
}



getState2(event){
  console.log(event.target.value);
  this.to_date = event.target.value;
  this.dealdata.team_leader_name=this.team_leader_name;
  this.dealdata.to_date=this.to_date;
  this.dealdata.from_date = this.from_date;
  console.log(this.dealdata);
  this.dataservice.getteamleader(this.dealdata).subscribe( res=>{
    console.log('res',res);
  this.userdata = res;
  for (let i = 0; i < this.userdata.length; i++) {
    this.userdata1=this.userdata[i];
    this.user_id=this.userdata1.user_id;
    this.dealdetails.user_id[i]=this.user_id;

    this.salary_justify[i]=this.userdata1.monthly_salary*6;
    this.dealdata.user_id=this.user_id;
    console.log(this.dealdata);
    this.dataservice.getuserid(this.dealdata).subscribe( res=>{
      console.log("res new",res);
    this.data = res;
    this.dealdetails.closing_emp_id[i]=this.data[0].closing_emp_id;
    this.dealdetails.sourcing_emp_id[i]=this.data[0].sourcing_emp_id;
    this.dealdetails.business_value[i]=this.data[0].business_value;
    this.dealdetails.leadsource_count[i]=this.data[0].leadsource_count;
    this.dealdetails.business_target[i]=this.data[0].net_payout-this.salary_justify[i];
    this.dealdetails.sales_value[i]=this.data[0].payout_value-this.data[0].net_shared_payout;
    console.log('source_emp', this.dealdetails.sourcing_emp_id);
    console.log('business_tar',this.dealdetails.business_target);

    if(this.business_target[i] > 0){
                this.dealdetails.deal_status1[i]="Yes";
           }
           else{
              this.dealdetails.deal_status1[i]="No";
           }
    this.emp_name1[i]=this.userdata[i].firstname + ' ' + this.userdata[i].lastname;
    this.emp_name[i] =this.emp_name1[i];
    console.log('fromd',this.first_date);
        this.fromDate1 = this.from_date.split("-").map(item => item.trim());
           this.fromDate = this.fromDate1[0] + '-' + this.fromDate1[1];
    this.toDate1 = this.to_date.split("-").map(item => item.trim());
           this.toDate = this.toDate1[0] + '-' + this.toDate1[1];
    this.attdata.emp_name=this.emp_name[i];
    this.attdata.to_date=this.toDate;
    this.attdata.from_date=this.from_date;
       console.log('attdata',this.attdata);

    this.dataservice.getattend_day(this.attdata).subscribe( res=>{
       this.pre_days=res;
       console.log('attendent days',res)
       this.dealdetails.attendance[i]=this.pre_days[0].present_days;

    })
  }) 
  }

  console.log('tg',this.dealdetails.attendance);
 })

}

submitDetails12(){
  console.log('team_id',this.userdata);

    console.log('add',this.dealdetails);

    console.log('walking',this.walking);
    console.log('walk_souc',this.source_walk);
    console.log('leads_giv',this.leads);
    for(let i=0;i<=this.dealdetails.closing_emp_id.length-1;i++){
    this.dealdata1.salary_justify =  this.salary_justify[i];
    this.dealdata1.to_date =  this.to_date;
    this.dealdata1.from_date =  this.from_date;
    this.dealdata1.deal_closing =  this.dealdetails.closing_emp_id[i];
    this.dealdata1.attented_day =  this.dealdetails.attendance[i];
    this.dealdata1.business_target =  this.dealdetails.business_target[i];
    this.dealdata1.business_value =  this.dealdetails.business_value[i];
    this.dealdata1.leadsource =  this.dealdetails.leadsource_count[i];
    this.dealdata1.actual_sales =  this.dealdetails.sales_value[i];
    this.dealdata1.deal_status =  this.dealdetails.deal_status1[i];
    this.dealdata1.deal_sourcing =  this.dealdetails.sourcing_emp_id[i];
    this.dealdata1.user_id =  this.dealdetails.user_id[i];
    this.dealdata1.walking_closing =  this.walking[i];
    this.dealdata1.walking_sourcing = this.source_walk[i];
    this.dealdata1.leads_given = this.leads[i];
   
    console.log('Data_all',this.dealdata1);
   
    this.dataservice.addDealdetails(this.dealdata1).subscribe(res=>{
      console.log(res);
    });
   }

 this.handleResponse();
}



handleResponse() {
  //console.log(data)
  Swal.fire('Added!', 'Deal Details has been added.', 'success');
  this.router.navigateByUrl('/form/dealdetailslist');
}

handleError(error) {
  this.error = error.error.errors;
}

}
