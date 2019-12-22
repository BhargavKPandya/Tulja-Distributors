import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
let ProductInfoService = class ProductInfoService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.productURL = "../../assets/products.json";
    }
    getProducts() {
        console.log("Service Log" + this._httpClient.get(this.productURL));
        return this._httpClient.get(this.productURL);
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
    ;
};
ProductInfoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductInfoService);
export { ProductInfoService };
//# sourceMappingURL=product-info.service.js.map