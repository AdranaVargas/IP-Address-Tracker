import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnChanges {
  @Output() onInputchange: EventEmitter<any> = new EventEmitter<any>();
  @Input() myIpAddress: any;
  public ipSearch: string;
  public ipView: any;
  public invalidIp: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  public changeValue(value: string) {
    this.ipSearch = value;
  }

  public sentValue() {
    if(this.ipSearch){
      this.validateIp(this.ipSearch);
    } 
  }

  public validateIp(ip) {
    const ipFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(ip.match(ipFormat)) {
      this.onInputchange.emit(this.ipSearch);
    } else {
      alert("You have entered an invalid IP address!");
    }
  }
}
