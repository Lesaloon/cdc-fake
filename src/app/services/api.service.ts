import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';


const API_URL = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private HttpClientService: HttpClientService) {
  }

  getAllUsers() : Observable<User[]> {
    return this.HttpClientService.get(API_URL +'/user/all');
  }

  getUserById(id: number) {
    return this.HttpClientService.get(API_URL +'/user/' + id);
  }
  createUser(user: User) {
    return this.HttpClientService.post(API_URL +'/user', user);
  }
  deleteUser(id: number) {
    return this.HttpClientService.delete(API_URL +'/user/' + id);
  }

  getAllProducts() {
    return this.HttpClientService.get(API_URL +'/product/all');
  }
  getProductById(id: number) {
    return this.HttpClientService.get(API_URL +'/product/' + id);
  }
}
