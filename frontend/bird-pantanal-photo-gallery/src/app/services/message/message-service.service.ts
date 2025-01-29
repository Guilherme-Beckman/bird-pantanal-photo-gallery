import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private successMessageSource = new BehaviorSubject<string>('');
  private errorMessageSource = new BehaviorSubject<string>('');
  sucessMessage$ = this.successMessageSource.asObservable();
  errorMessage$ = this.errorMessageSource.asObservable();

  setSuccessMessage(message: string, next: any): void {
    const nextMessage = next?.title ? next.title : 'Informação não disponível';
    this.successMessageSource.next(message + ' ' + nextMessage);
    this.clearMessagesAfterDelay();
  }
  
  setErrorMessage(message: string, error: any): void {
    const errorMessage = error?.error?.title ? error.error.title : 'Erro desconhecido';
    this.errorMessageSource.next(message + ' ' + errorMessage);
    this.clearMessagesAfterDelay();
  }
  
  private clearMessagesAfterDelay() {
    setTimeout(() => {
      this.successMessageSource.next('');
      this.errorMessageSource.next('');
    }, 2000);
  }

}
