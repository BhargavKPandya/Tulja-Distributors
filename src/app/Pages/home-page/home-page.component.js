import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { faSitemap, faTruckLoading, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
let HomePageComponent = class HomePageComponent {
    constructor(document) {
        this.faSitemap = faSitemap;
        this.faTruckLoading = faTruckLoading;
        this.faShippingFast = faShippingFast;
        this.homePageBannerHeaderText = "Authorised Distributor Of Waghbakri Products In Vadodara";
        this.homePageBannerSubText = "Replenish seasons may male hath fruit beast were seas saw you arrie said man beast whales his void unto last session for bite. Set have great you'll male grass yielding yielding man";
        this.homePageBannerBtnText = "View Products";
    }
    ngOnInit() {
    }
};
HomePageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home-page',
        templateUrl: './home-page.component.html',
        styleUrls: ['./home-page.component.scss']
    }),
    tslib_1.__param(0, Inject(DOCUMENT))
], HomePageComponent);
export { HomePageComponent };
//# sourceMappingURL=home-page.component.js.map