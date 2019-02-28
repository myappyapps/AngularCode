import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_BASE_URL = "https://jsonplaceholder.typicode.com";
  constructor(private httpClient: HttpClient) { }
  getContactList(){
    return this.httpClient.get(`${this.API_BASE_URL}/users`);
  }
}
