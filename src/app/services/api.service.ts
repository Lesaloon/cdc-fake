import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    this.httpClient = new HttpClientService(http);
  }

  httpClient: HttpClientService;

  getAllUsers() {
    return this.httpClient.get('http://localhost:3000/api/user/all');
  }

  getAllProducts() {
    return this.httpClient.get('http://localhost:3000/api/product/all');
  }
}
