import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { addDivisions, building_name, Invoicedetails } from './invoicedetailsnew.model';

@Component({
  selector: 'app-invoicedetailsnew',
  templateUrl: './invoicedetailsnew.component.html',
  styleUrls: ['./invoicedetailsnew.component.scss']
})
export class InvoicedetailsnewComponent implements OnInit {

  Service = [5,5];
  invoicedetails = new Invoicedetails;
  error = new Invoicedetails;
  flatdetails =new Invoicedetails;
  flatdetails1=new Invoicedetails;
  companylistArr:any;
  saleslistArr:any;
  invoicestatusArr:any;
  clientlistArr : any;
  gstArr: any;
  cgst: any;
  value: any;
  data: any;
  sales = new Invoicedetails;
  salesArray = new Invoicedetails;
  newDivs: addDivisions[] = [];
  newDivs1: addDivisions[] = [];
  form: FormGroup;
  empList : any[]=[];
 
  public itemList;
  public item;
  public items = [];
  lists: any; 
  clientsArr: any;
  invoiceid: any;
  valueArr: any;
  array: any[]=[];
  newarray = new Invoicedetails;
  jasonArray= new Invoicedetails;
  invoiceArr: any;
  company_id: any;
  sales_id = new Invoicedetails;
  sales_id1:any;
  flat_no =new Invoicedetails;
 building_name = new building_name;
 payout_value = new Invoicedetails;
 consideration_value = new Invoicedetails;
  array2: any;
  constructor(
    private dataservice:DataService,
    private route: Router,
    private Token:TokenService,
    private router:ActivatedRoute
  

  ) {
    
   }


  ngOnInit(): void {
    this.invoiceid=this.router.snapshot.params.id;

    this.form = new FormGroup({
      passenger: new FormArray([
        new FormGroup({
        flat_no: new FormControl(''),
        building_name: new FormControl(''),
        consideration_value: new FormControl(''),
        payout_value: new FormControl(''),
        client_id: new FormControl(''),
        sales_id: new FormControl('')


        })
      ])
    });

    console.log(this.form);
  
    this.getSalesdetails();
    this.getInvoicestatus();
    this.getClientData();
    this.getInvoiceDetails();
  }

  getCompanyData(id){
    this.dataservice.getOneCompany(this.company_id).subscribe(res=>{
      this.companylistArr=res;
      this.getState1(this.companylistArr.debtor_company_det_id);
      
    })
  }

  getSalesdetails(){
    this.dataservice.getSalesdetails().subscribe(res=>{
      this.saleslistArr=res;
    })
  }

  getInvoicestatus(){
    this.dataservice.getInvoiceStatus().subscribe(res=>{
      this.invoicestatusArr=res;  
    })
  }

  getClientData(){
    this.dataservice.getClientdetails().subscribe(res=>{
      this.clientlistArr = res;        
    })
  }

  getInvoiceDetails(){
    this.dataservice.getOneInvoicedetails(this.invoiceid).subscribe(res=>{
      this.invoiceArr = res;  
      this.company_id  = this.invoiceArr[0].company_id;  
      this.getCompanyData(this.company_id);

    })
  }

  submitInvoicedetails(){
    this.dataservice.registerinvoicedetails(this.invoicedetails).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
  );
  }

  
  handleResponse(data){
   (this.salesArray.client_id);
    if(data.client_id == this.salesArray.client_id){
    this.Token.handle(data.access_token);
    Swal.fire('Added!', 'Invoice Details has been added.', 'success'); 
    this.route.navigateByUrl('/form/invoices/invoice/invoicedetailslist');
    }
  }

   
  handleError(error){
    this.error = error.error.errors;
  }

  getState1(id){
    var compny_id = id;
  //   this.dataservice.getCompanygst(compny_id).subscribe(res => {
  //   this.gstArr = res;
  //  // this.invoicedetails.cgst = this.gstArr[0].cgst;
  //   this.value=this.invoicedetails.cgst.startsWith('27');
    this.dataservice.getclientid(compny_id).subscribe(res => {
      this.clientsArr = res;
     
    
    //  this.monthvalueArr = res;
    //  this.data=res;
    //  this.monthv=this.data;
    //  var selectedOption = this.monthvalueArr[0].month_value;
    //  this.monthlysalary.month_value=this.monthvalueArr[0].month_value;
    //    console.log(this.salary[0].basic_pay);
   //           console.log(res);
    });
     }

  getState2(event){
    // var target = event.target || event.srcElement || event.currentTarget;
    // var idAttr = target.attributes.id;
    // var value = idAttr.nodeValue;
    // console.log(value);

    
    var client_id = event.target.value;
 //   console.log(client_id);
      this.dataservice.getsalesdetails(client_id).subscribe(res => {
      this.data = res;
     // console.log(res);
      this.sales.client_id = client_id;
      this.sales= this.data;
      this.empList.push(this.sales);
        this.array = this.empList;
      
        for(var i=0; i<this.array.length; i++){
          this.sales_id[i]= this.array[i][0].sales_id;
          this.flat_no[i]= (this.array[i][0].flat_no);
          this.building_name[i]= (this.array[i][0].building_name);
          this.payout_value[i]= (this.array[i][0].payout_value);
          this.consideration_value[i]= (this.array[i][0].consideration_value);
          
          
        }


      
      // for(var i=0; i<this.empList.length; i++){
      //    this.sales.sales_id = 
      // }
     // this.dataservice.registerSales(this.sales).subscribe(res=>{
       // console.log(res);
      })
     // console.log(this.sales);
      // for(var i=0; i < this.data.length; i++){
      //  this.flat_no[i] =  this.data[i].flat_no;
      //   }
        //console.log(this.flat_no);
     
    }

    submit(){
        //console.log(this.array);
        this.valueArr =  this.passenger.value;
      //  console.log(this.valueArr);
        for(var i = 0; i<this.empList.length; i++){
        this.salesArray.client_id=this.empList[i][0].client_id;
        this.salesArray.sales_id=this.empList[i][0].sales_id;
        this.salesArray.invoice_id = this.invoiceid;
       
        this.sales = this.salesArray;
        console.log(this.sales);
        this.dataservice.registerSales(this.sales).subscribe(
          data=>this.handleResponse(data),
        error=>this.handleError(error)
      );
      }
      //console.log(this.sales.client_id);
      this.sales.invoice_id =  this.invoiceid;
     // console.log(this.sales);
     
    }
  //   getflatdetails(event){
  //     console.log(event.target.value);
  //   var flat_no = event.target.value;
  //   for(var i=0; i < this.sales.length; i++){
  //      if(flat_no == this.sales[i].flat_no){
  //          this.flatdetails = this.sales[i];
  //      }
  //     }
  // }

  // getflatdetails1(event){
  //   var flat_no = event.target.value;
  //   for(var i=0; i < this.sales.length; i++){
  //      if(flat_no == this.sales[i].flat_no){
  //          this.flatdetails1 = this.sales[i];
  //      }
  //     }
  // }


  addNewDiv() {
    this.newDivs.push(new addDivisions())

  }
  
  add(){
    let row = document.createElement('div');  
      row.className = 'row';
      row.innerHTML = `
      <br>
      <label for="example-text-input" class="col-form-label">Client Name</label>
      <select class="form-control" name="client_id"  [(ngModel)]="invoicedetails.client_id" (change)="getState2($event)" placeholder="-- Select Client Name --">
        <option *ngFor="let cl of clientlistArr"  value="Sneha">
        Sneha
        </option>
       </select>`;
      document.querySelector('.showInputField').appendChild(row);
  }



  get passenger(): FormArray {
    return this.form.get('passenger') as FormArray;
  }

  addPassenger() {
    this.passenger.push(
      new FormGroup({
        flat_no: new FormControl(''),
        building_name: new FormControl(''),
        consideration_value: new FormControl(''),
        payout_value: new FormControl(''),
        client_id: new FormControl(''),
        sales_id: new FormControl('')

      })
    );
  }
 
     get bmi() {
   if( this.value == true){
      var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
      this.invoicedetails.cgst_amt = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
     return  (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
    }
    else{
      var selectedOption = 0;
      this.invoicedetails.cgst_amt = 0;
      return 0;
    }
    }

    get bmi1() {
      if( this.value == true){
      var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
      this.invoicedetails.sgst_amt = (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
     return  (Number(this.invoicedetails.taxable_amt) * Number(9)) / 100;
      }
      else{
        var selectedOption = 0;
        this.invoicedetails.sgst_amt = 0;
        return 0;
      }
    }

    get bmi2() {
      if( this.value == false){
      var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(18)) / 100;
      this.invoicedetails.igst_amt = (Number(this.invoicedetails.taxable_amt) * Number(18)) / 100;
     return  (Number(this.invoicedetails.taxable_amt) * Number(18)) / 100;
      }
      else{
        var selectedOption = 0;
        this.invoicedetails.igst_amt = 0;
        return 0;
      }
    }

    get bmi3() {
      if( this.value == true){
      var selectedOption = Number(this.invoicedetails.cgst_amt) + Number(this.invoicedetails.sgst_amt);
      this.invoicedetails.total_gst_amt = Number(this.invoicedetails.cgst_amt) + Number(this.invoicedetails.sgst_amt);
     return  Number(this.invoicedetails.cgst_amt) + Number(this.invoicedetails.sgst_amt);
      }
      else{
        var selectedOption = Number(this.invoicedetails.igst_amt) 
        this.invoicedetails.total_gst_amt =  Number(this.invoicedetails.igst_amt) 
       return  Number(this.invoicedetails.igst_amt) 
      }
    }


    get bmi4() {
    
      var selectedOption = Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
      this.invoicedetails.total_invoice_amt = Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
     return  Number(this.invoicedetails.total_gst_amt) + Number(this.invoicedetails.taxable_amt);
      
    }

    get bmi5() {
    
      var selectedOption = Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt);
      this.invoicedetails.receivable_amt = Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt);
     return  Number(this.invoicedetails.total_invoice_amt) - Number(this.invoicedetails.receivable_tds_amt);  
      
    }

    get bmi6() {
    
      var selectedOption = (Number(this.invoicedetails.taxable_amt) * Number(this.invoicedetails.tds_rate)) / 100;
      this.invoicedetails.receivable_tds_amt = (Number(this.invoicedetails.taxable_amt) * Number(this.invoicedetails.tds_rate)) / 100;
     return  (Number(this.invoicedetails.taxable_amt) * Number(this.invoicedetails.tds_rate)) / 100;
      
    }
    get bmi7() {
    
      var selectedOption = Number(this.invoicedetails.receivable_amt); 
      this.invoicedetails.due_amt = Number(this.invoicedetails.receivable_amt); 
     return  Number(this.invoicedetails.receivable_amt); 
      
    }
    get bmi8() {
    
      var selectedOption = Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt); 
      this.invoicedetails.suspense_amt = Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt); 
     return  Number(this.invoicedetails.receivable_amt) - Number(this.invoicedetails.received_amt); 
      
    }
}


