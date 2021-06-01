import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesWorkProgressComponent } from './sales-work-progress.component';

describe('SalesWorkProgressComponent', () => {
  let component: SalesWorkProgressComponent;
  let fixture: ComponentFixture<SalesWorkProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesWorkProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesWorkProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
