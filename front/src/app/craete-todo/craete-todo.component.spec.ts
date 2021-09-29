import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteTodoComponent } from './craete-todo.component';

describe('CraeteTodoComponent', () => {
  let component: CraeteTodoComponent;
  let fixture: ComponentFixture<CraeteTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraeteTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraeteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
