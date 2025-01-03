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
  
  getBirdById(id: string){
    return this.httpClient.get<any>(this.apiUrl + id);
  }    
  getAllBirdsForCards(): Observable<any[]>{
    return this.httpClient.get<any>(this.apiUrl+"all");
  }
  createBird(birdDTO: BirdDTO,birdForm: FormData): void {
    birdForm.append(
      'bird',
      new Blob([JSON.stringify( birdDTO )], {
          type: 'application/json'
      })
      
  );
  this.httpClient.post<any>(`${this.apiUrl}create`, birdForm/*, options*/).subscribe({
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

  updateBird(birdDTO: BirdDTO,birdForm: FormData, birdId: string): void {
    birdForm.append(
      'bird',
      new Blob([JSON.stringify( birdDTO )], {
          type: 'application/json'
      })
      
  );
  this.httpClient.put<any>(`${this.apiUrl}update/${birdId}`, birdForm).subscribe({
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
