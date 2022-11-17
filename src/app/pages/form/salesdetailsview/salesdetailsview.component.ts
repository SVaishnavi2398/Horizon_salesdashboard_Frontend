import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Salesdetails } from '../salesdetails/salesdetails.model';
import { Router } from '@angular/router';
import { Salescomments } from '../salescomments/salescomments.model';

@Component({
  selector: 'app-salesdetailsview',
  templateUrl: './salesdetailsview.component.html',
  styleUrls: ['./salesdetailsview.component.scss']
})
export class SalesdetailsviewComponent implements OnInit {

  // Collapse declare
  isCollapsed: boolean;
  salesdetailsid:any;
  salescommentsid:any;
  salesdetailsArr : any;
  searchcompanylist : string;
  salesdetails= new Salesdetails;
  salescomments = new Salescomments;
  data:any;
  salesArr:any;
  usersArr:any;
  salescommentsArr:any;
  clientArr : any;
  projectArr : any;
  subprojectsArr : any;
  bookingstatusArr : any;
  channelpartnerArr : any;
  payoutstatusArr : any;
  teamsArr : any;
  leadsourceArr : any;
  userDisplayName: string;
  userArr: any;
  user: any;
  user1: any;
  user2: any;
  url: any;
  id: any;
  id1: any;
  companylistArr: Object;
  
  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.salesdetailsid=this.route.snapshot.params.id;
    this.id = Number(this.salesdetailsid) + Number(1);
    this.id1 = Number(this.salesdetailsid) - Number(1);
    this.salescommentsid=this.route.snapshot.params.id;
    this.getClientData();
    this.getProjectData();
    this.getSubprojectData();
    this.getBookingstatusData();
    this.getChannelpartnerData();
    this.getPayoutstatusData();
    this.getSales();
    this.getUsers();
    this.getTeamsData();
    this.getLeadsourceData();
    this.getSalesomments();
    this.getSalescommentsData();
    this.getSalesdetailsData();
    this.getSalesdetailsData2();
    this.isCollapsed = false;
    this.profile();
    this.getCompanyData();
  }

  getClientData(){
    this.dataservice.getClientdetails().subscribe(res=>{
      //console.log(res);
      this.clientArr = res;
    })
  }

  getProjectData(){
    this.dataservice.getProjectslist().subscribe(res=>{
      //console.log(res);
      this.projectArr = res;
    })
  }

  getSubprojectData(){
    this.dataservice.getSubprojectslist1().subscribe(res=>{
      //console.log(res);
      this.subprojectsArr = res;
    })
  }

  getBookingstatusData(){
    this.dataservice.getBookingstatusList().subscribe(res=>{
      //console.log(res);
      this.bookingstatusArr = res;
    });
  }

  getChannelpartnerData(){
    this.dataservice.getChannelpartner().subscribe(res=>{
      //console.log(res);
      this.channelpartnerArr = res;
    });
  }

  getPayoutstatusData(){
    this.dataservice.getPayoutstatusList().subscribe(res=>{
      //console.log(res);
      this.payoutstatusArr = res;
    });
  }

  getTeamsData(){
    this.dataservice.getTeamslist().subscribe(res=>{
      this.teamsArr = res;
    })
  }

  getLeadsourceData(){
    this.dataservice.getLeadsourceList().subscribe(res=>{
      this.leadsourceArr = res;
    })
  }

  getSales(){
    this.dataservice.getSaleslist().subscribe(res=>{
      //console.log(res);
      this.salesArr = res;
    })
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersArr = res;
    })
  }

  getSalesdetailsData(){
    this.dataservice.getSalesdetails().subscribe(res=>{
      this.salesdetailsArr=res;
    })

    
  }

  getCompanyData(){
    this.dataservice.getCompany().subscribe(res=>{
      this.companylistArr=res;
      
    })
  }

  getSalesdetailsData2(){
    this.dataservice.getOneSalesdetails(this.salesdetailsid).subscribe(

      data=>this.handleResponse(data),
    error=>this.handleError(error)
  );

  }

  handleResponse(data){
    this.salesdetails=data;
   }
    
     
    handleError(error){
     if(this.salesdetailsid != '0'){
       this.url = '/form/salesdetailsview/'+1;
      this.reloadComponent1(this.url);
     }
     else{
      this.dataservice.getSalesdetails().subscribe(res=>{
      this.data = res;
      var lastid = this.data.length;
      this.url = '/form/salesdetailsview/'+lastid;
      this.reloadComponent1(this.url);
      })
    }
    }

  getSalescommentsData(){
    this.dataservice.getOneSalesdetails(this.salescommentsid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.salescomments=this.data;
    })
  }
  

  getSalesomments(){
    this.dataservice.getSalesomments(this.salescommentsid).subscribe(res=>{
     //console.log(res);
     this.salescommentsArr = res;
     //console.log(this.salescommentsArr);
  
   })
  }

  submitcomments(){
    this.dataservice.registerSalescomments(this.salescomments).subscribe(res =>{
      //console.log(res);
      this.reloadComponent();
      //Swal.fire('Added!', 'Sales Details been added.', 'success'); 
      //this.router.navigate(['/form/salesdetailslist']);
  })
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
  }

  profile(){
    this.userDisplayName = sessionStorage.getItem('loggedUser');
     this.dataservice.getOneUser(this.userDisplayName).subscribe(res=>{
       this.userArr = res;
        this.user = this.userArr[0].firstname;
        this.user1 = this.userArr[0].middlename;
        this.user2 = this.userArr[0].lastname;
      console.log(this.user);
      //console.log(this.userDisplayName);
         
     })
   }

   reloadComponent1(url) {
    let currentUrl = url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

    doSomeLogic(){
      this.url = '/form/salesdetailsview/'+this.id;
      this.reloadComponent1(this.url);
    }
    doSomeLogics(){
    
      this.url = '/form/salesdetailsview/'+this.id1;
      this.reloadComponent1(this.url);
    }
    back(){
      window.history.back();
    }
    

}
