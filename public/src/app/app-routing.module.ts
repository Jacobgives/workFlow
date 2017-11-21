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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
