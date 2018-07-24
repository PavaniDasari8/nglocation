import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  location: any;
  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  getLocation() {
    const x = document.getElementById('demo');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
      setTimeout(() => {
        this.navpage();
      }, 500);
    } else {
      x.innerHTML = 'Geolocation is not supported by this browser.';
    }
  }
  showPosition(position) {
    let temparray = [];
    temparray.push(position.coords.latitude);
    temparray.push(position.coords.longitude);
    const x = document.getElementById('demo');
    x.innerHTML = 'Latitude: ' + position.coords.latitude +
      '<br>Longitude: ' + position.coords.longitude;
    const temp = JSON.stringify(temparray);
    localStorage.setItem('pos', temp);
  }

  navpage() {
    this.router.navigate(['/map']);
  }

}
