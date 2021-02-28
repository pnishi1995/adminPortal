import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCatalogComponent } from './insertCatalogs/main-catalog/main-catalog.component';
import { SubCatalogComponent } from './insertCatalogs/sub-catalog/sub-catalog.component';
import { SubSubCatalogComponent } from './insertCatalogs/sub-sub-catalog/sub-sub-catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainCatalogComponent,
                SubCatalogComponent, 
                SubSubCatalogComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
                MainCatalogComponent,
                SubCatalogComponent, 
                SubSubCatalogComponent, ],
  
})
export class CatalogModule { }
