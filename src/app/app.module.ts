import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { HerobannerComponent } from './componentList/herobanner/herobanner.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { AboutComponent } from './layouts/about/about.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { ParagraphComponent } from './componentList/paragraph/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HerobannerComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
