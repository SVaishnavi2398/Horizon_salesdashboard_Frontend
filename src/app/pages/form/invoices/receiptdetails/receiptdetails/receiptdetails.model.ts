export class ReceiptDetails  {
    receipt_id : any ;
    invoice_id : any ;
    payment_mode : any ;
    instument_no : any ;
    received_amt : any ;
    instument_date : any ;
    received_taxable_amt : any ;
    received_gst_amt : any ;
    received_tds_amt : any ;
    credit_date : any ;
    credit_account : any;
    suspense_amount : any;
    receivable_amt: any;
    invoice_num:any;
    invoice_multi_id:any;
    client_id:any;
    invoicedetids_id:any;
    taxableAmt: any;
}
export class InvDataArr{
  name: any;
  invoice_multi_id: any;
  client_id: any;
   
}
export class InceDataArr{
  invoice_id:any;
  client_id: any;
   
}
export class InceData{
  business_value: any;
  closing_emp_id: any;
  sourcing_emp_id: any;
  booking_date: any;
  year: any;
  month: any;
  invoice_id: any;  
  ince_freq: string;
  ince_type: string;
}
export class InceRec {
  user_id: any;
  pi_sourcing_amt:any
  pi_sourcing_ince:any;
  pi_closing_amt:any;
  pi_closing_ince: any;
  YearMonth: any;
  ince_status: any;
}
export class InvoiceInceS{
  business_value: any;
  ince_type: any;
  ince_freq: any;
}
export class RecepitInce{
  booking_date: any;
  cv_range: any[]=[];
  invoice_num: any;
  invoice_multi_id: any;
}