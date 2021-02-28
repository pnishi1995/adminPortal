import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertPricingInfoComponent } from './insert-pricing-info/insert-pricing-info.component';
import { UpdatePricingInfoComponent } from './update-pricing-info/update-pricing-info.component';
import { DeletePricingDetailOrProductComponent } from './delete-pricing-detail-or-product/delete-pricing-detail-or-product.component';



@NgModule({
  declarations: [InsertPricingInfoComponent,
                 UpdatePricingInfoComponent,
                  DeletePricingDetailOrProductComponent],
  imports: [
    CommonModule
  ]
})
export class PricingModule { }
