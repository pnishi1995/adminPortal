import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,FormControl } from "@angular/forms";
import { CategoriesDataService } from 'src/app/services/categories-data.service';

@Component({
  selector: 'app-sub-catalog',
  templateUrl: './sub-catalog.component.html',
  styleUrls: ['./sub-catalog.component.scss']
})
export class SubCatalogComponent implements OnInit {


  availableCategories:any;

    listStatusYes:boolean=false;
    listStatusNo:boolean=false;
  checkoutForm = this.formBuilder.group({
    sub_category_name:'',
    category_name: '',
    user_name: '',
    user_id:'',
    description:'',
    date:''
  });
  constructor(private formBuilder: FormBuilder,private _catDataService:CategoriesDataService) { }

  ngOnInit(): void {
    this.loadPageData();
  }

  loadPageData(){
    this._catDataService.getsubCatData().subscribe((res)=>{
      this.availableCategories = res;
      this.categoriesAvailability(this.availableCategories);
    })
  }
  onSubmit(){
    this._catDataService.postSubCatData(this.checkoutForm.value).subscribe((res)=>{
      this.availableCategories.push(res);
      
    })
    this.loadPageData();
  }


  deleteCateggory(id:number){
    this._catDataService.deleteSubCatData(id).subscribe((res)=>{
      console.log('deleted',res)
    })
    this.loadPageData();
  }
  updateCategory(id:number){
    alert("Please fill the form in Left and then click on update button of the category you want to update")
    this._catDataService.putSubCatData(id,this.checkoutForm.value).subscribe((res)=>{
      console.log("updated", res)
      this.loadPageData();
    })
  }
  
  categoriesAvailability(availableCategories:any){
    console.log(availableCategories.length);
    if(availableCategories.length){
      this.listStatusYes = true;
    }else{
      this.listStatusNo = true;
    }
    
  }

}
