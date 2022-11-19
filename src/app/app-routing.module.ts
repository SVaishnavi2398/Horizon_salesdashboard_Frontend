import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { AuthGuard } from './core/guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AfetrloginService } from './service/afetrlogin.service';
import { BeforeLoginService } from './service/before-login.service';

import { DefaultComponent } from './pages/dashboards/default/default.component';
import { LayoutComponent } from './layouts/layout.component';
import { AuthGuard } from './guards/auth/auth.guard';
//import { UsersComponent } from './pages/form/users/users.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', component: DefaultComponent },

  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppRoutingModule { }




