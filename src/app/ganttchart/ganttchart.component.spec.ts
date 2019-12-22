import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttchartComponent } from './ganttchart.component';

describe('GanttchartComponent', () => {
  let component: GanttchartComponent;
  let fixture: ComponentFixture<GanttchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
