import { Component, OnInit } from '@angular/core';
import { FormArray,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { Walkindata } from './walkindeals.model';

@Component({
  selector: 'app-walkindeals',
  templateUrl: './walkindeals.component.html',
  styleUrls: ['./walkindeals.component.scss']
})
export class WalkindealsComponent implements OnInit {
  file: any;
  arrayBuffer: any;
  filelist: any;
  filedata: any;
  walkindata =new Walkindata;
  walkinArr =new Walkindata;
  dataArr: any;
  teamdetails: any;
  teamsArr: any;
  leadsourceArr: any;
  usersArr: any;
  clientArr: any;
  projectArr: any;
  leaderArr: any;
  project_id:any[]=[];
  client_name:any[]=[];
  flat_no :any[]=[];
  building_name:any[]=[];
  payout_value :any[]=[];
  consideration_value :any[]=[];
  sourcing_emp_id: any[]=[];
  date: any[]=[];
  closing_emp_id: any[]=[];
  team_id: any[]=[];
  team_leader_id: any[]=[];
  revisit: any[]=[];
  videopresentation: any[]=[];
  leadsource_id: any[]=[];
  remark: any[]=[];
  presentwithclient: any[]=[];
  closingtisite: any[]=[];
  form: FormGroup;
  router: any;
  error: any;
  data2: any;
  empArr: any;
  myForm;
  constructor(

    private dataservice: DataService,
    private  fb: FormBuilder
  ) { 

    this.myForm = fb.group({
      name: '2'
    })
  }

  ngOnInit(): void {
    
    this.form = new FormGroup({
      passenger: new FormArray([
        new FormGroup({
          project_id: new FormControl(''),
          client_name:new FormControl(''),
          sourcing_emp_id: new FormControl(''),  
          date: new FormControl(''),
          closing_emp_id: new FormControl(''),
          team_id: new FormControl(''),
          team_leader_id: new FormControl(''),
          revisit: new FormControl(''),
          videopresentation: new FormControl(''),
          leadsource_id: new FormControl(''),
          remark: new FormControl(''),
          presentwithclient: new FormControl(''),
          closingtisite: new FormControl('')

        })
      ])
    });
    this.getTeamsData();
    this.getLeadsourceData();
    this.getUserData();
    this.getClientData();
    this.getProjectData();
    this.getTeamdata();
  }

  

  get passenger(): FormArray {
    return this.form.get('passenger') as FormArray;
  }

  addPassenger() {
    this.passenger.push(
      new FormGroup({
        project_id: new FormControl(''),
        client_name:new FormControl(''),
        sourcing_emp_id: new FormControl(''),
        date: new FormControl(''),
        closing_emp_id: new FormControl(''),  
        team_id: new FormControl(''),
        team_leader_id: new FormControl(''),
        revisit: new FormControl(''),
        videopresentation: new FormControl(''),
        leadsource_id: new FormControl(''),
        remark: new FormControl(''),
        presentwithclient: new FormControl(''),
        closingtisite: new FormControl('')
      })
    );
  
  }


  getTeamsData() {
    this.dataservice.getTeamslist().subscribe(res => {
      this.teamsArr = res;
    })
  }

  getLeadsourceData() {
    this.dataservice.getLeadsourceList().subscribe(res => {
      this.leadsourceArr = res;
    })
  }

  getUserData() {
    this.dataservice.getsrcdata().subscribe(res => {
      this.usersArr = res;
       console.log('src',this.usersArr);
    })
  }

  

  getClientData() {
    this.dataservice.getClientList().subscribe(res => {
       console.log('cn',res);
      this.clientArr = res;
    })
  }

  getProjectData() {
    this.dataservice.getProjectslist().subscribe(res => {
      //console.log(res);
      this.projectArr = res;
    })
  }

  getTeamdata(){
    this.dataservice.getTeamleader().subscribe(res =>{
      this.leaderArr = res;
      console.log(this.leaderArr);
    })
  }


  // addfile() {
  //   let fileReader = new FileReader();
  //   fileReader.readAsArrayBuffer(this.file);
  //   fileReader.onload = (e) => {
  //     this.arrayBuffer = fileReader.result;
  //     var data = new Uint8Array(this.arrayBuffer);
  //     var arr = new Array();
  //     for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  //     var bstr = arr.join("");
  //     var workbook = XLSX.read(bstr, { type: "binary" });
  //     var first_sheet_name = workbook.SheetNames[0];
  //     var worksheet = workbook.Sheets[first_sheet_name];
  //     console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
  //     this.filelist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
  //     console.log('hii',this.filelist);
  //     this.filedata = this.filelist;
  //    let xData = {
  //       "Meeting ID": [1,2,3],
  //       "Something Else": [3,4,5],
  //     }
  //     let    normalizedXData = {}

  //   let dataArr=  Object.keys(xData).map(function(columnName) {
  //       normalizedXData[ columnName.toLowerCase().replace(" ", "") ] = xData[columnName]
  //     })
  //     console.log('dataArr',dataArr);

  //     for (let i=0;i<=this.filedata.length-1;i++){
  //       this.walkindata.closing= this.filedata[i].Closing;
  //       this.walkindata.sourcing = this.filedata[i].Sourcing;
  //       this.walkindata.team= this.filedata[i].Team;
  //       this.walkindata.remark = this.filedata[i].Remark;

  //       this.dataservice.addwalkindata(this.walkindata).subscribe(res=>{
  //         console.log('file2',res);
  //       });

  //     }
  //     console.log('file1',this.walkindata);

  //   }
  // }
  // addfilevent(event: any) {
  //   this.file = event.target.files[0];
  // }
  Submitdata(){

    this.data2=this.passenger.value;
    console.log('data ppp',this.passenger.value);

    for(let i=0; i < this.passenger.value.length; i++){
      this.walkinArr.date = this.passenger.value[i].date;
      this.walkinArr.client_name = this.passenger.value[i].client_name;
      this.walkinArr.project_id = this.passenger.value[i].project_id;
      this.walkinArr.sourcing_emp_id = this.passenger.value[i].sourcing_emp_id;
      this.walkinArr.closing_emp_id = this.passenger.value[i].closing_emp_id;
      this.walkinArr.team_id = this.passenger.value[i].team_id;
      this.walkinArr.team_leader_id = this.passenger.value[i].team_leader_id;
      this.walkinArr.revisit = this.passenger.value[i].revisit;
      this.walkinArr.videopresentation = this.passenger.value[i].videopresentation;
      this.walkinArr.leadsource_id =this.passenger.value[i].leadsource_id;
      this.walkinArr.remark = this.passenger.value[i].remark;
      this.walkinArr.presentwithclient = this.passenger.value[i].presentwithclient;
      this.walkinArr.closingtisite = this.passenger.value[i].closingtisite;
      
      this.dataservice.addwalkindata(this.walkinArr).subscribe(res=>{
        Swal.fire('Added!', 'Walkin Deals has been added.', 'success');
        //  this.teamdetails=res;
          // console.log('Team Leader',res);
          // data=>this.handleResponse1(data),
          // error=>this.handleError(error)
      });
    }
    console.log('data',this.walkinArr);

    
 

    console.log('passenger', this.passenger.value);
  }

  handleResponse1(data) {
    //console.log(data)
    // for(let i=0;i<=this.passenger.length-1;i++){
    //   this.walkinArr.date = this.passenger[i].date;
    //   this.walkinArr.clientsname = this.passenger[i].clientsname;
    //   this.walkinArr.projectname = this.passenger[i].projectname;
    //   this.walkinArr.sourcing = this.passenger[i].sourcing;
    //   this.walkinArr.closing = this.passenger[i].closing;
    //   this.walkinArr.team = this.passenger[i].team;
    //   this.walkinArr.teamleadername = this.passenger[i].teamleadername;
    //   this.walkinArr.revisit = this.passenger[i].revisit;
    //   this.walkinArr.videopresentation = this.passenger[i].videopresentation;
    //   this.walkinArr.weblead = this.passenger[i].weblead;
    //   this.walkinArr.remark = this.passenger[i].remark;
    // }
    Swal.fire('Added!', 'Walkin Deals has been added.', 'success');
    // this.router.navigateByUrl('/form/dealdetailslist');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  // resetForm() {
  //   // this.myForm.reset({
  //   //   name: ''
  //   // })
  //   this.myForm.reset();
  //   this.data2= [];
  // }
}
