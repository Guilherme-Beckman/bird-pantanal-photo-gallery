import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {
  private apiUrl = 'http://localhost:8080/birds/all';
  constructor(private httpClient:HttpClient) { }

  getAllBirdsForCards(): Observable<any[]>{
    return this.httpClient.get<any>(this.apiUrl);
  }
}
