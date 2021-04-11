import { Component, OnInit } from '@angular/core';
import { IpServiceService } from './ip-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ipAddressData: Observable<any>;
  public myIpAddress: any;
  public ipSearchedData:  any;
  public errorMsg: string;

  constructor(
    private ipService: IpServiceService    
    ) { }

  ngOnInit() {
    this.getIP();
  }

  public searchValue(value) {
    this.ipAddressData = this.ipService.getIPAddress(value);
  }

  public getIP() {
    this.ipService.getMyIpAddress().subscribe((res:any)=>{
      this.ipAddressData = this.ipService.getIPAddress(res.ip);
      this.myIpAddress = res;  
    });  
  }  

}
