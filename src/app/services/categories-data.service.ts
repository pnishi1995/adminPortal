import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class CategoriesDataService {
  caturl ="http://localhost:3000/categories";
  subCaturl ="http://localhost:3000/subcategories";
  subSubCatUrl="http://localhost:3000/subsubcategories"
  constructor(private _http:HttpClient) { }


// function to get data from category,sub catagory and sub sub categories

  getCatData(){
    console.log("got some data")
    return this._http.get(this.caturl)
  }
  getsubCatData(){
    console.log("got some data")
    return this._http.get(this.subCaturl)
  }

  getSubsubCatData(){
    console.log("got some data")
    return this._http.get(this.subSubCatUrl)
  }

// function to POST data from category,sub catagory and sub sub categories


  postCatData(data:any){
    // console.log('posted',data)
    return this._http.post(this.caturl,data);
  }

  postSubCatData(data:any){
    // console.log('posted',data)
    return this._http.post(this.subCaturl,data);
  }

  postSubSubCatData(data:any){
    // console.log('posted',data)
    return this._http.post(this.subSubCatUrl,data);
  }

// function to UPDATE/PUT data from category,sub catagory and sub sub categories
  
  putCatData(id:number,data:any){
    let putUrl = this.caturl+`/${id}`
    return this._http.put(putUrl,data);
  }

  putSubCatData(id:number,data:any){
    let putUrl = this.subCaturl+`/${id}`
    return this._http.put(putUrl,data);
  }

  putSubSubCatData(id:number,data:any){
    let putUrl = this.subSubCatUrl+`/${id}`
    return this._http.put(putUrl,data);
  }

// function to DELETE data from category,sub catagory and sub sub categories


  deleteCatData(id:number){
    let deleteUrl = this.caturl+`/${id}`
    console.log(deleteUrl);
    return this._http.delete(deleteUrl);
  }
  deleteSubCatData(id:number){
    let deleteUrl = this.subCaturl+`/${id}`
    console.log(deleteUrl);
    return this._http.delete(deleteUrl);
  }
  deleteSubSubCatData(id:number){
    let deleteUrl = this.subSubCatUrl+`/${id}`
    console.log(deleteUrl);
    return this._http.delete(deleteUrl);
  }
}
