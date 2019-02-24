import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageVideoListComponent } from "./components/page-video-list/page-video-list.component";
import { PageVideoProfileComponent } from "./components/page-video-profile/page-video-profile.component";
import { PageVideoNotFoundComponent } from "./components/page-video-not-found/page-video-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: PageVideoListComponent,
  },
  {
    path: 'video-profile',
    component: PageVideoProfileComponent,
  },
  {
    path: 'video-not-found',
    component: PageVideoNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
