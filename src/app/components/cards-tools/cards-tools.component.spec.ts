import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsToolsComponent } from './cards-tools.component';

describe('CardsToolsComponent', () => {
  let component: CardsToolsComponent;
  let fixture: ComponentFixture<CardsToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
