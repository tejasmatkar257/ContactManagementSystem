import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000'; // Change to your JSON server URL

  constructor(private http: HttpClient) { }

  saveData(data: any) {
    return this.http.post(`${this.apiUrl}/people`, data);
  }
  getAllData() {
    return this.http.get(`${this.apiUrl}/people`);
  }
}
