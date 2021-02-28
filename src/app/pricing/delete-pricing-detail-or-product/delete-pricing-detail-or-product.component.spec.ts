import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePricingDetailOrProductComponent } from './delete-pricing-detail-or-product.component';

describe('DeletePricingDetailOrProductComponent', () => {
  let component: DeletePricingDetailOrProductComponent;
  let fixture: ComponentFixture<DeletePricingDetailOrProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePricingDetailOrProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePricingDetailOrProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
