import { Component, OnInit } from '@angular/core';
import { ProductInfoService } from '../../ServiceFiles/product-info.service';
import { Product } from './Product';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';
import { debounceTime, finalize } from 'rxjs/operators';
import { all } from 'q';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  productBannerHeaderText: string = "Explore wide range of Waghbakri Products";
  productBannerSubText: string = "Waghbakri has so many different tea products which are sold under different brand name. They are mainly WaghBakri, GoodMornig, Mili and Navchetan. You will find all products under this page."
  productPageBannerImage: string = "../../../assets/Product-temp-Banner.png";
  waghbakriProductInfo = [];
  goodMorningProductInfo = [];
  miliProductInfo = [];
  navchetanProductInfo = [];

  brands = [];
  brandsDuplicate = []
  brandTesting = [];
  subbrandTesting = [];
  subbrandTesting1 = [];
  result : string[] = [];
  result1 : string[] = [];
 loading = true;
  showmoreButton :number = 8;
  loadMore = false;
  showMoreProduct = false;


  
  constructor(private _productInfoService: ProductInfoService) { }

  ngOnInit() {
    this.loadWaghbakriProducts();
    this.loadGoodMorningProducts();
    this.loadMiliProducts();
    this.loadNavchetanProducts();
    this.testing222();
    console.log("Main Data" + this.brandTesting);
  }

  testing222(){
    return this._productInfoService.getProducts()
       .subscribe((data)=>{
         this.brandsDuplicate = data["brandName"];
         for (let prop in this.brandsDuplicate) {
           this.brandTesting.push(prop);
         }
        });}

   testing111(brandname){
     return this._productInfoService.getProducts()
        .subscribe((data)=>{
          console.log("Tired log..." + Object.keys(data));
          this.brandsDuplicate = data["brandName"];
          console.log("testvalue" + brandname);
          console.log("Object Value---" + Object.keys(this.brandsDuplicate));
         
            this.subbrandTesting1 = this.brandsDuplicate[brandname];
            console.log("Finally worked---" + this.subbrandTesting1);
           // this.subbrandTesting1.filter((brandname) => 
            //  { 
                
             //   let xyz1 = brandname.productName; 
                
             //   this.result1.push(xyz1); 
            //    console.log("Inside Filter---"+brandname.productName);
            //  });
          
          
  });

      
      }
 


  loadWaghbakriProducts(){
    this._productInfoService.getProducts().pipe(finalize(() => this.loading = false))
        .subscribe((data)=>{
          this.brands = data["brandName"];
          this.brandsDuplicate = data["brandName"];
          //let bha1 = JSON.stringify(this.brands);
          //console.log("Tired---" + JSON.stringify(this.brands));
          //for (let prop in this.brandsDuplicate) {
          //  this.brandTesting.push(prop);
         //   this.subbrandTesting = this.brandsDuplicate[prop];
            
           
          //  this.subbrandTesting.filter((prop) => {
          //    { let xyz = prop.productName; 
          //      this.result.push(xyz); 
          //      console.log("Inside Filter---"+prop.productName);
          //    }
           // });
           // console.log("intested-------" + this.result)
           // console.log("filter Items--" + this.subbrandTesting1.push(this.subbrandTesting));
           // console.log("wt is --" + Object.values(this.subbrandTesting));
           // this.subbrandTesting.push(this.subbrandTesting1);
           //console.log("Product Names in each Brand ---" + JSON.stringify(this.subbrandTesting));
          //  console.log(prop);
           // console.log("-------1111" + this.subbrandTesting.push(this.subbrandTesting1));
       // }
        //console.log("intestedOUTSIDE-------" + this.result)
        //console.log("wt is 2222--" + this.subbrandTesting);
        //console.log("wt is 3333--" + this.subbrandTesting.push(this.subbrandTesting1));
        
        
        
         // console.log("------"+ this.brandTesting[0]);
          this.waghbakriProductInfo = this.brands["WaghBakri"];
          
          let test1: [];
          console.log("Raw JSON data " + data["brandName"]);
          console.log("Raw JSON Brand data " + this.brands["brandName"]);
          console.log(this.waghbakriProductInfo.length)
          console.log(this.waghbakriProductInfo = this.brands["WaghBakri"]);
          console.log("Test 2" + data.hasOwnProperty('brandName'));
          console.log("Test 2--" + this.waghbakriProductInfo.filter(waghbakriProductInfo=> {waghbakriProductInfo.productType === 'Instant'}));
        });
  }

  loadGoodMorningProducts(){
    this._productInfoService.getProducts()
        .subscribe((data)=>{
          let goodMorningArray : [] = data["brandName"];
          this.goodMorningProductInfo = goodMorningArray["Good Morning"];
          console.log(this.goodMorningProductInfo = goodMorningArray["Good Morning"]);
          
        });
  }

  loadMiliProducts(){
    this._productInfoService.getProducts()
        .subscribe((data)=>{
          let miliArray : [] = data["brandName"];
          this.miliProductInfo = miliArray["Mili"];
          console.log(this.miliProductInfo = miliArray["Mili"]);
        });
  }

  loadNavchetanProducts(){
    this._productInfoService.getProducts()
        .subscribe((data)=>{
          let navchetanArray : [] = data["brandName"];
          this.navchetanProductInfo = navchetanArray["Navchetan"];
          console.log(this.navchetanProductInfo = navchetanArray["Navchetan"]);
        });
  }

  viewMoreProducts(){
    
      this.showmoreButton = 35;
      this.loadMore = true;
      this.showMoreProduct = true;
  }

}
