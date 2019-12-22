import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganttchart',
  templateUrl: './ganttchart.component.html',
  styleUrls: ['./ganttchart.component.css']
})
export class GanttchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ganttChartView = document.getElementById('ganttChartView');
    DlhSoft.Controls.GanttChartView.initialize(ganttChartView, []);
  }

}
