import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { PageVideoNotFoundComponent } from './components/page-video-not-found/page-video-not-found.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { LogicRoutingModule } from "./logic-routing.module";
import { MoviesService } from "./services/movies.service";

@NgModule({
  declarations: [
    PageVideoNotFoundComponent,
    PageVideoProfileComponent,
    PageVideoListComponent,
  ],
  imports: [
    CommonModule,
    LogicRoutingModule,
    HttpClientModule,
  ],
  exports: [
    PageVideoNotFoundComponent,
    PageVideoProfileComponent,
    PageVideoListComponent,
  ],
  providers: [
    MoviesService,
  ],
})
export class LogicModule { }
