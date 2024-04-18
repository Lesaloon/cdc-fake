import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(http: HttpClient) {
    this.http = http;
  }

  http: HttpClient;

  get(url: string) : Observable<any> {
    return this.http.get(url);
  }

  post(url: string, body: any) : Observable<any> {
    return this.http.post(url, body);
  }

  put(url: string, body: any) : Observable<any> {
    return this.http.put(url, body);
  }

  delete(url: string, body: any) : Observable<any> {
    return this.http.delete(url);
  }

  patch(url: string, body: any) : Observable<any> {
    return this.http.patch(url, body);
  }
}
