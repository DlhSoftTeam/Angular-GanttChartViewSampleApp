import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GanttChartView } from '../DlhSoft.ProjectData.GanttChart.Angular.Components';
import { ScheduleChartView } from '../DlhSoft.ProjectData.GanttChart.Angular.Components';
import { LoadChartView } from '../DlhSoft.ProjectData.GanttChart.Angular.Components';
import { PertChartView } from '../DlhSoft.ProjectData.PertChart.Angular.Components';
import { NetworkDiagramView } from '../DlhSoft.ProjectData.PertChart.Angular.Components';

@NgModule({
  declarations: [
    AppComponent,
    GanttChartView, ScheduleChartView, LoadChartView,
    PertChartView, NetworkDiagramView
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
