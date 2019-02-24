import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageHomeComponent } from "./components/page-home/page-home.component";
import { PageContactComponent } from "./components/page-contact/page-contact.component";

import { BackgroundColorDirective } from './shared/directives/background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    PageHomeComponent,
    PageContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    PageHomeComponent,
    PageContactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
