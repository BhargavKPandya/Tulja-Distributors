import { AfterViewInit, Component, ViewChild, ElementRef, OnInit } from '@angular/core';
//import { defaults as defaultControls } from 'ol/control';

import Map from 'ol/Map';
import View from 'ol/View';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Overlay from 'ol/Overlay';
import 'ol/ol.css';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';
import ZoomToExtent from 'ol/control/ZoomToExtent';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { EventEmitter } from 'events';
declare var $: any;

@Component({
  selector: 'app-openstreetmap',
  templateUrl: './openstreetmap.component.html',
  styleUrls: ['./openstreetmap.component.scss']
})
export class OpenstreetmapComponent implements AfterViewInit, OnInit {
  ngOnInit() {
    
  }
  
  map: Map;
  tuljaLonLat = [73.200368, 22.323557];
  //vectorSource: VectorSource;
  //vectorLayer: VectorLayer;
  //marker: Feature;
  tuljaWebMercator = fromLonLat(this.tuljaLonLat);
  @ViewChild('popup', {static: false}) popupItem: ElementRef;
  @ViewChild('popupContent', {static: false}) popupContent: ElementRef;
  @ViewChild('closer', {static: false}) popupCloser: ElementRef;
  @ViewChild('marker', {static: false}) markerContent: ElementRef;
//   marker = new Feature({
//     geometry: new Point(fromLonLat(this.tuljaLonLat))
// });

iconFeature = new Feature({
  geometry: new Point(this.tuljaLonLat),
  name: 'Tulja Distibuteros',
  population: 4000,
  rainfall: 500
});

iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
  })
});

//iconFeature.setStyle(iconStyle);


marker = new Feature({
  // position: fromLonLat(this.tuljaLonLat),
  // positioning: 'center-center',
  // element: this.markerContent,
  // stopEvent: false,
  geometry: new Point(fromLonLat(this.tuljaLonLat)),
  name: 'Tulja Distributors'
});

markerStyle = new Style({
    image: new Icon( ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 1,
    src: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    zIndex: 999
  }))
 });

vectorSource = new VectorSource({
    features: [this.iconFeature]
});

vectorLayer = new VectorLayer({
  source: this.vectorSource,
  style: this.markerStyle,
  zindex: 1
});

//container = document.getElementById('popup');
container1 = true;
//content = document.getElementById('popup-content');
//vcloser = document.getElementById('popup-closer');


popupOverlay = new Overlay({
  element: this.popupItem,
  positioning: 'bottom-center',
  stopEvent: false
  //offset: [9,9]
});


appId = 'yS5e8IeqESkx6s3SClWz';
appCode = 'mG-pCucEPMhskDmEH1qu6w';
hereLayers = [
  {
    base: 'base',
    type: 'maptile',
    scheme: 'normal.day',
    app_id: this.appId,
    app_code: this.appCode
  }]
urlTpl = 'https://{1-4}.{base}.maps.cit.api.here.com' +
  '/{type}/2.1/maptile/newest/{scheme}/{z}/{x}/{y}/256/png' +
  '?app_id={app_id}&app_code={app_code}';

  layerDesc = this.hereLayers[0];
 
  click1 () {
      
    //let coordinate = event.coordinate;
    this.container1 = false;
    this.popupContent.nativeElement.innerHTML ="Testing Popup";
    this.popupOverlay.setPosition(this.tuljaLonLat);
}
click (event) {
var feature = this.map.forEachFeatureAtPixel(event.pixel,
  function(feature) {
    return feature;
  });
if (feature) {
  var coordinates = feature.getGeometry().getCoordinates();
  this.popupOverlay.setPosition(coordinates);
  $(this.popupContent).popover({
    placement: 'top',
    html: true,
    content: feature.get('name')
  });
  $(this.popupContent).popover('show');
} else {
  $(this.popupContent).popover('destroy');
}
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
    this.map.addOverlay(this.popupOverlay).on(this.click1());
    this.map.addLayer(this.vectorLayer);
    
    
    //this.marker.on(this.singleclick());
    
  }
     
    
  
  
  createUrl(tpl, layerDesc) {
    return tpl
      .replace('{base}', layerDesc.base)
      .replace('{type}', layerDesc.type)
      .replace('{scheme}', layerDesc.scheme)
      .replace('{app_id}', layerDesc.app_id)
      .replace('{app_code}', layerDesc.app_code);
  }

}
