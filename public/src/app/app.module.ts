import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeadersComponent } from './leaders/leaders.component';
import { EarnersComponent } from './earners/earners.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { DashComponent } from './dash/dash.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeadersComponent,
    EarnersComponent,
    SearchComponent,
    ViewComponent,
    DashComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
