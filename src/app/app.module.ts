import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { GraphService } from './graph/graph.service';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';

const appRoutes: Routes = [
	{ path : 'Graph', component : GraphComponent },
	{ path : '', redirectTo : '/Graph', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
