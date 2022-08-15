import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAutoComponent } from './view-auto.component';

describe('ViewAutoComponent', () => {
  let component: ViewAutoComponent;
  let fixture: ComponentFixture<ViewAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
