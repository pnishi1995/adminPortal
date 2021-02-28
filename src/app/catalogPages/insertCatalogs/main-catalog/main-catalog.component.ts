import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from "@angular/forms";
import { CategoriesDataService } from 'src/app/services/categories-data.service';

@Component({
  selector: 'app-main-catalog',
  templateUrl: './main-catalog.component.html',
  styleUrls: ['./main-catalog.component.scss']
})
export class MainCatalogComponent implements OnInit {
  
  availableCategories:any;

    listStatusYes:boolean=false;
    listStatusNo:boolean=false;
  checkoutForm = this.formBuilder.group({
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
    this._catDataService.getCatData().subscribe((res)=>{
      this.availableCategories = res;
      this.categoriesAvailability(this.availableCategories);
    })
  }
  onSubmit(){
    this._catDataService.postCatData(this.checkoutForm.value).subscribe((res)=>{
      this.availableCategories.push(res);
      
    })
    this.loadPageData();
  }


  deleteCateggory(id:number){
    this._catDataService.deleteCatData(id).subscribe((res)=>{
      console.log('deleted',res)
    })
    this.loadPageData();
  }
  updateCategory(id:number){
    alert("Please fill the form in Left and then click on update button of the category you want to update")
    this._catDataService.putCatData(id,this.checkoutForm.value).subscribe((res)=>{
      console.log("updated", res)
      this.loadPageData();
    })
  }
  
  categoriesAvailability(availableCategories:any){
    console.log(availableCategories.length);
    let noCategory:Array<any> =[];
    if(availableCategories.length){
      this.listStatusYes = true;
    }else{
      this.listStatusNo = true;
    }
    
  }
}
