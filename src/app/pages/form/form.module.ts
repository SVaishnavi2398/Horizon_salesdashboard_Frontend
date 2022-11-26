import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgbAlertModule, NgbCarouselModule, NgbDropdownModule, NgbModalModule, NgbProgressbarModule,
  NgbTooltipModule, NgbPopoverModule, NgbPaginationModule, NgbNavModule, NgbAccordionModule,
  NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ColorPickerModule } from 'ngx-color-picker';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
};

 const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

import { UIModule } from '../../shared/ui/ui.module';
import { FormRoutingModule } from './form-routing.module';
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
import { NewusersComponent } from './newusers/newusers.component';
import { GroupsComponent } from './groups/groups.component';
import { EdigroupsComponent } from './edigroups/edigroups.component';
import { TeamsComponent } from './teams/teams.component';
import { EditteamsComponent } from './editteams/editteams.component';
import { RoleslistComponent } from './roleslist/roleslist.component';
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
import { SubregionslistComponent } from './subregionslist/subregionslist.component';
import { SubregionsComponent } from './subregions/subregions.component';
import { EditsubregionsComponent } from './editsubregions/editsubregions.component';
import { DesignationsComponent } from './designations/designations.component';
import { DesignationslistComponent } from './designationslist/designationslist.component';
import { EditdesignationsComponent } from './editdesignations/editdesignations.component';
//import { ProjectAllocationComponent } from './project-allocation/project-allocation.component';
import { ProjectallocationsComponent } from './projectallocations/projectallocations.component';
import { ProjectallocationslistComponent } from './projectallocationslist/projectallocationslist.component';
import { EditprojectallocationComponent } from './editprojectallocation/editprojectallocation.component';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';
import { AfetrloginService } from 'src/app/service/afetrlogin.service';
import { BeforeLoginService } from 'src/app/service/before-login.service';
import { UsersComponent } from './users/users.component';
import { EditusersComponent } from './editusers/editusers.component';
import { UserviewComponent } from './userview/userview.component';
import { DocumentsComponent } from './documents/documents.component';
import { BrowserModule } from '@angular/platform-browser';
//import { ProjectallocationsComponent } from './projectallocations/projectallocations.component';
import { TeamleadersComponent } from './teamleaders/teamleaders.component';
import { TeamleaderslistComponent } from './teamleaderslist/teamleaderslist.component';
import { TeamleaderslistviewComponent } from './teamleaderslistview/teamleaderslistview.component';
import { EditteamleadersComponent } from './editteamleaders/editteamleaders.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { TeamdetailslistComponent } from './teamdetailslist/teamdetailslist.component';
import { TeamdetailslistviewComponent } from './teamdetailslistview/teamdetailslistview.component';
import { EditteamdetailsComponent } from './editteamdetails/editteamdetails.component';
import { SearchteamleaderslistPipe } from './teamleaderslist/searchteamleaderslist.pipe';
import { SearchteamdetailslistPipe } from './teamdetailslist/searchteamdetailslist.pipe';
import { CompanyComponent } from './company/company.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { SearchcompanylistPipe } from './companylist/searchcompanylist.pipe';
import { CompanylistviewComponent } from './companylistview/companylistview.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { SearchcompanyPipe } from './projects/searchcompany.pipe';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { ClientdetailslistComponent } from './clientdetailslist/clientdetailslist.component';
import { EditclientdetailsComponent } from './editclientdetails/editclientdetails.component';
import { ClientdetailsviewComponent } from './clientdetailsview/clientdetailsview.component';
import { SearchclientdetailsPipe } from './clientdetailslist/searchclientdetails.pipe';
import { ChannelpartnerComponent } from './channelpartner/channelpartner.component';
import { ChannelpartnerslistComponent } from './channelpartnerslist/channelpartnerslist.component';
import { EditchannelpartnerComponent } from './editchannelpartner/editchannelpartner.component';
import { ChannelpartnerviewComponent } from './channelpartnerview/channelpartnerview.component';
import { SearchchannelpartnerPipe } from './channelpartnerslist/searchchannelpartner.pipe';
import { SalesdetailsComponent } from './salesdetails/salesdetails.component';
import { SalesdetailslistComponent } from './salesdetailslist/salesdetailslist.component';
import { EditsalesdetailsComponent } from './editsalesdetails/editsalesdetails.component';
import { SalesdetailsviewComponent } from './salesdetailsview/salesdetailsview.component';
import { SearchsalesdetailsPipe } from './salesdetailslist/searchsalesdetails.pipe';
import { ClientpaymentscheduleComponent } from './clientpaymentschedule/clientpaymentschedule.component';
import { ClientpaymentschedulelistComponent } from './clientpaymentschedulelist/clientpaymentschedulelist.component';
import { EditclientpaymentscheduleComponent } from './editclientpaymentschedule/editclientpaymentschedule.component';
import { SearchclientpaymentPipe } from './clientpaymentschedulelist/searchclientpayment.pipe';
import { SalesdocumentsComponent } from './salesdocuments/salesdocuments.component';
import { SalescommentsComponent } from './salescomments/salescomments.component';
import { DocumentslistComponent } from './documentslist/documentslist.component';
import { EditdocumentsComponent } from './editdocuments/editdocuments.component';
import { SalesComponent } from './sales/sales.component';

//////// SALARY MODULE ////////////

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


//////// INVIOCES MODULE //////////////

import {InvoicedetailsnewComponent } from './invoices/Invoice/invoicedetailsnew/invoicedetailsnew.component';
import { InvoicedetailslistComponent } from './invoices/Invoice/invoicedetailslist/invoicedetailslist.component';
import { EditinvoicedetailsComponent } from './invoices/Invoice/editinvoicedetails/editinvoicedetails.component';
import { InvoicedetailsviewComponent } from './invoices/Invoice/invoicedetailsview/invoicedetailsview.component';
import { SearchinvoicedetailsPipe } from './invoices/Invoice/invoicedetailslist/searchinvoicedetails.pipe';
import { ReceiptdetailslistComponent } from './invoices/receiptdetails/receiptdetailslist/receiptdetailslist.component';
import { ReceiptdetailsComponent } from './invoices/receiptdetails/receiptdetails/receiptdetails.component';
import { CreditnotelistComponent } from './invoices/creditnote/creditnotelist/creditnotelist.component';
import { CreditnoteComponent } from './invoices/creditnote/creditnote/creditnote.component';
import { GstfillingdetailslistComponent } from './invoices/gstfillingdetails/gstfillingdetailslist/gstfillingdetailslist.component';
import { GstfillingdetailsComponent } from './invoices/gstfillingdetails/gstfillingdetails/gstfillingdetails.component';
import { ReceiptdetailsviewComponent } from './invoices/receiptdetails/receiptdetailsview/receiptdetailsview.component';
import { EditreceiptdetailsComponent } from './invoices/receiptdetails/editreceiptdetails/editreceiptdetails.component';
import { CreditnoteviewComponent } from './invoices/creditnote/creditnoteview/creditnoteview.component';
import { EditcreditnoteComponent } from './invoices/creditnote/editcreditnote/editcreditnote.component';
import { GstfillingdetailsviewComponent } from './invoices/gstfillingdetails/gstfillingdetailsview/gstfillingdetailsview.component';
import { EditgstfillingdetailsComponent } from './invoices/gstfillingdetails/editgstfillingdetails/editgstfillingdetails.component';
import { SearchreceiptdetailsPipe } from './invoices/receiptdetails/receiptdetailslist/searchreceiptdetails.pipe';
import { SearchcreditnotedetailsPipe } from './invoices/creditnote/creditnotelist/searchcreditnotedetails.pipe';
import { SearchgstfillingdetailsPipe } from './invoices/gstfillingdetails/gstfillingdetailslist/searchgstfillingdetails.pipe';
import { SearchsalarypackagePipe } from './salary/salarypackagelist/searchsalarypackage.pipe';
import { SearchmonthlysalaryPipe } from './salary/monthly-salary-list/searchmonthlysalary.pipe';
import { SearchmonthlytargetPipe } from './salary/monthly-target-list/searchmonthlytarget.pipe';
import { SearchadvancesalaryPipe } from './salary/advancesalarylist/searchadvancesalary.pipe';
import { SearchadvanceemiPipe } from './salary/advance-emi-list/searchadvanceemi.pipe';
import { SearchusersPipe } from './users/searchusers.pipe';
import { SearchprojectsPipe } from './projectslist/searchprojects.pipe';
import { SearchsubprojectsPipe } from './subprojectslist/searchsubprojects.pipe';
import { SearchsubregionsPipe } from './subregionslist/searchsubregions.pipe';
import { SearchregionsPipe } from './regionslist/searchregions.pipe';
import { SearchprojectallocationsPipe } from './projectallocationslist/searchprojectallocations.pipe';
import { SearchteamsPipe } from './teamslist/searchteams.pipe';
import { InvoicedetailsComponent } from './invoices/Invoice/invoicedetails/invoicedetails.component';
import { InvoiceMultiViewComponent } from './invoices/Invoice/invoice-multi-view/invoice-multi-view.component';
import { InvoiceMultiDetailsListComponent } from './invoices/Invoice/invoice-multi-details-list/invoice-multi-details-list.component';
import { Gstr1Component } from './gstr1/gstr1.component';
import { GstdetailslistComponent } from './gstdetailslist/gstdetailslist.component';
import { Gstr2adetailsComponent } from './gstr2adetails/gstr2adetails.component';
import { Gstr2aComponent } from './gstr2a/gstr2a.component';
import { B2binvocesComponent } from './b2binvoces/b2binvoces.component';
import { B2binvoicedetailsComponent } from './b2binvoicedetails/b2binvoicedetails.component';
import { Searchb2binvoicePipe } from './b2binvoces/searchb2binvoice.pipe';
import { Gstr3bReportComponent } from './gstr3b-report/gstr3b-report.component';
import { Gstr3BComponent } from './gstr3-b/gstr3-b.component';
import { Gstr3BDetailsComponent } from './gstr3-bdetails/gstr3-bdetails.component';
import { B2binvoiceviewlistComponent } from './b2binvoiceviewlist/b2binvoiceviewlist.component';
import { EditDetailsMultipleComponent } from './invoices/Invoice/edit-details-multiple/edit-details-multiple.component';
import { Searchinvoicedetails1Pipe } from './invoices/Invoice/invoice-multi-details-list/searchinvoicedetails1.pipe';
import { SearchgstdetailsPipe } from './gstdetailslist/searchgstdetails.pipe';
import { Searchgstr3bdetailsPipe } from './gstr3-bdetails/searchgstr3bdetails.pipe';
import { Searchgstr2aPipe } from './gstr2a/searchgstr2a.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { InvoiceDetailsMultipleComponent } from './invoices/Invoice/invoice-details-multiple/invoice-details-multiple.component';
import { MonthlySalary1Component } from './monthly-salary1/monthly-salary1.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SearchattendancePipe } from './attendance/searchattendance.pipe';
import { DealdetailsComponent } from './dealdetails/dealdetails.component';
import { DealdetaillistComponent } from './dealdetaillist/dealdetaillist.component';
import { EditdealdetailsComponent } from './editdealdetails/editdealdetails.component';
import { SearchdealdetaillistPipe } from './dealdetaillist/searchdealdetaillist.pipe';
import { IncentivedetailsComponent } from './incentivedetails/incentivedetails.component';
import { IncentivedetailsPipe } from './incentivedetails/incentivedetails.pipe';
import { WalkindealsComponent } from './walkindeals/walkindeals.component';
import { WalkindealslistComponent } from './walkindealslist/walkindealslist.component';
import { SearchwalkindealslistPipe } from './walkindealslist/searchwalkindealslist.pipe';
import { HalfyearincentivelistComponent } from './halfyearincentivelist/halfyearincentivelist.component';
import { YearincentivedetailsComponent } from './yearincentivedetails/yearincentivedetails.component';
import { QuarterlyincentivedetailsComponent } from './quarterlyincentivedetails/quarterlyincentivedetails.component';
import { SearchquartelydetailsPipe } from './quarterlyincentivedetails/searchquartelydetails.pipe';
import { SearchhalfyearincentivePipe } from './halfyearincentivelist/searchhalfyearincentive.pipe';
import { SearchyearincentivePipe } from './yearincentivedetails/searchyearincentive.pipe';
import { AdvancesalaryreportComponent } from './salary/advancesalaryreport/advancesalaryreport.component';
import { MonthlySalarylistView1Component } from './salary/monthly-salarylist-view1/monthly-salarylist-view1.component';
import { SalarypackageDetailsComponent } from './salarypackage-details/salarypackage-details.component';
import { SearchdesignationslistPipe } from './designationslist/searchdesignationslist.pipe';
import { LeadsgivenComponent } from './leadsgiven/leadsgiven.component';
import { WeeklyleadslistComponent } from './weeklyleadslist/weeklyleadslist.component';
import { LeadsgivenlistComponent } from './leadsgivenlist/leadsgivenlist.component';
import { SearchleadsPipe } from './leadsgiven/searchleads.pipe'





//import { SearchPipe } from './search.pipe';
//import { SearchPipe } from './teamdetailslist/search.pipe';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [  Searchinvoicedetails1Pipe,SearchgstdetailsPipe, Searchgstr3bdetailsPipe,Searchgstr2aPipe,UserviewComponent,DocumentsComponent, ElementsComponent, ValidationComponent, EditorComponent, UploadsComponent, WizardComponent, MaskComponent, AdvancedformComponent, RepeaterComponent, RolesComponent, NewusersComponent, GroupsComponent, TeamsComponent, RoleslistComponent, TeamslistComponent, GroupslistComponent, EditrolesComponent, ProjectsComponent, ProjectslistComponent, SubprojectsComponent, SubprojectslistComponent, RegionsComponent, RegionslistComponent, SubregionslistComponent, SubregionsComponent, DesignationsComponent, DesignationslistComponent, EditdesignationsComponent, EditregionsComponent, EditsubregionsComponent, EdigroupsComponent, EditteamsComponent, EditsubprojectsComponent, ProjectallocationsComponent, EditprojectallocationComponent, UsersComponent, EditusersComponent, TeamleadersComponent, TeamleaderslistComponent, EditteamleadersComponent, TeamdetailsComponent, TeamdetailslistComponent, EditteamdetailsComponent, SearchteamleaderslistPipe, SearchteamdetailslistPipe, TeamdetailslistviewComponent, TeamleaderslistviewComponent, CompanyComponent, CompanylistComponent, SearchcompanylistPipe, CompanylistviewComponent, EditcompanyComponent, SearchcompanyPipe, EditprojectsComponent, ProjectallocationslistComponent, ClientdetailsComponent, ClientdetailslistComponent, EditclientdetailsComponent, ClientdetailsviewComponent, SearchclientdetailsPipe, ChannelpartnerComponent, ChannelpartnerslistComponent, EditchannelpartnerComponent, ChannelpartnerviewComponent, SearchchannelpartnerPipe, SalesdetailsComponent, SalesdetailslistComponent,
    EditsalesdetailsComponent, SalesdetailsviewComponent, SearchsalesdetailsPipe, ClientpaymentscheduleComponent, ClientpaymentschedulelistComponent, EditclientpaymentscheduleComponent, SearchclientpaymentPipe, SalesdocumentsComponent, SalescommentsComponent, DocumentslistComponent, EditdocumentsComponent, SalesComponent, 
    SalarypackageComponent, SalarypackagelistComponent, SalarypackageviewComponent, EditsalarypackageComponent, AdvancesalaryComponent, AdvancesalarylistComponent, AdvancesalaryviewComponent, AdvanceEmiComponent, AdvanceEmiListComponent, MonthlyTargetComponent, MonthlyTargetListComponent, MonthlySalaryComponent, MonthlySalaryListComponent, MonthlySalaryViewComponent, EditmonthlysalaryComponent, EditmonthlytargetComponent, EditadvancesalaryComponent, EditadvanceemiComponent,
    InvoiceMultiViewComponent, SearchleadsPipe, InvoiceMultiDetailsListComponent, InvoicedetailsComponent, InvoicedetailslistComponent, InvoicedetailsviewComponent, EditinvoicedetailsComponent, SearchinvoicedetailsPipe, ReceiptdetailslistComponent, ReceiptdetailsComponent, CreditnotelistComponent, CreditnoteComponent, GstfillingdetailslistComponent, GstfillingdetailsComponent,  ReceiptdetailsviewComponent, EditreceiptdetailsComponent, CreditnoteviewComponent, EditcreditnoteComponent, GstfillingdetailsviewComponent, EditgstfillingdetailsComponent, SearchreceiptdetailsPipe, SearchcreditnotedetailsPipe, SearchgstfillingdetailsPipe, SearchsalarypackagePipe, SearchmonthlysalaryPipe, SearchmonthlytargetPipe, SearchadvancesalaryPipe, SearchadvanceemiPipe, SearchusersPipe, SearchprojectsPipe, SearchsubprojectsPipe, SearchsubregionsPipe, SearchregionsPipe, SearchprojectallocationsPipe, SearchteamsPipe, InvoicedetailsnewComponent, InvoiceMultiDetailsListComponent, EditDetailsMultipleComponent, Gstr1Component,GstdetailslistComponent,Gstr2adetailsComponent,Gstr2aComponent,B2binvocesComponent,B2binvoicedetailsComponent,Searchb2binvoicePipe,Gstr3bReportComponent,Gstr3BComponent,Gstr3BDetailsComponent, B2binvoiceviewlistComponent,InvoiceDetailsMultipleComponent, MonthlySalary1Component, AttendanceComponent, SearchattendancePipe, DealdetailsComponent, DealdetaillistComponent, EditdealdetailsComponent, SearchdealdetaillistPipe, IncentivedetailsComponent, IncentivedetailsPipe, DealdetaillistComponent, DealdetailsComponent,WalkindealsComponent, WalkindealslistComponent,SearchwalkindealslistPipe,HalfyearincentivelistComponent, YearincentivedetailsComponent, QuarterlyincentivedetailsComponent, SearchquartelydetailsPipe, SearchhalfyearincentivePipe, SearchyearincentivePipe, AdvancesalaryreportComponent, MonthlySalarylistView1Component, SalarypackageDetailsComponent, SearchdesignationslistPipe, LeadsgivenComponent, WeeklyleadslistComponent, LeadsgivenlistComponent ],
  imports: [
    // BrowserModule,
    /***Sorting */
    OrderModule,
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    UIModule,
    CKEditorModule,
    ArchwizardModule,
    NgxMaskModule.forRoot(),
    NgSelectModule,
    UiSwitchModule,
    ColorPickerModule,
    NgbDatepickerModule,
    DropzoneModule,
    NgbAlertModule,
    NgbCarouselModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbPaginationModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ],
  providers: [
    JarwisService,
    TokenService,
    AuthService,
    AfetrloginService,
    BeforeLoginService,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class FormModule { }
