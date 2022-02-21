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
  { 
    path: '', 
    children: [
      {
        path: 'home-page',
        component: HomepageComponent,
        data: { animation: 'HomePage' }
      },
      {
        path: 'about-us',
        component: AboutComponent,
        data: { animation: 'AboutPage' }
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
        data: { animation: 'PortfolioPage' }
      },
      {
        path: 'portfolio/blackbird-homes-gr',
        component: BlackbirdprojectComponent,
        data: { animation: 'ProjectPage' }
      },
      {
        path: 'portfolio/momentum-center',
        component: MomentumprojectComponent,
        data: { animation: 'ProjectPage' }
      },
      {
        path: 'contact-us',
        component: ContactComponent,
        data: { animation: 'ContactPage' }
      },
      {
        path: '',
        redirectTo: '/home-page',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: ErrorpageComponent,
        data: { animation: 'ErrorPage' }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
