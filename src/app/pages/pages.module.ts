import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimplebarAngularModule } from 'simplebar-angular';

import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardsModule } from './dashboards/dashboards.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//import { LoaderService } from '../core/services/loader.service';

import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { AfetrloginService } from '../service/afetrlogin.service';
import { BeforeLoginService } from '../service/before-login.service';
import { ReportsComponent } from './reports/reports.component';
import { AddreportsComponent } from './reports/addreports/addreports.component';
import { GeneratereportComponent } from './reports/generatereport/generatereport.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CalculationsComponent } from './reports/calculations/calculations.component';
import { OrderModule } from 'ngx-order-pipe';
import { SearchreportsPipe } from './reports/searchreports.pipe';



FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
  timeGridPlugin,
  listPlugin
]);

@NgModule({
  declarations: [CalendarComponent, ChatComponent, ReportsComponent, AddreportsComponent, GeneratereportComponent, CalculationsComponent, SearchreportsPipe],
  imports: [
    /***Sorting */
    OrderModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    UIModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    HttpClientModule,
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    SimplebarAngularModule,
    NgMultiSelectDropDownModule
  ],

  providers: [
    JarwisService,
    TokenService,
    AuthService,
    AfetrloginService,
    BeforeLoginService 
  ]
})
export class PagesModule { }
