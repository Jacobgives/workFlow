import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeadersComponent } from './leaders/leaders.component';
import { EarnersComponent } from './earners/earners.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { DashComponent } from './dash/dash.component';
import { RegComponent } from './reg/reg.component';
import { FlowService } from './flow.service';

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
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [FlowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
