import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrandSignupComponent } from './brand-signup/brand-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InfluencerSignupComponent } from './influencer-signup/influencer-signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { SignupSuccessfulComponent } from './signup-successful/signup-successful.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ProfileComponent } from './profile/profile.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandSignupComponent,
    DashboardComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    InfluencerSignupComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    WelcomeComponent,
    ContactComponent,
    SignupSuccessfulComponent,
    CampaignComponent,
    ProfileComponent,
    CampaignsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
