import { Component, OnInit, ElementRef, Input } from '@angular/core';
import GanttChartItem = DlhSoft.Controls.GanttChartView.Item;

@Component({
  selector: 'ganttchartview',
  template: '<div><ng-content></ng-content></div>'
})
export class GanttChartView implements OnInit {
  rootElement: HTMLElement;
  @Input() style: string = "";
  @Input() items: GanttChartItem[] = [];
  constructor(elementRef: ElementRef) { 
    this.rootElement = <HTMLElement>elementRef.nativeElement;
  }
  ngOnInit() {
    var element = <HTMLElement>this.rootElement.firstChild;
    element.setAttribute('style', this.style);
    DlhSoft.Controls.GanttChartView.initialize(element, this.items);
  }
}
