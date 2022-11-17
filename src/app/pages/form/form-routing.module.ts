import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { EditorComponent } from './editor/editor.component';
import { UploadsComponent } from './uploads/uploads.component';
import { WizardComponent } from './wizard/wizard.component';
import { MaskComponent } from './mask/mask.component';
import { AdvancedformComponent } from './advancedform/advancedform.component';
import { RepeaterComponent } from './repeater/repeater.component';
import { RolesComponent } from './roles/roles.component';
import { EditrolesComponent } from './editroles/editroles.component';
import { RoleslistComponent } from './roleslist/roleslist.component';
import { NewusersComponent } from './newusers/newusers.component';
import { GroupsComponent } from './groups/groups.component';
import { EdigroupsComponent } from './edigroups/edigroups.component';
import { TeamsComponent } from './teams/teams.component';
import { EditteamsComponent } from './editteams/editteams.component';
//import { NewuserslistComponent } from './newuserslist/newuserslist.component';
import { TeamslistComponent } from './teamslist/teamslist.component';
import { GroupslistComponent } from './groupslist/groupslist.component';
import { ProjectsComponent } from './projects/projects.component';
import { EditprojectsComponent } from './editprojects/editprojects.component';
import { ProjectslistComponent } from './projectslist/projectslist.component';
import { SubprojectsComponent } from './subprojects/subprojects.component';
import { EditsubprojectsComponent } from './editsubprojects/editsubprojects.component';
import { SubprojectslistComponent } from './subprojectslist/subprojectslist.component';
import { RegionsComponent } from './regions/regions.component';
import { EditregionsComponent } from './editregions/editregions.component';
import { RegionslistComponent } from './regionslist/regionslist.component';
import { SubregionsComponent } from './subregions/subregions.component';
import { SubregionslistComponent } from './subregionslist/subregionslist.component';
import { EditsubregionsComponent } from './editsubregions/editsubregions.component';
import { DesignationsComponent } from './designations/designations.component';
import { DesignationslistComponent } from './designationslist/designationslist.component';
import { EditdesignationsComponent } from './editdesignations/editdesignations.component';
//import { ProjectAllocationComponent } from './project-allocation/project-allocation.component';
import { UsersComponent } from './users/users.component';
import { EditusersComponent } from './editusers/editusers.component';
import { UserviewComponent } from './userview/userview.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProjectallocationsComponent } from './projectallocations/projectallocations.component';
import { ProjectallocationslistComponent } from './projectallocationslist/projectallocationslist.component';
import { EditprojectallocationComponent } from './editprojectallocation/editprojectallocation.component';
import { TeamleadersComponent } from './teamleaders/teamleaders.component';
import { EditteamleadersComponent } from './editteamleaders/editteamleaders.component';
import { TeamleaderslistComponent } from './teamleaderslist/teamleaderslist.component';
import { TeamleaderslistviewComponent } from './teamleaderslistview/teamleaderslistview.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { TeamdetailslistComponent } from './teamdetailslist/teamdetailslist.component';
import { TeamdetailslistviewComponent } from './teamdetailslistview/teamdetailslistview.component';
import { EditteamdetailsComponent } from './editteamdetails/editteamdetails.component';
import { CompanyComponent } from './company/company.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { CompanylistviewComponent } from './companylistview/companylistview.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { ClientdetailslistComponent } from './clientdetailslist/clientdetailslist.component';
import { EditclientdetailsComponent } from './editclientdetails/editclientdetails.component';
import { ClientdetailsviewComponent } from './clientdetailsview/clientdetailsview.component';
import { ChannelpartnerComponent } from './channelpartner/channelpartner.component';
import { ChannelpartnerslistComponent } from './channelpartnerslist/channelpartnerslist.component';
import { EditchannelpartnerComponent } from './editchannelpartner/editchannelpartner.component';
import { ChannelpartnerviewComponent } from './channelpartnerview/channelpartnerview.component';
import { SalesdetailsComponent } from './salesdetails/salesdetails.component';
import { SalesdetailslistComponent } from './salesdetailslist/salesdetailslist.component';
import { EditsalesdetailsComponent } from './editsalesdetails/editsalesdetails.component';
import { SalesdetailsviewComponent } from './salesdetailsview/salesdetailsview.component';
import { ClientpaymentscheduleComponent } from './clientpaymentschedule/clientpaymentschedule.component';
import { ClientpaymentschedulelistComponent } from './clientpaymentschedulelist/clientpaymentschedulelist.component';
import { EditclientpaymentscheduleComponent } from './editclientpaymentschedule/editclientpaymentschedule.component';
import { SalesdocumentsComponent } from './salesdocuments/salesdocuments.component';
import { SalescommentsComponent } from './salescomments/salescomments.component';
import { DocumentslistComponent } from './documentslist/documentslist.component';
import { EditdocumentsComponent } from './editdocuments/editdocuments.component';
//import { SalesComponent } from './sales/sales.component';

//salary module
import { SalarypackageComponent } from './salary/salarypackage/salarypackage.component';
import { SalarypackagelistComponent } from './salary/salarypackagelist/salarypackagelist.component';
import { SalarypackageviewComponent } from './salary/salarypackageview/salarypackageview.component';
import { EditsalarypackageComponent } from './salary/editsalarypackage/editsalarypackage.component';
import { MonthlySalaryComponent } from './salary/monthly-salary/monthly-salary.component';
import { MonthlySalaryListComponent } from './salary/monthly-salary-list/monthly-salary-list.component';
import { MonthlySalaryViewComponent } from './salary/monthly-salary-view/monthly-salary-view.component';
import { EditmonthlysalaryComponent } from './salary/editmonthlysalary/editmonthlysalary.component';
import { AdvancesalaryComponent } from './salary/advancesalary/advancesalary.component';
import { AdvancesalarylistComponent } from './salary/advancesalarylist/advancesalarylist.component';
import { AdvancesalaryviewComponent } from './salary/advancesalaryview/advancesalaryview.component';
import { EditadvancesalaryComponent } from './salary/editadvancesalary/editadvancesalary.component';
import { AdvanceEmiComponent } from './salary/advance-emi/advance-emi.component';
import { AdvanceEmiListComponent } from './salary/advance-emi-list/advance-emi-list.component';
import { EditadvanceemiComponent } from './salary/editadvanceemi/editadvanceemi.component';
import { MonthlyTargetComponent } from './salary/monthly-target/monthly-target.component';
import { MonthlyTargetListComponent } from './salary/monthly-target-list/monthly-target-list.component';
import { EditmonthlytargetComponent } from './salary/editmonthlytarget/editmonthlytarget.component';


//invoices module
import { InvoicedetailsnewComponent } from './invoices/Invoice/invoicedetailsnew/invoicedetailsnew.component';
import { InvoicedetailsComponent } from './invoices/Invoice/invoicedetails/invoicedetails.component';
import { InvoicedetailslistComponent } from './invoices/Invoice/invoicedetailslist/invoicedetailslist.component';
import { ReceiptdetailslistComponent } from './invoices/receiptdetails/receiptdetailslist/receiptdetailslist.component';
import { ReceiptdetailsComponent } from './invoices/receiptdetails/receiptdetails/receiptdetails.component';
import { CreditnotelistComponent } from './invoices/creditnote/creditnotelist/creditnotelist.component';
import { CreditnoteComponent } from './invoices/creditnote/creditnote/creditnote.component';
import { GstfillingdetailslistComponent } from './invoices/gstfillingdetails/gstfillingdetailslist/gstfillingdetailslist.component';
import { GstfillingdetailsComponent } from './invoices/gstfillingdetails/gstfillingdetails/gstfillingdetails.component';
import { InvoicedetailsviewComponent } from './invoices/Invoice/invoicedetailsview/invoicedetailsview.component';
import { EditinvoicedetailsComponent } from './invoices/Invoice/editinvoicedetails/editinvoicedetails.component';
import { ReceiptdetailsviewComponent } from './invoices/receiptdetails/receiptdetailsview/receiptdetailsview.component';
import { EditreceiptdetailsComponent } from './invoices/receiptdetails/editreceiptdetails/editreceiptdetails.component';
import { CreditnoteviewComponent } from './invoices/creditnote/creditnoteview/creditnoteview.component';
import { EditcreditnoteComponent } from './invoices/creditnote/editcreditnote/editcreditnote.component';
import { GstfillingdetailsviewComponent } from './invoices/gstfillingdetails/gstfillingdetailsview/gstfillingdetailsview.component';
import { EditgstfillingdetailsComponent } from './invoices/gstfillingdetails/editgstfillingdetails/editgstfillingdetails.component';
import { Gstr1Component } from './gstr1/gstr1.component';
import { GstdetailslistComponent } from './gstdetailslist/gstdetailslist.component';
import { Gstr2adetailsComponent } from './gstr2adetails/gstr2adetails.component';
import { Gstr2aComponent } from './gstr2a/gstr2a.component';
import { B2binvocesComponent } from './b2binvoces/b2binvoces.component';
import { B2binvoicedetailsComponent } from './b2binvoicedetails/b2binvoicedetails.component';
import { Gstr3BComponent } from './gstr3-b/gstr3-b.component';
import { Gstr3BDetailsComponent } from './gstr3-bdetails/gstr3-bdetails.component';
import { Gstr3bReportComponent } from './gstr3b-report/gstr3b-report.component';
import { B2binvoiceviewlistComponent } from './b2binvoiceviewlist/b2binvoiceviewlist.component';
import { InvoiceMultiViewComponent } from './invoices/Invoice/invoice-multi-view/invoice-multi-view.component';
import { InvoiceMultiDetailsListComponent } from './invoices/Invoice/invoice-multi-details-list/invoice-multi-details-list.component';
import { EditDetailsMultipleComponent } from './invoices/Invoice/edit-details-multiple/edit-details-multiple.component';
import { InvoiceDetailsMultipleComponent } from './invoices/Invoice/invoice-details-multiple/invoice-details-multiple.component';
import { MonthlySalary1 } from './monthly-salary1/monthly-salary1.model';
import { MonthlySalary1Component } from './monthly-salary1/monthly-salary1.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DealdetaillistComponent } from './dealdetaillist/dealdetaillist.component';
import { DealdetailsComponent } from './dealdetails/dealdetails.component';
import { EditdealdetailsComponent } from './editdealdetails/editdealdetails.component';
import { IncentivedetailsComponent } from './incentivedetails/incentivedetails.component';
import { WalkindealsComponent } from './walkindeals/walkindeals.component';
import { WalkindealslistComponent } from './walkindealslist/walkindealslist.component';
import { QuarterlyincentivedetailsComponent } from './quarterlyincentivedetails/quarterlyincentivedetails.component';
import { HalfyearincentivelistComponent } from './halfyearincentivelist/halfyearincentivelist.component';
import { YearincentivedetailsComponent } from './yearincentivedetails/yearincentivedetails.component';
// import { MonthlySalaryListView1Component } from './salary/monthly-salary-list-view1/monthly-salary-list-view1.component';
import { AdvancesalaryreportComponent } from './salary/advancesalaryreport/advancesalaryreport.component';
import { MonthlySalarylistView1Component } from './salary/monthly-salarylist-view1/monthly-salarylist-view1.component';
import { SalarypackageDetailsComponent } from './salarypackage-details/salarypackage-details.component';


const routes: Routes = [
    {
        path: 'roles',
        component: RolesComponent
    },
    {
        path: 'roleslist',
        component: RoleslistComponent
    },
    {
        path: 'editroles/:id',
        component: EditrolesComponent
    },
    {
        path: 'newusers',
        component: NewusersComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'editusers/:id',
        component: EditusersComponent
    },
    {
        path: 'userview/:id',
        component: UserviewComponent
    },
    {
        path: 'documents/:id',
        component: DocumentsComponent
    },
    {
        path: 'groups',
        component: GroupsComponent
    },
    {
        path: 'editgroups/:id',
        component: EdigroupsComponent
    },
    {
        path: 'groupslist',
        component: GroupslistComponent
    },
    {
        path: 'teams',
        component: TeamsComponent
    },
    {
        path: 'editteams/:id',
        component: EditteamsComponent
    },
    {
        path: 'teamslist',
        component: TeamslistComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'editprojects/:id',
        component: EditprojectsComponent
    },
    {
        path: 'projectslist',
        component: ProjectslistComponent
    },
    {
        path: 'subprojects',
        component: SubprojectsComponent
    },
    {
        path: 'editsubprojects/:id',
        component: EditsubprojectsComponent
    },
    {
        path: 'subprojectslist',
        component: SubprojectslistComponent
    },
    {
        path: 'regions',
        component: RegionsComponent
    },
    {
        path: 'editregions/:id',
        component: EditregionsComponent
    },
    {
        path: 'regionslist',
        component: RegionslistComponent
    },
    {
        path: 'subregions',
        component: SubregionsComponent
    },
    {
        path: 'editsubregions/:id',
        component: EditsubregionsComponent
    },
    {
        path: 'subregionslist',
        component: SubregionslistComponent
    },
    {
        path: 'designations',
        component: DesignationsComponent
    },
    {
        path: 'editdesignations/:id',
        component: EditdesignationsComponent
    },
    {
        path: 'designationslist',
        component: DesignationslistComponent
    },
    {
        path: 'projectallocations',
        component: ProjectallocationsComponent
    },
    {
        path: 'editprojectallocation/:id',
        component: EditprojectallocationComponent
    },
    {
        path: 'projectallocationslist',
        component: ProjectallocationslistComponent
    },
    {
        path: 'teamleaders',
        component: TeamleadersComponent
    },
    {
        path: 'editteamleaders/:id',
        component: EditteamleadersComponent
    },
    {
        path: 'teamleaderslist',
        component: TeamleaderslistComponent
    },
    {
        path: 'teamleaderslistview/:id',
        component: TeamleaderslistviewComponent
    },
    {
        path: 'teamdetails',
        component: TeamdetailsComponent
    },
    {
        path: 'editteamdetails/:id',
        component: EditteamdetailsComponent
    },
    {
        path: 'teamdetailslist',
        component: TeamdetailslistComponent
    },
    {
        path: 'teamdetailslistview/:id',
        component: TeamdetailslistviewComponent
    },
    {
        path: 'company',
        component: CompanyComponent
    },
    {
        path: 'companylist',
        component: CompanylistComponent
    },
    {
        path: 'companylistview/:id',
        component: CompanylistviewComponent
    },
    {
        path: 'editcompany/:id',
        component: EditcompanyComponent
    },
    {
        path: 'clientdetails',
        component: ClientdetailsComponent
    },
    {
        path: 'clientdetailslist',
        component: ClientdetailslistComponent
    },
    {
        path: 'editclientdetails/:id',
        component: EditclientdetailsComponent
    },
    {
        path: 'clientdetailsview/:id',
        component: ClientdetailsviewComponent
    },
    {
        path: 'channelpartner',
        component: ChannelpartnerComponent
    },
    {
        path: 'channelpartnerslist',
        component: ChannelpartnerslistComponent
    },
    {
        path: 'editchannelpartner/:id',
        component: EditchannelpartnerComponent
    },
    {
        path: 'channelpartnerview/:id',
        component: ChannelpartnerviewComponent
    },
    {
        path: 'salesdetails',
        component: SalesdetailsComponent
    },
    {
        path: 'salesdetailslist',
        component: SalesdetailslistComponent
    },
    {
        path: 'editsalesdetails/:id',
        component: EditsalesdetailsComponent
    },
    {
        path: 'salesdetailsview/:id',
        component: SalesdetailsviewComponent
    },
    {
        path: 'clientpaymentschedule',
        component: ClientpaymentscheduleComponent
    },
    {
        path: 'clientpaymentschedulelist',
        component: ClientpaymentschedulelistComponent
    },
    {
        path: 'editclientpaymentschedule/:id',
        component: EditclientpaymentscheduleComponent
    },
    {
        path: 'salesdocuments/:id',
        component: SalesdocumentsComponent
    },
    {
        path: 'salescomments/:id',
        component: SalescommentsComponent
    },
    {
        path: 'documentslist',
        component: DocumentslistComponent
    },
    {
        path: 'editdocuments/:id',
        component: EditdocumentsComponent
    },
    // {
    //     path: 'sales',
    //     component: SalesComponent
    // },

    //salary module//
    {
        path: 'salary/salarypackage',
        component: SalarypackageComponent
    },
    {
        path: 'salary/salarypackageDetails/:id',
        component: SalarypackageDetailsComponent
    },
    {
        path: 'salarypackagelist',
        component: SalarypackagelistComponent
    },
    {
        path: 'salary/salarypackageview/:id',
        component: SalarypackageviewComponent
    },
    {
        path: 'salary/editsalarypackage/:id',
        component: EditsalarypackageComponent
    },
    {
        path: 'salary/monthly-salary',
        component: MonthlySalaryComponent
    },
    {
        path: 'salary/monthly-salary-list',
        component: MonthlySalaryListComponent
    },
    {
        path: 'salary/monthly-salary-view/:id',
        component: MonthlySalaryViewComponent
    },
    {
        path: 'salary/editmonthlysalary/:id',
        component: EditmonthlysalaryComponent
    },

    {
        path: 'salary/monthlysalary1',
        component: MonthlySalary1Component
    },
    {
        path: 'salary/advancesalary',
        component: AdvancesalaryComponent
    },
    {
        path: 'salary/advancesalarylist',
        component: AdvancesalarylistComponent
    },
    {
        path: 'salary/advancesalaryview/:id',
        component: AdvancesalaryviewComponent
    },
    {
        path: 'salary/editadvancesalary/:id',
        component: EditadvancesalaryComponent
    },
    {
        path: 'salary/advance-emi',
        component: AdvanceEmiComponent
    },
    {
        path: 'salary/advance-emi-list',
        component: AdvanceEmiListComponent
    },
    {
        path: 'salary/editadvanceemi/:id',
        component: EditadvanceemiComponent
    },
    {
        path: 'salary/monthly-target',
        component: MonthlyTargetComponent
    },
    {
        path: 'salary/monthly-target-list',
        component: MonthlyTargetListComponent
    },
    {
        path: 'salary/editmonthlytarget/:id',
        component: EditmonthlytargetComponent
    },


    //// invoice module /////
    {
        path: 'invoices/invoice/invoicedetailslist',
        component: InvoicedetailslistComponent
    },
    {
        path: 'invoices/invoice/invoicedetails',
        component: InvoicedetailsComponent
    },
    {
        path: 'invoices/invoice/invoicedetailsview/:id',
        component: InvoicedetailsviewComponent
    },
    {
        path: 'invoices/invoice/editinvoicedetails/:id',
        component: EditinvoicedetailsComponent
    },
    {
        path: 'invoices/receiptdetails/receiptdetailslist',
        component: ReceiptdetailslistComponent
    },
    {
        path: 'invoices/receiptdetails/receiptdetails',
        component: ReceiptdetailsComponent
    },
    {
        path: 'invoices/receiptdetails/receiptdetailsview/:id',
        component: ReceiptdetailsviewComponent
    },
    {
        path: 'invoices/receiptdetails/editreceiptdetails/:id',
        component: EditreceiptdetailsComponent
    },
    {
        path: 'invoices/creditnote/creditnotelist',
        component: CreditnotelistComponent
    },
    {
        path: 'invoices/creditnote/creditnote',
        component: CreditnoteComponent
    },
    {
        path: 'invoices/creditnote/creditnoteview/:id',
        component: CreditnoteviewComponent
    },
    {
        path: 'invoices/creditnote/editcreditnote/:id',
        component: EditcreditnoteComponent
    },
    {
        path: 'invoices/gstfillingdetails/gstfillingdetailslist',
        component: GstfillingdetailslistComponent
    },
    {
        path: 'invoices/gstfillingdetails/gstfillingdetails',
        component: GstfillingdetailsComponent
    },
    {
        path: 'invoices/gstfillingdetails/gstfillingdetailsview/:id',
        component: GstfillingdetailsviewComponent
    },
    {
        path: 'invoices/gstfillingdetails/editgstfillingdetails/:id',
        component: EditgstfillingdetailsComponent
    },
    {
        path: 'invoices/invoice/InvoiceDetailsMultiple',
        component: InvoiceDetailsMultipleComponent
    },
   
    {
        path: 'invoices/invoice/invoicedetailsnew/:id',
        component: InvoicedetailsnewComponent
    },
    // {
    //     path: 'invoices/invoice/InvoiceDetailsMultiple',
    //     component: InvoiceDetailsMultipleComponent
    // },
    {
        path: 'invoices/invoice/EditDetailsMultiple/:id',
        component: EditDetailsMultipleComponent
    },   
    {
        path: 'invoices/invoice/invoicemultipledetailsview/:id',
        component: InvoiceMultiViewComponent
    },
    {
        path: 'invoices/invoice/invoicemultipledetailslist',
        component: InvoiceMultiDetailsListComponent
    },
    {
        path: 'elements',
        component: ElementsComponent
    },
    {
        path: 'validation',
        component: ValidationComponent
    },
    {
        path: 'editor',
        component: EditorComponent
    },
    {
        path: 'uploads',
        component: UploadsComponent
    },
    {
        path: 'wizard',
        component: WizardComponent
    },
    {
        path: 'mask',
        component: MaskComponent
    },
    {
        path: 'advanced',
        component: AdvancedformComponent
    },
    {
        path: 'repeater',
        component: RepeaterComponent
    },
    {
        path: 'invoices/invoice/invoicedetailsnew',
        component: InvoicedetailsnewComponent
    },
    {
        path: 'invoices/invoice/invoicedetailsnew',
        component: InvoicedetailsnewComponent
    },

    {
        path: 'gstr1/:id',
        component: Gstr1Component
    },
    {
        path: 'gstdetailslist',
        component: GstdetailslistComponent
    },
    {
        path: 'gstr2adetails/:id',
        component: Gstr2adetailsComponent
    },
    {
        path: 'gstr2a',
        component: Gstr2aComponent
    },
    {
        path: 'b2binvoices',
        component: B2binvocesComponent
    },
    {
        path: 'b2binvoiceviewlist/:id',
        component: B2binvoiceviewlistComponent
    },
    {
        path: 'b2binvoicedetails/:id',
        component: B2binvoicedetailsComponent
    },
    {
        path: 'gstrb3',
        component: Gstr3BComponent
    },
    {
        path: 'gstr3BDetails',
        component: Gstr3BDetailsComponent
    },
    {
        path: 'gstr3BReport/:id',
        component: Gstr3bReportComponent
    },
    {
        path: 'attendence',
        component: AttendanceComponent
    },
    {
        path: 'dealdetails',
        component: DealdetailsComponent
    },
    {
        path: 'editdealdetails/:id',
        component: EditdealdetailsComponent
    },
    {
        path: 'dealdetailslist',
        component: DealdetaillistComponent
    },
    {
        path: 'walkindeals',
        component: WalkindealsComponent
    },
    {
        path: 'walkindealslist',
        component: WalkindealslistComponent
    },
    {
        path: 'incentivedetails',
        component: IncentivedetailsComponent
    },

    {
        path: 'quarterlyincentive',
        component: QuarterlyincentivedetailsComponent
    },
    {
        path: 'halfyearincentive',
        component: HalfyearincentivelistComponent
    },
    {
        path: 'yearincentive',
        component: YearincentivedetailsComponent
    },
    {
        path: 'salary/advancesalaryreport',
        component: AdvancesalaryreportComponent
    },
     {
        path: 'salary/monthly-salary-list-view1',
        component: MonthlySalarylistView1Component
    }

    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }
