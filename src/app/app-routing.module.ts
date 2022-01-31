import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { AboutComponent } from './layouts/about/about.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { BlackbirdprojectComponent } from './layouts/blackbirdproject/blackbirdproject.component'
import { MomentumprojectComponent } from './layouts/momentumproject/momentumproject.component';
import { ErrorpageComponent } from './layouts/errorpage/errorpage.component';


const routes: Routes = [
  {path: 'home-page', component: HomepageComponent },
  {path: 'contact-us', component: ContactComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio/blackbird-homes-gr', component: BlackbirdprojectComponent},
  {path: 'portfolio/momentum-center', component: MomentumprojectComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full' },
  {path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
