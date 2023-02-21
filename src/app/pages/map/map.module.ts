import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MapRoutingModule} from './map-routing.module';
import {MapComponent} from './map.component';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {MAP_TOKEN} from "../../env";


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: MAP_TOKEN,
    })
  ]
})
export class MapModule {
}
