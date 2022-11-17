import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { ExcelService } from 'src/app/service/excel.service';
import Swal from 'sweetalert2';
import { DealArr,DateaArr } from './dealdetails.model';

@Component({
  selector: 'app-dealdetaillist',
  templateUrl: './dealdetaillist.component.html',
  styleUrls: ['./dealdetaillist.component.scss']
})
export class DealdetaillistComponent implements OnInit {
  dealsData: any;
  team_leader_name: any;
  teamdetails: any;
  user_id: any;
  userdata: any;
  userdata1: any;
  userDetails: Object;
  from_date: any;
  userdate: any;
  month_id: any;
  to_date: any;
  dealarr = new DealArr;
  userdata2 = new DealArr;
  datedata = new DateaArr;
  myForm:any;
  searchdealdetaillist:string;
  data: any;
  fileUrl: any;
  title = 'exportExcelInAngular';
  // closing_emp_id: any;

  public page = 1;
  public pageSize = 10;
  
  constructor(

    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private  fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private excelService:ExcelService
   
  )
  
  { 
    this.myForm = fb.group({
      name: '2'
    })

  }

  ngOnInit(): void {
    this.Dealdetaillist12();
    this.getUsersdetails();
    this.data="hello";
    this.userdata = [];
    const data = this.data;
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

  }
  getdata(){
    // const data = this.userdata;
    // const blob = new Blob([data], { type: 'application/octet-stream' });

    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  Dealdetaillist12(){
    this.dataservice.getname().subscribe( res=>{
      this.dealsData=res;
      // console.log(this.dealsData);
    });
  }

  getUsersdetails(){
    this.dataservice.getTeamleader().subscribe( res=>{
      this.teamdetails=res;
      console.log('Team Leader',res);
    });
  }
  getState1(event){
    console.log(event.target.value);
   this.team_leader_name = event.target.value;
  //  console.log('temleadername',this.team_leader_name);
   this.dataservice.getuserdata(this.team_leader_name).subscribe( res=>{
      this.userdata=res;
      // console.log('new_data',this.userdata);

      for (let i = 0; i < this.userdata.length; i++){
     
        this.userdata2.business_target[i]=this.userdata[i].business_target;
        this.userdata2.leadsource_count[i]=this.userdata[i].leadsource;
        this.userdata2.deal_closing[i]=this.userdata[i].deal_closing;
        this.userdata2.firstname[i]=this.userdata[i].firstname;
        this.userdata2.lastname[i]=this.userdata[i].lastname;
        this.userdata2.actual_sales[i]=this.userdata[i].actual_sales;
        this.userdata2.attented_day[i]=this.userdata[i].attented_day;
        this.userdata2.business_value[i]=this.userdata[i].business_value;
        this.userdata2.deal_sourcing[i]=this.userdata[i].deal_sourcing;
        this.userdata2.deal_status[i]=this.userdata[i].deal_status;
        this.userdata2.from_date=this.userdata[i].from_date;
        this.userdata2.to_date=this.userdata[i].to_date;
        this.userdata2.leads_given[i]=this.userdata[i].leads_given;
        this.userdata2.salary_justify[i]=this.userdata[i].salary_justify;
        this.userdata2.deal_status[i]=this.userdata[i].deal_status;
        this.userdata2.walking_closing[i]=this.userdata[i].walking_closing;
        this.userdata2.walking_sourcing[i]=this.userdata[i].walking_sourcing;


      }
      // console.log('hi1',this.userdata2);
    
    
    this.dataservice.getuserData1(this.team_leader_name).subscribe( res=>{
      this.userDetails=res;
    // console.log('single2335',res); 
    })
   } )
 }


  getState2(event){
    console.log(event.target.value);
    this.user_id = event.target.value;
    
    this.dataservice.getuserinfo(this.user_id).subscribe( res=>{
      this.userdata=res;
      // console.log('single2',res); 
    })
    
  }
  getstate5(event){
    console.log(event.target.value);
    this.from_date = event.target.value;
    console.log('from_date',this.from_date);
   }
   
   getstate6(event){
    console.log(event.target.value);
    this.to_date = event.target.value;

    this.datedata.from_date=this.from_date;
    this.datedata.to_date=this.to_date;
    this.datedata.user_id=this.user_id;

      this.dataservice.getDealdate(this.datedata).subscribe( res=>{
        this.userdata=res;
        console.log('date7771',res);
  
       })

     
   }
  

  getState3(event){
    this.month_id = event.target.value;
    console.log('month',this.month_id);
    this.dataservice.getdate(this.month_id).subscribe( res=>{
      this.userdate=res;
      console.log('date',res);
    })
  }

  deleteDeal(deal_id ){
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
  
        this.dataservice.deleteDeals(deal_id ).subscribe(res=>{
        Swal.fire('Deleted!', 'Team has been deleted.', 'success');
        });
        this.Dealdetaillist12();
      }
    })
  // this.reloadComponent();
  
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
  }
  resetForm() {
    // this.myForm.reset({
    //   name: ''
    // })
    this.myForm.reset();
    this.userdata = [];
  }
 
  exportAsXLSX():void {
    
    this.excelService.exportAsExcelFile(this.userdata, 'Data');
  }

}


