import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
let ProductPageComponent = class ProductPageComponent {
    constructor(_productInfoService) {
        this._productInfoService = _productInfoService;
        this.waghbakriProductInfo = [];
        this.goodMorningProductInfo = [];
        this.miliProductInfo = [];
        this.navchetanProductInfo = [];
        this.brands = [];
        this.brandsDuplicate = [];
        this.brandTesting = [];
        this.subbrandTesting = [];
        this.subbrandTesting1 = [];
        this.loading = true;
        this.showmoreButton = 8;
        this.loadMore = false;
        this.showMoreProduct = false;
    }
    ngOnInit() {
        this.loadWaghbakriProducts();
        this.loadGoodMorningProducts();
        this.loadMiliProducts();
        this.loadNavchetanProducts();
        console.log("Main Data" + this.brandTesting);
    }
    // testing111(testvalue){
    //   return this._productInfoService.getProducts()
    //      .subscribe((data)=>{
    //        this.brands = data["brandName"];
    //        this.subbrandTesting = data[testvalue];
    //        this.subbrandTesting1 = this.subbrandTesting.map((prop)=>prop.productName);
    //       });
    //    }
    loadWaghbakriProducts() {
        this._productInfoService.getProducts().pipe(finalize(() => this.loading = false))
            .subscribe((data) => {
            this.brands = data["brandName"];
            this.brandsDuplicate = data["brandName"];
            let bha1 = JSON.stringify(this.brands);
            //console.log("Tired---" + JSON.stringify(this.brands));
            for (let prop in this.brandsDuplicate) {
                this.brandTesting.push(prop);
                this.subbrandTesting = this.brandsDuplicate[prop];
                console.log("Original Value--" + Object.entries(this.subbrandTesting));
                let intested;
                this.subbrandTesting.filter((prop) => {
                    {
                        intested = prop.productName;
                        console.log("1212" + prop.productName);
                    }
                });
                console.log("intested-------" + intested);
                console.log("filter Items--" + this.subbrandTesting1.push(this.subbrandTesting));
                console.log("wt is --" + Object.values(this.subbrandTesting));
                // this.subbrandTesting.push(this.subbrandTesting1);
                //console.log("Product Names in each Brand ---" + JSON.stringify(this.subbrandTesting));
                console.log(prop);
                // console.log("-------1111" + this.subbrandTesting.push(this.subbrandTesting1));
            }
            console.log("wt is 2222--" + this.subbrandTesting);
            //console.log("wt is 3333--" + this.subbrandTesting.push(this.subbrandTesting1));
            console.log("------" + this.brandTesting[0]);
            this.waghbakriProductInfo = this.brands["WaghBakri"];
            let test1;
            console.log("Raw JSON data " + data["brandName"]);
            console.log("Raw JSON Brand data " + this.brands["brandName"]);
            console.log(this.waghbakriProductInfo.length);
            console.log(this.waghbakriProductInfo = this.brands["WaghBakri"]);
            console.log("Test 2" + data.hasOwnProperty('brandName'));
            console.log("Test 2--" + this.waghbakriProductInfo.filter(waghbakriProductInfo => { waghbakriProductInfo.productType === 'Instant'; }));
        });
    }
    loadGoodMorningProducts() {
        this._productInfoService.getProducts()
            .subscribe((data) => {
            let goodMorningArray = data["brandName"];
            this.goodMorningProductInfo = goodMorningArray["Good Morning"];
            console.log(this.goodMorningProductInfo = goodMorningArray["Good Morning"]);
        });
    }
    loadMiliProducts() {
        this._productInfoService.getProducts()
            .subscribe((data) => {
            let miliArray = data["brandName"];
            this.miliProductInfo = miliArray["Mili"];
            console.log(this.miliProductInfo = miliArray["Mili"]);
        });
    }
    loadNavchetanProducts() {
        this._productInfoService.getProducts()
            .subscribe((data) => {
            let navchetanArray = data["brandName"];
            this.navchetanProductInfo = navchetanArray["Navchetan"];
            console.log(this.navchetanProductInfo = navchetanArray["Navchetan"]);
        });
    }
    viewMoreProducts() {
        this.showmoreButton = 35;
        this.loadMore = true;
        this.showMoreProduct = true;
    }
};
ProductPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-page',
        templateUrl: './product-page.component.html',
        styleUrls: ['./product-page.component.scss']
    })
], ProductPageComponent);
export { ProductPageComponent };
//# sourceMappingURL=product-page.component.js.map