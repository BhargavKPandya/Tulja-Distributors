import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
let HereMapComponent = class HereMapComponent {
    constructor() {
        this.platform = new H.service.Platform({
            "app_id": "yS5e8IeqESkx6s3SClWz",
            "app_code": "mG-pCucEPMhskDmEH1qu6w"
        });
    }
    ngOnInit() { }
    ngAfterViewInit() {
        let defaultLayers = this.platform.createDefaultLayers();
        let map = new H.Map(this.mapElement.nativeElement, defaultLayers.normal.map, {
            zoom: 15,
            center: { lat: 22.323557, lng: 73.200368 }
        });
        this.ui = H.ui.UI.createDefault(map, defaultLayers);
    }
};
tslib_1.__decorate([
    ViewChild('map', { static: false })
], HereMapComponent.prototype, "mapElement", void 0);
HereMapComponent = tslib_1.__decorate([
    Component({
        selector: 'app-here-map',
        templateUrl: './here-map.component.html',
        styleUrls: ['./here-map.component.scss']
    })
], HereMapComponent);
export { HereMapComponent };
//# sourceMappingURL=here-map.component.js.map