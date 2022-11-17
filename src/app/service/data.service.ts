import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private httpClient:HttpClient) { }

// getData(){
  //   return this.httpClient.get('http://127.0.0.1:8000/api/users');
  // }

  //insertData(data){
    //return this.httpClient.post('http://127.0.0.1:8000/api/users', data);
  //}

  registerRoles(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/roles',data);
  }

  getRoles() {
    return this.httpClient.get('http://127.0.0.1:8000/api/roles');
  }

  deleteRoles(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/roles/'+id);
  }

  getOneRoles(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/roles/'+id);
  }

  updateRoles(id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/roles/'+id,data);
  }

  registerNewusers(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/users',data);
  }

  getUsers() {
    return this.httpClient.get('http://127.0.0.1:8000/api/users');
  }

  updateUsers(id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/users/'+id,data);
  }

  getOneUser(user_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/users/'+user_id);
  }

  registerGroups(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/groups',data);
  }

  getGroups() {
    return this.httpClient.get('http://127.0.0.1:8000/api/groups');
  }

  deleteGroups(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/groups/'+id);
  }

  getOneGroups(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/groups/'+id);
  }

  updateGroups(id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/groups/'+id,data);
  }

  registerTeams(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/teams',data);
  }

  getTeams() {
    return this.httpClient.get('http://127.0.0.1:8000/api/teams');
  }

  deleteTeams(team_id,data) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/teams/'+team_id,data);
  }

  getOneTeams(team_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/teams/'+team_id);
  }

  updateTeams(team_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/teams/'+team_id,data);
  }

  registerProjects(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/projects',data);
  }

  getProjects() {
    return this.httpClient.get('http://127.0.0.1:8000/api/projects');
  }

  deleteProjects(project_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/projects/'+project_id);
  }

  getOneProjects(project_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/projects/'+project_id);
  }

  updateProjects(project_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/projects/'+project_id,data);
  }

  registerSubprojects(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/subprojects',data);
  }

  getSubprojects() {
    return this.httpClient.get('http://127.0.0.1:8000/api/subprojects');
  }

  deleteSubprojects(subproject_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/subprojects/'+subproject_id);
  }

  getOneSubprojects(subproject_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/subprojects/'+subproject_id);
  }

  updateSubprojects(subproject_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/subprojects/'+subproject_id,data);
  }

  registerRegions(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/regions',data);
  }

  getRegions() {
    return this.httpClient.get('http://127.0.0.1:8000/api/regions');
  }

  deleteRegions(region_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/regions/'+region_id);
  }

  getOneRegions(region_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/regions/'+region_id);
  }

  updateRegions(region_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/regions/'+region_id,data);
  }


  registerSubregions(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/subregions',data);
  }

  getSubregions() {
    return this.httpClient.get('http://127.0.0.1:8000/api/subregions');
  }

  deleteSubregions(subregion_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/subregions/'+subregion_id);
  }

  getOneSubregions(subregion_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/subregions/'+subregion_id);
  }

  updateSubregions(subregion_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/subregions/'+subregion_id,data);
  }

  registerDesignations(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/designations',data);
  }

  getDesignations() {
    return this.httpClient.get('http://127.0.0.1:8000/api/designations');
  }

  deleteDesignations(designation_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/designations/'+designation_id);
  }

  getOneDesignations(designation_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/designations/'+designation_id);
  }

  updateDesignations(designation_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/designations/'+designation_id,data);
  }

  getProjectslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/projects');
  }

  getRegionslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/regions');
  }

  getCompanylist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/debtor_company_det');
  }

  getSubprojectslist(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getSubproject/'+id);
  }

  getSubregionslist(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/subregions',data);
  }

  getSubregion(){
    return this.httpClient.get('http://127.0.0.1:8000/api/subregions');
  }

  getDesignationList(){
    return this.httpClient.get('http://127.0.0.1:8000/api/designations');
  }
  getSubprojectslistID(id,data){
    return this.httpClient.post('http://127.0.0.1:8000/api/subprojects',+id,data);
  }

 

  registerProjectAllocations(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/projectallocations',data);
  }

  getProjectAllocations() {
     return this.httpClient.get('http://127.0.0.1:8000/api/projectallocations');
  }

  deleteProjectAllocations(projectallocation_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/projectallocations/'+projectallocation_id);
  }

  getOneProjectAllocations(projectallocation_id) {
     return this.httpClient.get('http://127.0.0.1:8000/api/projectallocations/'+projectallocation_id);
  }

  updateProjectAllocations(projectallocation_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/projectallocations/'+projectallocation_id,data);
   }

  getTeamslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/teams');
  }

  getStatuslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/team_status');
  }

  getDesignationlist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/designations');
  }

  getEmpStatusList(){
    return this.httpClient.get('http://127.0.0.1:8000/api/emp_status');
  }

  getEmpStatusListbyid(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/emp_status/'+id);
  }
  getEmpDocuments(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/emp_documents/'+id);
  }

  registerTeamleader(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/team_leaders',data);
  }

  getTeamleader(){
    return this.httpClient.get('http://127.0.0.1:8000/api/team_leaders');
  }

  getTeamleaderlist(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/getteam/'+id);
  }

  deleteTeamleader(team_leader_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/team_leaders/'+team_leader_id);
  }

  getOneTeamleaders(team_leader_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/team_leaders/'+team_leader_id);
  }

  updateTeamleaders(team_leader_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/team_leaders/'+team_leader_id,data);
  }

  getTeamleaderslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/team_leaders');
  }

  getTeamleaderslistview(team_leader_id){
    return this.httpClient.get('http://127.0.0.1:8000/api/team_leaders/'+team_leader_id);
  }

  registerTeamdetails(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/teamdetails',data);
  }

  getTeamdetails(){
    return this.httpClient.get('http://127.0.0.1:8000/api/teamdetails');
  }

  getTeamdetailsview(team_detail_id){
    return this.httpClient.get('http://127.0.0.1:8000/api/teamdetails/'+team_detail_id);
  }

  deleteTeamdetails(team_detail_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/teamdetails/'+team_detail_id);
  }

  getOneTeamdetails(team_detail_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/teamdetails/'+team_detail_id);
  }

  updateTeamdetails(team_detail_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/teamdetails/'+team_detail_id,data);
  }

  registerCompany(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/debtor_company_det',data);
  }

  getCompany() {
    return this.httpClient.get('http://127.0.0.1:8000/api/debtor_company_det');
  }

  getCompanyview(debtor_company_det_id){
    return this.httpClient.get('http://127.0.0.1:8000/api/debtor_company_det/'+debtor_company_det_id);
  }

  deleteCompany(debtor_company_det_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/debtor_company_det/'+debtor_company_det_id);
  }

  getOneCompany(debtor_company_det_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/debtor_company_det/'+debtor_company_det_id);
  }

  updateCompany(debtor_company_det_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/debtor_company_det/'+debtor_company_det_id,data);
  }

  registerComments(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/emp_comments',data);
  }

  registerDocuments(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/emp_documents',data); 
  }

  registerClientdetails(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/clientdetails',data);
  }

  getClientdetails() {
    return this.httpClient.get('http://127.0.0.1:8000/api/clientdetails');
  }

  // getClientdetailsview(client_id){
  //   return this.httpClient.get('http://127.0.0.1:8000/api/clientdetails/'+client_id);
  // }

  deleteClientdetails(client_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/clientdetails/'+client_id);
  }

  getOneClientdetails(client_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/clientdetails/'+client_id);
  }

  updateClientdetails(client_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/clientdetails/'+client_id,data);
  }

  registerChannelpartner(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/channelpartner',data);
  }

  getChannelpartner() {
    return this.httpClient.get('http://127.0.0.1:8000/api/channelpartner');
  }

  // getClientdetailsview(client_id){
  //   return this.httpClient.get('http://127.0.0.1:8000/api/clientdetails/'+client_id);
  // }

  deleteChannelpartner(cp_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/channelpartner/'+cp_id);
  }

  getOneChannelpartner(cp_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/channelpartner/'+cp_id);
  }

  updateChannelpartner(cp_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/channelpartner/'+cp_id,data);
  }

  getBookingstatusList(){
    return this.httpClient.get('http://127.0.0.1:8000/api/booking_status');
  }


  getPayoutstatusList(){
    return this.httpClient.get('http://127.0.0.1:8000/api/payout_status');
  }

  getLeadsourceList(){
    return this.httpClient.get('http://127.0.0.1:8000/api/leadsource');
  }
  getLeadsourceId(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/leadsource/'+id);
  }


  registerSalesdetails(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/salesdetails',data);
  }

  getSalesdetails() {
    return this.httpClient.get('http://127.0.0.1:8000/api/salesdetails');
  }

  deleteSalesdetails(sales_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/salesdetails/'+sales_id);
  }

  getOneSalesdetails(sales_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/salesdetails/'+sales_id);
  }

  updateSalesdetails(sales_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/salesdetails/'+sales_id,data);
  }

  getSubprojectslist1(){
    return this.httpClient.get('http://127.0.0.1:8000/api/subprojects');
  }

  registerClientpaymentschedule(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/client_payment_schedule',data);
  }

  getClientpaymentschedule() {
    return this.httpClient.get('http://127.0.0.1:8000/api/client_payment_schedule');
  }

  deleteClientpaymentschedule(client_payment_schedule_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/client_payment_schedule/'+client_payment_schedule_id);
  }

  getOneClientpaymentschedule(client_payment_schedule_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/client_payment_schedule/'+client_payment_schedule_id);
  }

  updateClientpaymentschedule(client_payment_schedule_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/client_payment_schedule/'+client_payment_schedule_id,data);
  }

  getSaleslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/salesdetails');
  }

  registerSalesdocuments(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/sales_documents',data);
  }

  getSalesdocuments() {
    return this.httpClient.get('http://127.0.0.1:8000/api/sales_documents');
  }

  deleteSalesdocuments(sales_doc_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/sales_documents/'+sales_doc_id);
  }

  getOneSalesdocuments(sales_doc_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/sales_documents/'+sales_doc_id);
  }

  updateSalesdocuments(sales_doc_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/sales_documents/'+sales_doc_id,data);
  }

  registerSalescomments(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/sales_comments',data);
  }

  getSalescomments() {
    return this.httpClient.get('http://127.0.0.1:8000/api/sales_comments');
  }

  deleteSalescomments(sales_comment_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/sales_comments/'+sales_comment_id);
  }

  getOneSalescomments(sales_comment_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/sales_comments/'+sales_comment_id);
  }

  updateSalescomments(sales_comment_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/sales_comments/'+sales_comment_id,data);
  }

  getComments(id){
  return this.httpClient.get('http://127.0.0.1:8000/api/emp_comments/'+id);
  }

  getSalesomments(sales_comment_id){
    return this.httpClient.get('http://127.0.0.1:8000/api/sales_comments/'+sales_comment_id);
  }

  getDocuments(){
    return this.httpClient.get('http://127.0.0.1:8000/api/sales_documents');
  }

  getSalesdocumentslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/sales_documents');
  }

  ///////////  Reports Start //////////

  registerReports(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/reports',data);
  }

  getReports() {
    return this.httpClient.get('http://127.0.0.1:8000/api/reports');
  }

  getReportid() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getid');
  }

  getOneReports(reports_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/reports/'+reports_id);
  }

  getGenerate(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/generate/'+id);
  }

  updateReports(reports_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/reports/'+reports_id,data);
  }

  /////////// Reports End ////////////

 ///////// START SALARY MODULE ////////////

 registerSalarypackage(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/salary_package',data);
  }

  getSalarypackage(){
    return this.httpClient.get('http://127.0.0.1:8000/api/salary_package');
  }

  getSalarypackageD(user_id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getSalarypackageData/'+user_id);
  }

  deleteSalarypackage(salary_package_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/salary_package/'+salary_package_id);
  }

  getOneSalarypackage(salary_package_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/salary_package/'+salary_package_id);
  }

  updateSalarypackage(salary_package_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/salary_package/'+salary_package_id,data);
  }

  getSalarypackagelist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/salary_package');
  }


  registerAdvancesalary(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/advance_salary',data);
  }

  getAdvancesalary(){
    return this.httpClient.get('http://127.0.0.1:8000/api/advance_salary');
  }

  deleteAdvancesalary(advance_salary_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/advance_salary/'+advance_salary_id);
  }

  getOneAdvancesalary(advance_salary_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/advance_salary/'+advance_salary_id);
  }

  updateAdvancesalary(advance_salary_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/advance_salary/'+advance_salary_id,data);
  }

  getAdvancesallist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/advance_salary');
  }


  registerMonthlytarget(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/monthly_target',data);
  }

  getMonthlytarget(){
    return this.httpClient.get('http://127.0.0.1:8000/api/monthly_target');
  }

  deleteMonthlytarget(monthly_target_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/monthly_target/'+monthly_target_id);
  }

  getOneMonthlytarget(monthly_target_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/monthly_target/'+monthly_target_id);
  }

  updateMonthlytarget(monthly_target_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/monthly_target/'+monthly_target_id,data);
  }

  registerMonthlysalary(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/monthly_salary',data);
  }

  getMonthlysalary(){
    return this.httpClient.get('http://127.0.0.1:8000/api/monthly_salary');
  }

  deleteMonthlysalary(monthly_salary_id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/monthly_salary/'+monthly_salary_id);
  }

  getOneMonthlysalary(monthly_salary_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/monthly_salary/'+monthly_salary_id);
  }

  updateMonthlysalary(monthly_salary_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/monthly_salary/'+monthly_salary_id,data);
  }


  registerAdvanceemi(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/advance_emi_details',data);
  }

  getAdvanceemi(){
    return this.httpClient.get('http://127.0.0.1:8000/api/advance_emi_details');
  }

  deleteAdvanceemi(emi_id,data) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/advance_emi_details/'+emi_id,data);
  }

  getOneAdvanceemi(emi_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/advance_emi_details/'+emi_id);
  }

  updateAdvanceemi(emi_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/advance_emi_details/'+emi_id,data);
  }

 ///////////////// END SALARY MODULE ///////////



 ///////////// START INVOICES MODULE /////////////

 registerinvoicedetails(data){
  return this.httpClient.post('http://127.0.0.1:8000/api/invoice',data);

}

getInvoicedetails(){
  return this.httpClient.get('http://127.0.0.1:8000/api/invoice');

}

getOneInvoicedetails(id){
  return this.httpClient.get('http://127.0.0.1:8000/api/invoice/'+id);

}

getInvoiceStatus(){
  return this.httpClient.get('http://127.0.0.1:8000/api/inv_status');
}

updateInvoiceDetails(id,data){
  return this.httpClient.patch('http://127.0.0.1:8000/api/invoice/'+id,data);

}

  registerreceiptdetails(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/receiptdetails',data);

  }

  getReceiptdetails(){
    return this.httpClient.get('http://127.0.0.1:8000/api/receiptdetails');
  }

  getOneReceiptdetails(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/receiptdetails/'+id);
  }

  updateReceiptDetails(id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/receiptdetails/'+id,data);
  }

  registercreditnote(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/credit_note',data);

  }

  getCreditnote(){
    return this.httpClient.get('http://127.0.0.1:8000/api/credit_note');
  }

  getOneCreditnote(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/credit_note/'+id);
  }

  updateCreditnote(id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/credit_note/'+id,data);
  }
  registerGstfillingdetails(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/gst_fillingdetails',data);

  }

  getGstfillingdetails(){
    return this.httpClient.get('http://127.0.0.1:8000/api/gst_fillingdetails');
  }

  getOneGstfillingdetails(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/gst_fillingdetails/'+id);
  }

  updateGstfillingdetails(id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/gst_fillingdetails/'+id,data);
  }

  registerSales(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/invoicedetids',data);

  }
  getclientid(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getclientid/'+id);

  }

  getlastinvoiceid(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getlastid');

  }

 ///////////// END INVOICES MODULE  //////////////////



 ////////////// START EXTRA API ////////////////////

  getSalesDropdownlist() {
    return this.httpClient.get('http://127.0.0.1:8000/api/dropdownlist');
  }

  getModuleslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/modules');
  }

  getModuleslist1(){
    return this.httpClient.get('http://127.0.0.1:8000/api/modules');
  }

  getModulefieldslist(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/module_fields', data);
  }

  getModulefieldslist1(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/module_fields', data);
  }

  getClientList(){
    return this.httpClient.get('http://127.0.0.1:8000/api/clientdetails');
  }

  gettablelist(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/module_fields', data);
  }
// neww
  getMonthslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/months/');
  }

  getSalaryPackage(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/salary_package',data);
  }

  getInvoiceNumber(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/invoice',data);
  }

  getmonthlist(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/months',data);
  }


  getUsersName(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/users',data);
  }

  getcalculation(){
    return this.httpClient.get('http://127.0.0.1:8000/api/calculation');
  }

  addSum(id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/reports/'+id,data);
  }

  getleadsourcecount(){
    return this.httpClient.get('http://127.0.0.1:8000/api/salesdetails');
  }

  getsum(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/calsum/'+id);
  }

  
  getavg(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/calavrg/'+id);
  }

  getSalescount() {
    return this.httpClient.get('http://127.0.0.1:8000/api/getSalesCount');
  }

  getcount(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/salesdetails', data);
  }

  getcount1(data){
    return this.httpClient.get('http://127.0.0.1:8000/api/getApply/'+data);
  }

  registerinvoiceMultidetails(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/invoice_multi',data);  
  }

  getOneInvoiceMultidetails(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/invoice_multi/'+id);    
  }

  updateInvoicMultieDetails(id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/invoice_multi/'+id,data);    
  }
    
  getInvoicedetailsMulti(){
  return this.httpClient.get('http://127.0.0.1:8000/api/invoice_multi');   
  }

  pendinginvoice(){
    return this.httpClient.get('http://127.0.0.1:8000/api/pendinginvoice');   
    }
  gettdsrate(){
    return this.httpClient.get('http://127.0.0.1:8000/api/tds_rate');   
    }


 ///////////// END EXTRA API ////////////////////////



 ///////////// ACCOUNT APIS ////////////////////////////

  addJson(data){
  return this.httpClient.post('http://127.0.0.1:8000/api/gstjson', data);
  }

  getJson(){
  return this.httpClient.get('http://127.0.0.1:8000/api/gstjson');
  }

  getSysJson(id:any) {
  return this.httpClient.get('http://127.0.0.1:8000/api/invoicejoin/'+id);
  }

  getSysmonth() {
  return this.httpClient.get('http://127.0.0.1:8000/api/invmonthjoin');
  }

  getJsonmonth() {
  return this.httpClient.get('http://127.0.0.1:8000/api/jsonmonthjoin');
  }

  UpdateGstr1Data(data) {
  return this.httpClient.post('http://127.0.0.1:8000/api/updateCreate',data);
  }

  getmonth(id: any){
  return this.httpClient.get('http://127.0.0.1:8000/api/month/' +id);
  }

  ///////////////////// // gstr2a and b2b incoice api  //////////////////////


  UpdateGstr2AData(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/updateCreate2A',data);
  }
  getgstr2amonth() {
    return this.httpClient.get('http://127.0.0.1:8000/api/gstr2amonthj');
  }
  getB2baInvoice() {
    return this.httpClient.get('http://127.0.0.1:8000/api/b2bmonthj');
  }

  UpdateGstrB2BData(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/updateCreateB2B',data);
  }
  getGstr2aJoin(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/invoicegstr2a/'+id);
  }
  b2bInvoiceDetails() {
    return this.httpClient.get('http://127.0.0.1:8000/api/b2binvoices');
  }
  Gstr2ADetails() {
    return this.httpClient.get('http://127.0.0.1:8000/api/gstr2a');
  }
  getOneB2bInvdetails(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/b2binvoices/' + id);

  }
       ///////////////////// // gstr3B api  //////////////////////


  addToGstr3B(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/updateCreate3B',data);
  }
  getGstr3BReport(){
    return this.httpClient.get('http://127.0.0.1:8000/api/gstr3b');
  }
  
  getReport(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/gstr3b/'+id);
  }

  get_sales_InMaha(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/in_Maha',data);
  }
  get_sales_OutMaha(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/out_of_Maha',data);
  }
  getAllmonth(){
    return this.httpClient.get('http://127.0.0.1:8000/api/month');
  }
  
  ///////////// GstR 2A ////////////////////////
  get_pur_InMaha(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/in_Maha_pur',data);
  }
  
  get_pur_OutMaha(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/out_Maha_pur',data);
  }

  getB2bInvData(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/showId/' + id);

  }
  getclientname(sales_id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/getclientid/'+sales_id);
  }

  getsalarybyuserId(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getsalarybyuser_id/'+id);
  }
  getsalesdetails(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getsales/'+id);
  }
  getCompanygst(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getCgst/'+id);
  }
  addinvoiceComments(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/invoice_comments', data);
  }
  getinvoiceComments(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/invoice_comments/'+id);
  }
  
  ///////////// Incentive Range ////////////////////////
  getIncentiveRange(){
    return this.httpClient.get('http://127.0.0.1:8000/api/incentiverange');
  }
  getInceClosing(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/ClosingData',data);
  }
  getInceSourcing(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/SourcingData',data);
  }
  // getInceSouSum(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/leadSourcing',data);
  // }
  // getInceClosSum(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/leadclosing',data);
  // }
  // fetchinceData(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/fetchincedata',data);
  // }
  addmonthlyInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/monthlyince',data);
  }
  upCreaMonthlyInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/updateCreateInce',data);
  }
  updatemonthlyInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/update1',data);
  }
  updatemonthlyInce2(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/update2',data);
  }
  updatemonthlyInceC3(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/update3',data);
  }
  updatemonthlyInceS3(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/update4',data);
  }
  getMonthlyInce(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/monthlyince/'+id);
  }
  getUserActive(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getUserActive');
  }
  // getClosingSum(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/SumClosing',data);
  // }
  // getSourcingSum(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/SumSourcing',data);
  // }
  getInvoiceMultiInce(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/invoiceInceMulti/'+id);
  }
  getInvoMultiInceD(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/invoiceInce',data);
  }
  getInvoMultiInceS(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/invoiceInceS',data);
  }
  // getInvoMultiInceSum(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/SumInceMulti',data);
  // }
  // getInvoMultiClosing(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/SumInceClosing',data);
  // }
  // getInceAmt(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/fetchData',data);
  // }
  getreceiptdata(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getreceiptdata/'+id);
  }

  upCreReceipt(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/upCreReceipt',data);
  }

  inceReceiptD(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/inceReceiptData',data);
  }
  // SumReceiSourcing(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/SumReceSourcing',data);
  // }
  // SumReceiClosing(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/SumReceiptClose',data);
  // }
  upCreReceiptS(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/updatepiS',data);
  }
  upCreReceiptC(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/updatepiC',data);
  }
  getSourSaleInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/SourSaleInce',data);
  }
  getClosSaleInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/CloseSaleInce',data);
  }
  getClosInvoiceInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/CloInvoiceInce',data);
  }
  getSourInvoiceInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/SourInvoiceInce',data);
  }
  getSourReceInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/SourReceInce',data);
  }
  getCloReceInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/CloseReceInce',data);
  }
  getCloReceInceData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/getReceiptClose',data);
  }
  getSouReceInceData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/getReceiptSou',data);
  }


  getmonths(id: any){
    return this.httpClient.get('http://127.0.0.1:8000/api/months/'+id);
  }

  get_attentance_month(){
    return this.httpClient.get('http://127.0.0.1:8000/api/get_month');   
  }
  get_attendance_data(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/get_teamWise',data);
  }
  add_emp_attentance(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/attendance',data);
  }

  get_attendance_monthwise(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/attendance_monthwise',data);
  }

  updateAttendance(emp_id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/attendance/'+ emp_id,data);
  }
  

  registerMonthlysalary1(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/monthly_salary1',data);
  }


  addDealdetails(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/dealdetail',data);
  }

  deleteDeals(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/dealdetail/'+id);
  }

  getDealdata(){
    return this.httpClient.get('http://127.0.0.1:8000/api/dealdetail');
  }

  getDealdetailsid(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/dealdetail/'+id);
  }

  updatedealdata(id,data){
    return this.httpClient.patch('http://127.0.0.1:8000/api/dealdetail/'+id,data);
  }

  getSalarydata(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/Salarydata',data);
  }

  getbusinessvalue(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/business',data);
  }

  getteamleader(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/getteamdetails',data);
  }

  getuserid(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/getuserdata',data);
  }

  getattend_day(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/getattendance',data);
  }

  getname(){
    return this.httpClient.get('http://127.0.0.1:8000/api/username');
  }

  getuserdata(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/userdetails/'+id);
  }

  getempname(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/empdata/'+id);
  }

 getuserinfo(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/single_user/'+id);
  }

  getuserData1(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/username1/'+id);
  }

  getdate(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/datedata/'+id);
  }
  getDealdate(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/datefilter',data);
  }
  getDealdate1(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/dateData',data);
  }
  addwalkindata(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/Walkindeals',data);
  }

  getsrcdata(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getuserdetails');
  }

  getwalkindata(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getwalkinlist/'+id);
  }

  getuser(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getdata/'+id);
  }

  getdatefilter(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/filterdata',data);
  }

  getemp(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getclemp/'+id);
  }

  getTeamInceData(data){
    return this.httpClient.get('http://127.0.0.1:8000/api/getTeamData/'+data);
  }
  getIncenUserD(data){
    return this.httpClient.get('http://127.0.0.1:8000/api/IncenUserwise/'+data);
  }
  getMonthlyInceData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/monthlyince');
  }
    

  ////////////////////////// Quarterly Incentive ///////////////////////////
  getInceQuarterly(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/upCreQuarInce',data);
  }
  getSourQuartely(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/SourceQuaData',data);
  }
  getQuarData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/quarterlyData',data);
  }
  updateQuartData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/updateQuarterly',data);
  }
  getquarterlyDetails(){
    return this.httpClient.get('http://127.0.0.1:8000/api/quarterly_incentive');
  }
  getquarterlyuserD(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/quarterlydetails'+id);
  }

  ////////////////////////// Half Year Incentive /////////////////////////
  getSourHalfyear(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/SourcehalfyearData',data);
  }
  getHalfYearData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/HalfYearDetails',data);
  }
  upCreHalfYearData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/updatehalfYear',data);
  }
  upCreHalfYeardetails(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/upCreHalfInce',data);
  }
  gethalfYearDetails(){
    return this.httpClient.get('http://127.0.0.1:8000/api/halfyear_incentive');
  }
  gethalfyearuserD(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/gethalfyearUser'+id);
  }

  ////////////////////// Year Incentive /////////////////////////////////

  upCreYearData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/upCreYearInce',data);
  }
  getSourYearData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/SourceYearD',data);
  }
  getYearInceData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/YearDetailsInce',data);
  }
  UpCreYearInce(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/updateCreYear',data);
  }
  getYearDetails(){
    return this.httpClient.get('http://127.0.0.1:8000/api/year_incentive');
  }
  getyearuserD(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/getyearIncenUser_id'+id);
  }

  updtaeteamdetails(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/updatedateteam' ,data);

  }

  getbookingid(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getbookingid');

  }
  getUserslist(){
    return this.httpClient.get('http://127.0.0.1:8000/api/users');
  }
  addMonthlysalary1(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/post_monthlysalary1',data);
    }
  getteamname_id(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/monthlysalarydata1',data);
    }
    addMonthlySdata1(data) {
      return this.httpClient.post('http://127.0.0.1:8000/api/monthlysalarydata1',data);
      }
      addMonthlySdata(data) {
        return this.httpClient.post('http://127.0.0.1:8000/api/monthlysalarydata',data);
        }
        getAdvancesal(){
          return this.httpClient.get('http://127.0.0.1:8000/api/AdvanceEmi');
        }
        getAdvancesal1(data){
          return this.httpClient.post('http://127.0.0.1:8000/api/updateAdvSal',data);
        }
        getUserEmi(data:any){
          return this.httpClient.get('http://127.0.0.1:8000/api/UserAdvanceEmi/'+data);
        }
        getUserData1(data:any){
          return this.httpClient.get('http://127.0.0.1:8000/api/Userdata/'+data);
        }
        getadvlistview2(user_id){
          return this.httpClient.get('http://127.0.0.1:8000/api/emiAmountId/'+user_id);
        }
        addreportsalary(user_id){
          return this.httpClient.get('http://127.0.0.1:8000/api/reportdata/'+user_id);
        }
        addEmpData(){
          return this.httpClient.get('http://127.0.0.1:8000/api/EmpData');
        }
        addreportsalary1(user_id){
          return this.httpClient.get('http://127.0.0.1:8000/api/reportdata1/'+user_id);
        }
        dataUser(id){
          return this.httpClient.get('http://127.0.0.1:8000/api/dataUser1/'+id);
        }
        getreport(){
          return this.httpClient.get('http://127.0.0.1:8000/api/reportdata');
        }
        getmonthlysalary1(){
          return this.httpClient.get('http://127.0.0.1:8000/api/monthlysalary1');
        }
        get_attentance(){
          return this.httpClient.get('http://127.0.0.1:8000/api/attendance');   
          }
          getNewDataSal(){
            return this.httpClient.get('http://127.0.0.1:8000/api/getUpdateSal');
          }
}
