import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GanttChartView } from '../DlhSoft.ProjectData.GanttChart.Angular.Components';

@NgModule({
  declarations: [
    AppComponent,
    GanttChartView
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
