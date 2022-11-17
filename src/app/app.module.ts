import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
// import {HashLocationStrategy, LocationStrategy} from '@angular/common'
import { environment } from '../environments/environment';

import { NgbNavModule, NgbAccordionModule, NgbTooltipModule, NgbModule, NgbAlertModule, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { initFirebaseBackend } from './authUtils';
//import { ErrorInterceptor } from './core/helpers/error.interceptor';
//import { JwtInterceptor } from './core/helpers/jwt.interceptor';
//import { FakeBackendInterceptor } from './core/helpers/fake-backend';
import { FormModule } from './pages/form/form.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JarwisService } from './service/jarwis.service';
import { TokenService } from './service/token.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './service/auth.service';
import { AfetrloginService } from './service/afetrlogin.service';
import { BeforeLoginService } from './service/before-login.service';
import { DatePipe } from '@angular/common';

//import { AuthGuard } from './core/guards/auth.guard';
import { SearchPipe } from './search.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ExcelService } from './service/excel.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts';


if (environment.defaultauth === 'firebase') {
  initFirebaseBackend(environment.firebaseConfig);
} else {
  // tslint:disable-next-line: no-unused-expression
  //FakeBackendInterceptor;
}

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RequestResetComponent,
    ResponseResetComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    SearchPipe,
    
    //TestComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    

  
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LayoutsModule,
    AppRoutingModule,
    CarouselModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbModule,
    FormsModule,
    FormModule,
    NgSelectModule,
    NgxPaginationModule,
    ChartsModule,
    NgMultiSelectDropDownModule.forRoot()
   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    JarwisService,
    TokenService,
    AuthService,
    AfetrloginService,
    BeforeLoginService,
    ExcelService,
    DatePipe, 
    // {provide:LocationStrategy, useClass:HashLocationStrategy}
    // AuthGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
  ],

})
export class AppModule { }

//export class UsersComponent{ }
