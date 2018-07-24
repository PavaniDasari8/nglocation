import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { DataComponent } from './data/data.component';


const routes: Routes = [
    { path: '', redirectTo: 'data', pathMatch: 'full' },
    { path: 'map', component: MapComponent },
    { path: 'data', component: DataComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
