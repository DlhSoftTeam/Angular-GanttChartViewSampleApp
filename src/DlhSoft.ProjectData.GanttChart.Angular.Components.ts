import { Component, OnInit, ElementRef, Input } from '@angular/core';
import GanttChartItem = DlhSoft.Controls.GanttChartView.Item;
import GanttChartSettings = DlhSoft.Controls.GanttChartView.Settings;

@Component({
  selector: 'ganttchartview',
  template: '<div><ng-content></ng-content></div>'
})
export class GanttChartView implements OnInit {
  rootElement: HTMLElement;
  @Input() style: string = "";
  @Input() items: GanttChartItem[] = [];
  @Input() settings: GanttChartSettings = {};
  @Input() license: string;
  @Input() change: (item: GanttChartItem, propertyName: string, isDirect: boolean, isFinal: boolean) => void;
  constructor(elementRef: ElementRef) { 
    this.rootElement = <HTMLElement>elementRef.nativeElement;
  }
  ngOnInit() {
    var element = <HTMLElement>this.rootElement.firstChild;
    element.setAttribute('style', this.style);
    var changeHandler = this.settings.itemPropertyChangeHandler;
    DlhSoft.Controls.GanttChartView.initialize(element, this.items, this.settings, this.license);
    if (this.change) {
      this.settings.itemPropertyChangeHandler = (item, propertyName, isDirect, isFinal) => {
      if (changeHandler)
        changeHandler(item, propertyName, isDirect, isFinal);
        this.change(item, propertyName, isDirect, isFinal);
      }
    }
  }
}
