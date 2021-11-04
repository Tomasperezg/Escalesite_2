import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { HerobannerComponent } from './componentList/herobanner/herobanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HerobannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
