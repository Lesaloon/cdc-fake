import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private HttpClientService: HttpClientService) {

  }

  getAllUsers() : Observable<User[]> {
    return this.HttpClientService.get('http://localhost:3000/api/user/all');
  }

  getAllProducts() {
    return this.HttpClientService.get('http://localhost:3000/api/product/all');
  }
}
