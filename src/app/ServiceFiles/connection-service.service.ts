import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {

  url: string = 'http://localhost:3000/send';
  constructor(private _http: HttpClient) { }

  sendMessage(messageContent: any) {
    return this._http.post(this.url,
      JSON.stringify(messageContent),
      { headers: new HttpHeaders({ 'content-type': 'application/json'}), responseType: 'text'}
      );
  }
}
