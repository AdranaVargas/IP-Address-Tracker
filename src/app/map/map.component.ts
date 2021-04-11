import { Component, Input, OnInit, OnChanges, AfterViewInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { icon, Marker } from 'leaflet';
import * as L from 'leaflet';

const iconUrl = 'assets/images/icon-location.svg';
const iconDefault = icon({
  iconUrl
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() ipAddressData: any;
  private map: L.Map;

  @ViewChild('map', { static: true }) private mapContainer: ElementRef<HTMLElement>

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {   
    if (changes && changes.ipAddressData && this.ipAddressData) {
      if (this.map) this.map.remove();
     this.initMap();
    }   
  }

  ngAfterViewInit() {
    
  }

  ngOnDestroy() {
    this.map.remove();
  }

  public initMap() {
    this.map = new L.Map(this.mapContainer.nativeElement).setView([this.ipAddressData.location.lat, this.ipAddressData.location.lng], 13);

    let tileLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    this.map.zoomControl.remove();
    this.map.options.maxZoom = 18;
    this.map.options.minZoom = 6;
    this.map.options.wheelPxPerZoomLevel = 12;

    setTimeout(() => {
      this.map.invalidateSize();
    }, 800);

    if (this.ipAddressData) {
      let marker = L.marker([
        this.ipAddressData.location.lat,
        this.ipAddressData.location.lng,
      ]).addTo(this.map);
    }
  }
}
