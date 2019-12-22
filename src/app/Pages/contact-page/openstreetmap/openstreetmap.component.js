import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import { defaults as defaultControls } from 'ol/control';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
//declare var ol: any;
let OpenstreetmapComponent = class OpenstreetmapComponent {
    //declare var ol: any;
    constructor() {
        this.tuljaLonLat = [73.200368, 22.323557];
        this.tuljaWebMercator = fromLonLat(this.tuljaLonLat);
        this.appId = 'yS5e8IeqESkx6s3SClWz';
        this.appCode = 'mG-pCucEPMhskDmEH1qu6w';
        this.hereLayers = [
            {
                base: 'base',
                type: 'maptile',
                scheme: 'normal.day',
                app_id: this.appId,
                app_code: this.appCode
            }
        ];
        this.urlTpl = 'https://{1-4}.{base}.maps.cit.api.here.com' +
            '/{type}/2.1/maptile/newest/{scheme}/{z}/{x}/{y}/256/png' +
            '?app_id={app_id}&app_code={app_code}';
        this.layerDesc = this.hereLayers[0];
        //latitude: number = 22.323557;
        //longitude: number = 73.200368;
        //map: any;
        //markerSource = new ol.source.Vector();
        //markerStyle = new ol.style.Style({
        //image: new ol.style.Icon( ({
        //  anchor: [0.5, 46],
        //  anchorXUnits: 'fraction',
        //  anchorYUnits: 'pixels',
        //  opacity: 0.75,
        //  src: 'https://openlayers.org/en/v4.6.4/examples/data/icon.png'
        // }))
        //});
        //ngOnInit() {
        // this.map = new ol.Map({
        //   target: 'map',
        //   layers: [
        //     new ol.layer.Tile({
        //      source: new ol.source.OSM()
        //    })
        //new ol.layer.Vector({
        //   source: this.markerSource,
        //   style: this.markerSource
        // })
        //  ],
        //   view: new ol.View({
        //     center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        //     zoom: 13.5
        //   })
        // });
        // }
    }
    ngAfterViewInit() {
        this.map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new XYZ({
                        //url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        url: this.createUrl(this.urlTpl, this.layerDesc),
                        attributions: 'Map Tiles &copy; ' + new Date().getFullYear() + ' ' +
                            '<a href="http://developer.here.com">HERE</a>'
                    })
                })
            ],
            view: new View({
                center: this.tuljaWebMercator,
                zoom: 15
            })
            //controls: defaultControls().extend([
            // new ZoomToExtent({
            //   extent: [
            //     813079.7791264898, 5929220.284081122,
            //848966.9639063801, 5936863.986909639
            //   ]
            //  })
            // ])
        });
    }
    createUrl(tpl, layerDesc) {
        return tpl
            .replace('{base}', layerDesc.base)
            .replace('{type}', layerDesc.type)
            .replace('{scheme}', layerDesc.scheme)
            .replace('{app_id}', layerDesc.app_id)
            .replace('{app_code}', layerDesc.app_code);
    }
};
OpenstreetmapComponent = tslib_1.__decorate([
    Component({
        selector: 'app-openstreetmap',
        templateUrl: './openstreetmap.component.html',
        styleUrls: ['./openstreetmap.component.scss']
    })
], OpenstreetmapComponent);
export { OpenstreetmapComponent };
//# sourceMappingURL=openstreetmap.component.js.map