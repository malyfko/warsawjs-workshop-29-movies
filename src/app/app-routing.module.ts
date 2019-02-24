import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from "./components/page-home/page-home.component";
import { PageContactComponent } from "./components/page-contact/page-contact.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent,
  },
  {
    path: 'contact',
    component: PageContactComponent,
  },
  {
    path: 'movies',
    loadChildren: './logic/logic.module#LogicModule',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
