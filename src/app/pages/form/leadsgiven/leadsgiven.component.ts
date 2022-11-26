import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { DataService } from 'src/app/service/data.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';


import { Edata, LeadData, WeeklyData } from './leadsgiven.model';

@Component({
  selector: 'app-leadsgiven',
  templateUrl: './leadsgiven.component.html',
  styleUrls: ['./leadsgiven.component.scss']
})
export class LeadsgivenComponent implements OnInit {
  ExcelData: any;
  edata = new Edata;
  monthdata = new Edata;
  adddata = new LeadData;
  leaddata = new LeadData;
  teamsArr: any;
  teamname: any[] = [];
  team_id: any[] = [];
  team: any[] = [];
  usersArr: any;
  username: any[] = [];
  user_id: any[] = [];
  emp_code: any[] = [];
  codeArr: any;
  adddata1 = new WeeklyData;
  adddata3 = new WeeklyData;
  searchleads: string;
  dataArr: any;
  excelArr: any;
  form: any;
  code: any[] = [];
  realColors: any[] = [];
  data3: any;
  form1: FormGroup;
  weekdata= new WeeklyData;
  weekData: any;
  event: any;
  anydate: any;
  today: number = Date.now();
  anyteam: any;
  date: any;
  teams: any;
  leadsarr: any;
  weeklyarr: any;

  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false
  // emp_name: any[]=[];
  firstname: any[]=[];
  lastname: any[]=[];
  leads_given_to: any[]=[];
  valid_lead_count: any[]=[];
  data: any;
  updatedata_id: any;
  LeadData: any;
  // router: any;
  disable: any;
  disable1: any;
  edit: any;
  edit1: any;
  emp_id: any;
  emp_name: any;
  userdatas: any;
  userdetails: any;
  // router: any;
  // emp_name: any[]=[];


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible;
    this.completedata();
    this.completedata1();
    // this.form.controls.passenger.length = [];
  }
  


  policySuccesss($event) {
    console.log($event);
  }

  public page = 1;
  public pageSize = 10;

  constructor(
    private dataservice: DataService,
    private datepipe :DatePipe,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(''),
      date: new FormControl(''),
      passenger: new FormArray([
        new FormGroup({
          leads_given_id: new FormControl(''),
          team_id:new FormControl(''),
          // emp_code: new FormControl(''),  
          emp_id: new FormControl('',Validators.required),
          month: new FormControl(''),
          leads_given_to: new FormControl('',Validators.required),
          valid_lead_count: new FormControl('',Validators.required)
        })
      ])
    });
    this.form1 = new FormGroup({
      name1: new FormControl(''),
      date1: new FormControl(''),
      passenger1: new FormArray([
        new FormGroup({
          team_id:new FormControl(''),
          emp_id: new FormControl('',Validators.required),
          week_date:new FormControl(''),
          week_count:new FormControl(''),
          yearly_week_count: new FormControl(''),
          weekly_lead_count: new FormControl('',Validators.required),
          weekly_lead_count_valid: new FormControl('',Validators.required)
        })
      ])
    });
    this.getTeamsData();
   this.getUserData();
    this.getCodeData();
    this.getdata();
    this.getexceldata();
    this.disable = [];
    this.disable1 = [];

  }

  get passenger(): FormArray {
    return this.form.get('passenger') as FormArray;
  }
  get passenger1(): FormArray {
    return this.form1.get('passenger1') as FormArray;
  }
  addPassenger1() {
    this.passenger1.push(
      new FormGroup({
        team_id:new FormControl(''),
        emp_id: new FormControl(''),
        week_date:new FormControl(''),
        week_count:new FormControl(''),
        yearly_week_count: new FormControl(''),
        weekly_lead_count: new FormControl(''),
        weekly_lead_count_valid: new FormControl('')
      })
    );
    console.log('passenger',this.passenger1.value);
  }
  addPassenger() {
    this.passenger.push(
      new FormGroup({
        leads_given_id: new FormControl(''),
        team_id:new FormControl(''),
        // emp_code: new FormControl(''),
        emp_id: new FormControl(''),
        month: new FormControl(''),  
        leads_given_to: new FormControl(''),
        valid_lead_count: new FormControl('')
      })
    );
  }

  id: any = "mission";
  tabChange(ids: any) {
    this.id = ids;
  }

  getTeamsData() {
    this.dataservice.getTeamslist().subscribe(res => {
      this.teamsArr = res;
       console.log('teamname',this.teamsArr);
    })
  }

  getUserData() {
    this.dataservice.getsrcdata().subscribe(res => {
      this.usersArr = res;
       console.log('src',this.usersArr);

       for(let i = 0; i < this.usersArr.length; i++){
        if(this.usersArr[i].emp_code != '-'){
          this.code[i] = this.usersArr[i].emp_code;
        }
       }
      //  console.log('Employee',this.code);

       this.realColors = this.code.filter(function (e) {return e != null;});
      //  console.log('colors',this.realColors)
    })
  }

  getCodeData() {
    this.dataservice.getUsers().subscribe(res => {
      this.codeArr = res;
      // console.log('emp_code', this.codeArr);
    })
  }

  getdata() {
    this.dataservice.getalldata().subscribe(res => {
      this.dataArr = res;
      //  console.log('All', this.dataArr);
    })
  }


  getexceldata() {
    this.dataservice.getdata().subscribe(res => {
      this.excelArr = res;
      //  console.log('Alldata', this.dataArr);
    })
  } 

  leadsview(){
    this.dataservice.getteamsdata().subscribe(res => {
      this.leadsarr = res;
      console.log('ssssssssssssssssss', res);
      for(let i=0; i < this.leadsarr.length; i++){
        this.firstname[i] = this.leadsarr[i].firstname; 
        this.lastname[i] = this.leadsarr[i].lastname;
        this.leads_given_to[i] = this.leadsarr[i].leads_given_to;
        this.valid_lead_count[i] = this.leadsarr[i].valid_lead_count;
      }
      
    })
  }

  weeklyleadsview(){
    this.dataservice.getweekleadsdata().subscribe(res => {
      this.weeklyarr = res;
      console.log('WeeklyData', this.weeklyarr);
    })
  }


  Updatedata(leads){
    console.log('Data',leads);
    this.leaddata = leads;
    console.log(this.leaddata.leads_given_id);
    this.dataservice.updateleadsdata(this.leaddata.leads_given_id,this.leaddata).subscribe(res =>{ 
          console.log('editdata',res);
          // this.updatedata = this.leads_given_to;
          // this.updatedata = this.valid_lead_count;
        })
        this.dataservice.updateleadsdata(this.leaddata.leads_given_id,this.leaddata).subscribe(res=>{
          Swal.fire('Updated!', 'Monthly Leads has been updated.', 'success');
          //  this.teamdetails=res;
            // console.log('Team Leader',res);
            // data=>this.handleResponse1(data),
            // error=>this.handleError(error)
        });
  }

  editmonthly(event){
    console.log(event.target.value);
    this.edit = event.target.value;
    // this.leaddata = leads;
    // this.leaddata.leads_given_id.disable = "false";
    this.disable = "false";
  }

  editweekly(event){
    console.log(event.target.value);
    this.edit1 = event.target.value;
    this.disable1="false";
  }

  Updatedata1(weekly){
    console.log('WeekData',weekly);
    this.adddata3 = weekly;
    console.log(this.adddata3.id);
    this.dataservice.updateweekdata(this.adddata3.id,this.adddata3).subscribe(res =>{ 
      console.log('EditWeekly',res);
      // this.updatedata = this.leads_given_to;
      // this.updatedata = this.valid_lead_count;
    })

    this.dataservice.updateweekdata(this.adddata3.id,this.adddata3).subscribe(res=>{
      Swal.fire('Updated!', 'Weekly Leads has been updated.', 'success');
    });
  }

  Submitdata2(){
    this.dataservice.updateleadsdata(this.id,this.LeadData).subscribe(res => {
console.log('Submitdata',res);
    })
  }

  getdate(event){
    // console.log('monthyear',event.target.value);
    this.date = event.target.value;
    console.log('Date',this.date);
    this.monthdata.month = this.date;
  }

  Submitdata(){
    this.data3=this.passenger.value;
    console.log('data ppp',this.passenger.value);
    console.log('data p',this.monthdata.month);
    console.log('ppppp', this.monthdata.team_id);

    for(let i=0; i < this.passenger.value.length; i++){
      // this.monthdata.team_id = this.passenger.value[i].team_id;
      // this.monthdata.teamname = this.passenger.value[i].teamname;
      // this.monthdata.emp_code = this.passenger.value[i].emp_code;
      this.monthdata.emp_id = this.passenger.value[i].emp_id;
      // this.monthdata.month = this.passenger.value[i].month;
      this.monthdata.leads_given_to = this.passenger.value[i].leads_given_to;
      this.monthdata.valid_lead_count = this.passenger.value[i].valid_lead_count;

      this.dataservice.addmonthlyleads(this.monthdata).subscribe(res=>{
       
      });
      
    }
    Swal.fire('Added!', 'Monthly Leads has been added.', 'success').then((res)=>{
      this.router.navigateByUrl('/form/leadsgivenlist');
    });
   
      this.leadsview();
      this.onclick();
    console.log('data',this.monthdata);
  }


  Submitdata1(){
    this.adddata1=this.passenger1.value;

    console.log('data2',this.passenger1.value);

    for(let i=0; i < this.passenger1.value.length; i++){
      // this.weekdata.team_id = this.passenger1.value[i].team_id;
      this.weekdata.emp_id = this.passenger1.value[i].emp_id;
      // this.weekdata.teamname = this.passenger1.value[i].teamname;
      // this.weekdata.week = this.passenger1.value[i].week;
      // this.weekdata.week_count = this.passenger1.value[i].week_count;
      // this.weekdata.yearly_week_count = this.passenger1.value[i].yearly_week_count;
      this.weekdata.weekly_lead_count = this.passenger1.value[i].weekly_lead_count;
      this.weekdata.weekly_lead_count_valid = this.passenger1.value[i].weekly_lead_count_valid;



      console.log('data',this.weekdata);
      this.dataservice.addweekleads(this.weekdata).subscribe(res=>{
        
      });
    }
    Swal.fire('Added!', 'Weekly Leads has been added.', 'success').then((res)=>{
      this.router.navigateByUrl('/form/weeklyleadslist');
    });
    this.weeklyleadsview();
    this.onclick();
   
  }

  formatDates(event) {
    this.anydate = event.target.value;
    console.log('date count',this.anydate);
    this.weekdata.week = this.anydate; 
    // this.weekdata.emp_id = this.emp_id;
    this.weekdata.yearly_week_count =  this.datepipe.transform(this.weekdata.week, 'w');
    this.weekdata.week_count = this.datepipe.transform(this.weekdata.week, 'W');

  }
 
  teamsdata(event){
    this.anyteam = event.target.value;
    console.log('anyteam', this.anyteam);
    this.weekdata.team_id = this.anyteam; 
    this.dataservice.getteamemployee(this.anyteam).subscribe( res=>{

      this.dataservice.getteamsorting(this.anyteam).subscribe( res=>{
        this.userdetails = res;
      })
    })
  }

  formatDate(event){
    this.date = event.target.value;
    console.log('Date',this.date);
    this.monthdata.month = this.date;
  }

  teamsname(event){
    this.teams = event.target.value;
    console.log('teamsname',this.teams);
    this.monthdata.team_id = this.teams;
    this.dataservice.getuserteam(this.teams).subscribe( res=>{

      this.dataservice.getteamemp(this.teams).subscribe( res=>{
        // this.userdetail=res;
        this.userdatas=res;
        // this.datedata.userdetail1=res;
  
      console.log('single2335',this.userdatas); 
      })

    })
    
  }
  openModal(content: any) {
    this.modalService.open(content, { windowClass: 'modal-holder' });
  }

  completedata(){
    this.form.reset();
  }


  completedata1(){
    this.form1.reset();
  }

}
