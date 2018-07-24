import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app.routing';
import { DataComponent } from './data/data.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'Your_GoogleMap_Api_Key'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
