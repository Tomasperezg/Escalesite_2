import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { AboutComponent } from './layouts/about/about.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';


const routes: Routes = [
  {path: 'home-page', component: HomepageComponent },
  {path: 'contact-us', component: ContactComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
