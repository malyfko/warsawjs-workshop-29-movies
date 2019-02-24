import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideoNotFoundComponent } from './components/page-video-not-found/page-video-not-found.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';

@NgModule({
  declarations: [
    PageVideoNotFoundComponent,
    PageVideoProfileComponent,
    PageVideoListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageVideoNotFoundComponent,
    PageVideoProfileComponent,
    PageVideoListComponent,
  ],
})
export class LogicModule { }
