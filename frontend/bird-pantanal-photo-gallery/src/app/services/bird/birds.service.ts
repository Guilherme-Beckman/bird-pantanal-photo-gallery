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
  createBird(birdDTO: BirdDTO,birdForm: FormData): Observable<any> {  
    birdForm.append(
      'bird',
      new Blob([JSON.stringify( birdDTO )], {
          type: 'application/json'
      })
      
  );
  return this.httpClient.post<any>(`${this.apiUrl}create`, birdForm/*, options*/);
  
  }

  updateBird(birdDTO: BirdDTO,birdForm: FormData, birdId: string): Observable<any> {  
    birdForm.append(
      'bird',
      new Blob([JSON.stringify( birdDTO )], {
          type: 'application/json'
      })
      
  );
  return this.httpClient.put<any>(`${this.apiUrl}update/${birdId}`, birdForm);
  
  }
  deleteBirdById(birdId: string){
    return this.httpClient.delete<any>(`${this.apiUrl}delete/${birdId}`);
  }  
}
