import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { HerobannerComponent } from './componentList/herobanner/herobanner.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { AboutComponent } from './layouts/about/about.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { ParagraphComponent } from './componentList/paragraph/paragraph.component';
import { ButtonComponent } from './componentList/button/button.component';
import { HerobannerRComponent } from './componentList/herobanner-r/herobanner-r.component';
import { RoundrecComponent } from './componentList/roundrec/roundrec.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HerobannerComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    ParagraphComponent,
    ButtonComponent,
    HerobannerRComponent,
    RoundrecComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
