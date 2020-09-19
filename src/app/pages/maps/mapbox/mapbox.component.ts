import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NbCardBodyComponent} from "@nebular/theme";
import mapboxgl from 'mapbox-gl';

// import 'mapbox-gl/dist/mapbox-gl.css';


@Component({
  selector: 'ngx-mapbox',
  styleUrls: ['./mapbox.component.scss'],
  templateUrl: './mapbox.component.html',
})
export class MapboxComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef;
  // @ViewChild(MapComponent) map: MapComponent;
  map: mapboxgl.Map;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  mapLoaded(map) {
    this.map = map;

    map.addSource('maine', {
      'type': 'geojson',
      'data': 'https://handsondataviz.org/data/ct-outline.geojson',
    });
    map.addLayer({
      'id': 'maine',
      'type': 'fill',
      'source': 'maine',
      'layout': {},
      'paint': {
        'fill-color': '#088',
        'fill-opacity': 0.8,
      },
    });
  }

  mapResize(body: NbCardBodyComponent) {
    console.info(body);
  }


  buildMap() {
    // this.map = new mapboxgl.Map({
    //   container: 'mapbox',
    //   style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    //   center: [-74.5, 40], // starting position [lng, lat]
    //   zoom: 9 // starting zoom
    // });
    // this.map.addControl(new mapboxgl.NavigationControl());
  }
}
