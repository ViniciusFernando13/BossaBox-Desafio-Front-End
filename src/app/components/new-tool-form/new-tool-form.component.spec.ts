import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToolFormComponent } from './new-tool-form.component';

describe('NewToolFormComponent', () => {
  let component: NewToolFormComponent;
  let fixture: ComponentFixture<NewToolFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewToolFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewToolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
