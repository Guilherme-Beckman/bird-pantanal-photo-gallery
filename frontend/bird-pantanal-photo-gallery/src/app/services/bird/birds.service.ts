import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BirdDTO } from '../../dto/bird.dto';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {
  private apiUrl = 'http://localhost:8080/birds/';
  constructor(private httpClient:HttpClient) { }

  getAllBirdsForCards(): Observable<any[]>{
    return this.httpClient.get<any>(this.apiUrl+"all");
  }
  createBird(birdDTO: BirdDTO,birdForm: FormData): void {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + authToken);
    const options = { headers: headers };
    birdForm.append(
      'bird',
      new Blob([JSON.stringify( birdDTO )], {
          type: 'application/json'
      })
      
  );
  this.httpClient.post<any>(`${this.apiUrl}create`, birdForm, options).subscribe({
    next: (response) => {
      console.log('Pássaro criado com sucesso:', response);
    },
    error: (error) => {
      console.error('Erro ao criar o pássaro:', error);
    },
    complete: () => {
      console.log('Requisição completa.');
    }
  });
  
  }
}
