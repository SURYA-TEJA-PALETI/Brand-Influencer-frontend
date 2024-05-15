import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandSignupComponent } from './brand-signup/brand-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { InfluencerSignupComponent } from './influencer-signup/influencer-signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { SignupSuccessfulComponent } from './signup-successful/signup-successful.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ProfileComponent } from './profile/profile.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';

const routes: Routes = [   
   { path: 'welcome' , component: WelcomeComponent},
{ path: 'login' , component: LoginComponent},
{ path: '' , component: WelcomeComponent},
{ path: 'error' , component: ErrorComponent, canActivate:[RouteGuardService]},
// { path: 'dashboard/:name' , component: DashboardComponent, canActivate:[RouteGuardService]},
{ path: 'dashboard/:name' , component: DashboardComponent},
// { path: 'signup' , component: SignupComponent},
{ path: 'about', component: AboutComponent },
{ path: 'signup-success', component: SignupSuccessfulComponent },
{path :'signup',component:SignupComponent},
{path : 'signup/brand',component:BrandSignupComponent},
{path: 'contact', component:ContactComponent},
{path: 'campaign', component:CampaignComponent},
{path:'signup/influencer',component:InfluencerSignupComponent},
{path:'profile',component:ProfileComponent},
{path:'campaignsList',component:CampaignsListComponent},
{ path: 'logout' , component: LogoutComponent, canActivate:[RouteGuardService]},
{ path: '**' , component: ErrorComponent, canActivate:[RouteGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
