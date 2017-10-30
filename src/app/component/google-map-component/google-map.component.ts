import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AgmMap, AgmDataLayer } from '@agm/core';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.component.html',
  styleUrls: ['google-map.component.css'],
})
export class GoogleMapComponent implements AfterViewInit {

  @ViewChild('agmmap') private agmMap: AgmMap;

  title: string = 'My first AGM project';
  lat: number = 51.514022;
  lng: number = 31.321375;

  ngAfterViewInit() {
    this.agmMap.mapClick.subscribe((event: Event) => {
      console.log(Date.now() + `  lat: ${this.agmMap.latitude}, lng: ${this.agmMap.longitude}`);
    });
  }


}
