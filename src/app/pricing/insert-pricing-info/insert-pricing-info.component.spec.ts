import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPricingInfoComponent } from './insert-pricing-info.component';

describe('InsertPricingInfoComponent', () => {
  let component: InsertPricingInfoComponent;
  let fixture: ComponentFixture<InsertPricingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPricingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPricingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
