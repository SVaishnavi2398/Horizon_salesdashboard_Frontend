import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Advanceemi } from '../advance-emi/advance-emi.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editadvanceemi',
  templateUrl: './editadvanceemi.component.html',
  styleUrls: ['./editadvanceemi.component.scss']
})
export class EditadvanceemiComponent implements OnInit {

  advanceemiid : any;
  advanceemi = new Advanceemi;
  data : any;
  advancesalArr : any;

  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.advanceemiid=this.route.snapshot.params.id;
    this.getAdvanceemiData();
    // this.getAdvancesal();
  }

  // getAdvancesal(){
  //   this.dataservice.getAdvancesallist().subscribe(res=>{
  //     //console.log(res);
  //     this.advancesalArr = res;
  //   })
  // }


  getAdvanceemiData(){
    this.dataservice.getOneAdvanceemi(this.advanceemiid).subscribe(res=>{
    //console.log(res);
    this.data=res;
    this.advanceemi=this.data;
    })
  }

  updateAdvanceemi(){
    //console.log("123",this.advanceemiid,this.advanceemi)
    this.dataservice.updateAdvanceemi(this.advanceemiid,this.advanceemi).subscribe(res=>{
      //console.log(res);
      Swal.fire('Updated!', 'Salary Package has been updated.', 'success');
      this.router.navigate(['/form/salary/advance-emi-list']);
      })
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
