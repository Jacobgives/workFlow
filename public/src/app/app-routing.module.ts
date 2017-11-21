import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { EarnersComponent } from './earners/earners.component';
import { LeadersComponent } from './leaders/leaders.component';
import { DashComponent } from './dash/dash.component';
import { RegComponent } from './reg/reg.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'/',
    component: HeaderComponent,
    children: [
        {
          path:'/register',
          pathMatch: 'full',
          component: RegComponent,
        },
        {
        path:'/search',
        pathMatch: 'full',
        component: SearchComponent,
        }],
  },
  {
    path:'/earners',
    pathMatch: 'full',
    component: EarnersComponent,
    children: [],
  },
  {
    path:'/leaders',
    pathMatch: 'full',
    component: LeadersComponent,
    children: [],
  },
  {
    path:'/dash',
    pathMatch: 'full',
    component: DashComponent,
    children: [],
  },
  {
    path:'/view',
    pathMatch: 'full',
    component: ViewComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
