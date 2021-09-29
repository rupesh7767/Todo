import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodobyidComponent } from './todobyid.component';

describe('TodobyidComponent', () => {
  let component: TodobyidComponent;
  let fixture: ComponentFixture<TodobyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodobyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodobyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
