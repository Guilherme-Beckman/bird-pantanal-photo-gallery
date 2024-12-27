import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';
  constructor(private httpClient:HttpClient) { }

  login(email: string, password: string):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.httpClient.post<any>(this.apiUrl, {email, password, headers})
  }
  saveToken(token: string): void{
    localStorage.setItem("authToken",token);
  }
  getToken():string | null{
    return localStorage.getItem("authToken");
  }
  logout(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
