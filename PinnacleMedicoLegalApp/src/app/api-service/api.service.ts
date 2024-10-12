import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://192.168.3.41:5001/api';

  constructor(private http: HttpClient) {}

  createClient(clientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/client/create`, clientData);
  }

  updateClient(client: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/client/${client.id}`, client);
  }

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/client/clients`);
  }

  getClientById(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/client/${clientId}`);
  }

  deleteClient(clientId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/client/${clientId}`);
  }

  uploadClientFile(file: FormData, clientId: number): Observable<any> {
    const url = `${this.apiUrl}/file/upload?clientId=${clientId}`;
    return this.http.post(url, file);
  }
}
