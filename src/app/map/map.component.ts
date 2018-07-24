import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  @ViewChild('gmap') gmapElement: any;
  constructor() {
    const location = JSON.parse(localStorage.getItem('pos'));
    this.lat = location[0];
    this.lng = location[1];
  }

  ngOnInit() {
  }

}
