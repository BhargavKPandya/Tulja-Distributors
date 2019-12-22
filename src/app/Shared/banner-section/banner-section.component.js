import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let BannerSectionComponent = class BannerSectionComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], BannerSectionComponent.prototype, "bannerHeaderText", void 0);
tslib_1.__decorate([
    Input()
], BannerSectionComponent.prototype, "bannerSubText", void 0);
tslib_1.__decorate([
    Input()
], BannerSectionComponent.prototype, "bannerBtn", void 0);
BannerSectionComponent = tslib_1.__decorate([
    Component({
        selector: 'app-banner-section',
        templateUrl: './banner-section.component.html',
        styleUrls: ['./banner-section.component.scss']
    })
], BannerSectionComponent);
export { BannerSectionComponent };
//# sourceMappingURL=banner-section.component.js.map