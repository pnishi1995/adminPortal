import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCatalogComponent } from './catalogPages/insertCatalogs/main-catalog/main-catalog.component';
import { SubCatalogComponent } from './catalogPages/insertCatalogs/sub-catalog/sub-catalog.component';
import { SubSubCatalogComponent } from './catalogPages/insertCatalogs/sub-sub-catalog/sub-sub-catalog.component';

const routes: Routes = [
  {
    path:'',redirectTo:'categories',pathMatch:'full'
  },
  {
    path:'categories',component:MainCatalogComponent
  },
  {
    path:'subcategories',component:SubCatalogComponent
  },
  {
    path:'subSubcategories',component:SubSubCatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
