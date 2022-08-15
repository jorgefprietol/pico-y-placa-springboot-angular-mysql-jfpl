import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAutoComponent } from './delete-auto.component';

describe('DeleteAutoComponent', () => {
  let component: DeleteAutoComponent;
  let fixture: ComponentFixture<DeleteAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
