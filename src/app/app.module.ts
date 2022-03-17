import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { HerobannerComponent } from './componentList/herobanner/herobanner.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { AboutComponent } from './layouts/about/about.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { ParagraphComponent } from './componentList/paragraph/paragraph.component';
import { ButtonComponent } from './componentList/button/button.component';
import { HerobannerRComponent } from './componentList/herobanner-r/herobanner-r.component';
import { RoundrecComponent } from './componentList/roundrec/roundrec.component';
import { TitlecomponentComponent } from './componentList/titlecomponent/titlecomponent.component';
import { ColumnListComponent } from './componentList/column-list/column-list.component';
import { FormComponent } from './componentList/form/form.component';
import { PhonePipe } from "./componentList/form/phonePipe.pipe";
import { FooterComponent } from './componentList/footer/footer.component';
import { RightBannerComponent } from './componentList/right-banner/right-banner.component';
import { FullWidhtBannerComponent } from './componentList/full-widht-banner/full-widht-banner.component';
import { BlackbirdprojectComponent } from './layouts/blackbirdproject/blackbirdproject.component';
import { MomentumprojectComponent } from './layouts/momentumproject/momentumproject.component';
import { ErrorpageComponent } from './layouts/errorpage/errorpage.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InterceptorService } from './loader/interceptor.service';

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
    RoundrecComponent,
    TitlecomponentComponent,
    ColumnListComponent,
    FormComponent,
    PhonePipe,
    FooterComponent,
    RightBannerComponent,
    FullWidhtBannerComponent,
    BlackbirdprojectComponent,
    MomentumprojectComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
