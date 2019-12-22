import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
declare var H: any;
@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit {

  private platform: any;
  private map: any;  
    @ViewChild('map',{static: false}) public mapElement: ElementRef;
    public ui: any;

     constructor() {
        
    }
    bubbleContent = "Tulja Distributor";
    addMarkerToGroup(group, coordinate, data: string) {
        var marker = new H.map.Marker(coordinate);
        // add custom data to the marker
        marker.setData(data);
        group.addObject(marker);
      }

    addInfoBubble (map) {
        var group = new H.map.Group();
      
        map.addObject(group);
      
        // add 'tap' event listener, that opens info bubble, to the group
        group.addEventListener('tap', (event)=> {
          // event target is the marker itself, group is a parent event target
          // for all objects that it contains
          let bubble =  new H.ui.InfoBubble(event.target.getGeometry(), {
            // read custom data
            content: event.target.getData()
            
            
          });
          // show info bubble
          //console.log("Map Content---" + event.target.getData());
          this.ui.addBubble(bubble);
        }, false);

        this.addMarkerToGroup(group, {lat:22.323557, lng:73.200368}, this.bubbleContent);
      }

     
    ngOnInit() { }

    
    public ngAfterViewInit() {

        
          

        this.platform = new H.service.Platform({
           // 'apikey': '{_gK_Jlaagm4kK6WA_oRNUl2ddXs11-7st8cFseEbB9Q}'
             'app_id': 'yS5e8IeqESkx6s3SClWz',
             'app_code': 'mG-pCucEPMhskDmEH1qu6w'
        });
        let defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 15,
                center: { lat: 22.323557, lng: 73.200368 },
                //pixelRatio: window.devicePixelRatio || 1
            }
        );
        let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
        this.ui = H.ui.UI.createDefault(this.map,defaultLayers);

        this.addInfoBubble(this.map);
        
    }

}
