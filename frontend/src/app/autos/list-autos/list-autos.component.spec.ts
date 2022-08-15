import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutosComponent } from './list-autos.component';

describe('ListAutosComponent', () => {
  let component: ListAutosComponent;
  let fixture: ComponentFixture<ListAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
