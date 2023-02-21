import {Component, OnInit} from '@angular/core';
import {MAP_CENTER} from "../../env";
import {Map} from "mapbox-gl";
import {PigService} from "../../services/pig/pig.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: Map;
  mapCenter = MAP_CENTER;
  reports;

  constructor(private pigService: PigService) {
  }

  ngOnInit(): void {
    this.reports = this.pigService.reports;
  }

  loadMap(map) {
    this.map = map
  }
}
