import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesUserCardComponent } from './sales-user-card.component';

describe('SalesUserCardComponent', () => {
  let component: SalesUserCardComponent;
  let fixture: ComponentFixture<SalesUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesUserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
