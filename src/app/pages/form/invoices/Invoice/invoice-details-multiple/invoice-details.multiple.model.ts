export class Invoicedetails{
    invoice_multi_id:any;
    sales_id : any;
    client_id : any;
    company_id : any ;
    invoice_num : any ;
    invoice_date : any ;
    payout_percentage : any ;
    taxable_amt : any ;
    cgst_amt : any ;
    sgst_amt : any ;
    igst_amt:any;
    total_gst_amt : any ;
    total_invoice_amt : any ;
    tds_rate : any ;
    receivable_tds_amt : any ;
    receivable_amt : any ;
    inv_status_id : any ;
    inv_submitted_date : any ;
    due_amt : any ;
    credit_note_amt : any;
    name:any;
    suspense_amt:any;
    received_amt:any;
    comments:any;
    user_id:any;
    cgst: any;
    flat_no:any;
    building_name:any;
    consideration_value:any;
    payout_value:any;
    flat_no1:any;
    cname : any;
    has: any;
    add: any;
    filter: any;
    indexOf: any;
    reduce: any;
    debtor_company_det_id:any;
    sumNumber: any;
    project_name:any;
    wing:any;
    booking_date:any;
    IGST:any;
    CGST:any;
    SGST:any;
    TDS_rate:any;

    
}
export class InvoiceInce{
    sales_id : any;
    booking_date:any;
    sourcing_emp_id: any;
    closing_emp_id: any;
    year: any;
    month: any;
    ince_freq: string;
    ince_type: string;
    
  }
  export class InvoiceInceS{
    business_value: any;
    ince_type: any;
    ince_freq: any;
    sourcing_emp_id: any;
    year: any;
    month: any;
  }
  export class AddInce {
    user_id: any;
    ai_sourcing_ince:any
    ai_closing_ince:any;
    ai_sourcing_amt:any;
    YearMonth: any;
    ai_closing_amt: any;
  }
  export class InceData {
    cv_range: any[]=[];
    booking_date: any;
   
  }
