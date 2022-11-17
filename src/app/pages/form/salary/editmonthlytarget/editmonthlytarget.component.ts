import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Monthlytarget } from '../monthly-target/monthly-target.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editmonthlytarget',
  templateUrl: './editmonthlytarget.component.html',
  styleUrls: ['./editmonthlytarget.component.scss']
}) 


export class EditmonthlytargetComponent implements OnInit {

  monthlytargetid : any;
  monthlytarget = new Monthlytarget;
  data : any;
  salarypacArr : any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.monthlytargetid=this.route.snapshot.params.id;
    this.getMonthlytargetData();
    this.getSalarypac();
  }

  getSalarypac(){
    this.dataservice.getSalarypackagelist().subscribe(res=>{
      //console.log(res);
      this.salarypacArr = res;
    })
  }

  getMonthlytargetData(){
    this.dataservice.getOneMonthlytarget(this.monthlytargetid).subscribe(res=>{
    console.log(res);
    this.data=res;
    this.monthlytarget=this.data[0];
    })
  }

  updateMonthlytarget(){
    this.dataservice.updateMonthlytarget(this.monthlytargetid,this.monthlytarget).subscribe(res=>{
      //console.log(res);
      Swal.fire('Updated!', 'Salary Package has been updated.', 'success');
      this.router.navigate(['/form/salary/monthly-target-list']);
      })
  }

  cancel(){
    this.router.navigate(['/form/salary/monthly-target-list']);

  }

}
