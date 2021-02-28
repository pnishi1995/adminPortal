import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePricingInfoComponent } from './update-pricing-info.component';

describe('UpdatePricingInfoComponent', () => {
  let component: UpdatePricingInfoComponent;
  let fixture: ComponentFixture<UpdatePricingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePricingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePricingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
