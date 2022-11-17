export class Salesdetails {
  sales_id: any;
  client_id: any;
  cp_id: any;
  debtor_company_det_id: any;
  project_id: any;
  subproject_id: any;
  booking_date: any;
  building_name: any;
  wing: any;
  flat_no: any;
  consideration_value: any;
  case_payout_percentage: any;
  payout_value: any;
  extra_payout_percentage: any;
  extra_payout_value: any;
  net_extra_payout: any;
  shared_payout: any;
  shared_payout_value: any;
  net_shared_payout: any;
  net_payout: any;
  //pending_invoice_amount : any;
  //extra_payout : any;
  deal_status_id: any;
  payout_status_id: any;
  sourcing_emp_id: any;
  closing_emp_id: any;
  team_id: any;
  leadsource_id: any;
  booking_id: any;
  remark: any;
  BA1_amt_paid: any;
  BA2_amt_paid: any;
  registration_date: any;
  cv_range: any
  shared_Payout_value: any;
  business_value: any;
  BValue_Score: any;
  profile_score: any;
}

export class InceData {

  sourcing_emp_id: any;
  closing_emp_id: any;
  booking_date: any;
  from_date: any;
  to_date: any;
  receivable_amt: any;
  souB_value: any;
  new_date: any;
  year: any;
  month: any;
  ince_freqData: any;
  ince_typeData: any;
  business_amt: any;
  LeadCount: any;
  ince_freq: any;
  ince_type: any;
}
export class fetchSourcing {

  business_amt: any;
  ince_freqData: any;
  ince_typeData: any;
  LeadCount: any;
  closing_emp_id: any;
  ince_type: any;
}
export class AddInce {
  user_id: any;
  teamname: any;
  team_leader_name: any;
  designation:any
  ince_type:any;
  monthly_target:any;
  Total_value:any;
  from_date:any;
  to_date: any;
  Ince_Amt: any;
  gi_no_of_sourcing:any;
  gi_no_of_closing:any;
  gi_sourcing_amt:any;
  gi_closing_amt:any;
  ai_sourcing_ince:any
  ai_closing_ince:any;
  ai_sourcing_amt:any;
  pi_sourcing_ince:any;
  pi_sourcing_amt:any;
  pi_closing_amt:any;
  eligibility_ince:any;
  eligibility_bonus:any;
  // dataError: any;
  ince_freq: any;
  booking_date: any;
  YearMonth: any;
  team_id: any;
  business_value: any;
}
export class QuarData {

  from_date: any;
  to_date: any;
  user_id:any;
}
export class QuarAarry {

  from_date: any;
  to_date: any;
  leadcount: any;
  cv_range: any;
}
export class QuarInce {
  sourcing_amt: any;
  soucring_no: any;
  user_id: any;
  from_date: any;
  to_date: any;
  eligibility_ince: any;
}
export class halfInce {
  half_from_date: any;
  half_to_date: any;
  half_user_id: any;
}
export class HalfYearAarry {

  leadcount: any;
  cv_range: any;
  half_from_date: any;
}
export class HalfYearInce {
  from_date: any;
  user_id: any;
  to_date: any;
  halfsoucring_amt: any;
  halfsoucring_no: any;
  eligibility_ince: any;

}
export class YearInce {
  year_from_date: any;
  year_to_date: any;
  year_user_id: any;

}
export class YearInceData {
  leadcount: any;
  business_value: any;
  cv_range: any;
  year_from_date: any;
  year_to_date: any;
}
export class YearInceArr {
  yearsourcing_no: any;
  yearsourcing_amt: any;
  eligibility_ince: any;
  to_date: any;
  from_date: any;
  user_id: any;


}


