import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor(private http:HttpClient) { }

  public getIPAddress(ipAddress) {
    const url: string = 'https://geo.ipify.org/api/v1?apiKey=at_hw9LE5eYcOlS7BPgqGwDoWIveahQz';
    return this.http.get<any>(`${url}`, {params: {ipAddress}});
  }

  public getMyIpAddress() {
    return this.http.get("http://api.ipify.org/?format=json");
  }
}
