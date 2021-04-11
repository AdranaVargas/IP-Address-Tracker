import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit, OnChanges {
  @Input() ipAddressData: any;
  public location: string;
  public postalCode: string;
  public ip: string;
  public timeZone: string;
  public isp: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.ipAddressData && this.ipAddressData) {
      this.location = `${this.ipAddressData.location.city},\n${this.ipAddressData.location.country}`;
      this.postalCode = this.ipAddressData.location.postalCode;
      this.ip = this.ipAddressData.ip;
      this.timeZone = this.ipAddressData.location.timezone;
      this.isp = this.ipAddressData.isp;
    }
  }
}
