import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LogicModule } from './logic/logic.module';

import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './shared/directives/background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LogicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
