import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SimplebarAngularModule } from 'simplebar-angular';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { UiSwitchModule } from 'ngx-ui-switch';

import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { AfetrloginService } from '../service/afetrlogin.service';
import { BeforeLoginService } from '../service/before-login.service';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LayoutComponent, SidebarComponent, TopbarComponent, FooterComponent, RightsidebarComponent, HorizontalComponent, VerticalComponent, HorizontaltopbarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,
    ClickOutsideModule,
    SimplebarAngularModule,
    UiSwitchModule
  ],

  providers: [
    JarwisService,
    TokenService,
    AuthService,
    AfetrloginService,
    BeforeLoginService,
    
  ]
  
})
export class LayoutsModule { }
