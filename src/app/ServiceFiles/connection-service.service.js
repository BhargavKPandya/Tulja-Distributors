import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let ConnectionServiceService = class ConnectionServiceService {
    constructor(_http) {
        this._http = _http;
        this.url = 'http://localhost:3000/send';
    }
    sendMessage(messageContent) {
        return this._http.post(this.url, JSON.stringify(messageContent), { headers: new HttpHeaders({ 'content-type': 'application/json' }), responseType: 'text' });
    }
};
ConnectionServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ConnectionServiceService);
export { ConnectionServiceService };
//# sourceMappingURL=connection-service.service.js.map