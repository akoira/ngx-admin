import {AfterViewInit, Component, OnInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


@Component({
  selector: 'ngx-mapbox',
  styleUrls: ['./mapbox.component.scss'],
  templateUrl:  './mapbox.component.html',
})
export class MapboxComponent implements OnInit, AfterViewInit {
  // private map: mapboxgl.Map;
  // constructor() {
  //   mapboxgl.accessToken = 'pk.eyJ1IjoicGVydm9saW5lciIsImEiOiJjazlncGxkYTcwMHZhM21xZmZxcW93ZDk1In0.-ZYY09wPnstNElzXbmqnOg';
  // }

  ngOnInit(): void {
    // setTimeout(() => this.buildMap(), 1000);
  }

  ngAfterViewInit() {
    // setTimeout(() => this.map.invalidateSize(), 1000);
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
