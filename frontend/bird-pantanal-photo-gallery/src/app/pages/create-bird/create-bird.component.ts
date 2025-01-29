import { Component } from '@angular/core';
import { CreateBirdFormComponent } from '../../components/create-bird-form/create-bird-form.component';
import { MessageServiceService } from '../../services/message/message-service.service';
import { Observable } from 'rxjs';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { MessagesForRequestComponent } from '../../components/messages-for-request/messages-for-request.component';
import { CommonModule } from '@angular/common';
import { BirdsService } from '../../services/bird/birds.service';
import { BirdDTO } from '../../dto/bird.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bird',
  templateUrl: './create-bird.component.html',
  styleUrls: ['./create-bird.component.scss'],
  imports:[CommonModule ,CreateBirdFormComponent, MessagesForRequestComponent, LoadingSpinnerComponent]
})
export class CreateBirdComponent {  
  successMessage$;
    errorMessage$;
    isLoading = false;
  
    constructor(private messageService: MessageServiceService, private birdService:BirdsService, private router: Router) {    
      this.successMessage$ = this.messageService.sucessMessage$;
      this.errorMessage$ = this.messageService.errorMessage$;
    }


    onSubmit(eventData: { birdDTO: BirdDTO, formData: FormData}) {
      console.log('Evento recebido:', eventData);
      const { birdDTO, formData } = eventData;
      this.isLoading = true;
      this.birdService.createBird(birdDTO, formData).subscribe
      ({
        next: (response) => {
          this.messageService.setSuccessMessage('Pássaro criado com sucesso:', response);
          this.isLoading = false;
          setTimeout(() => {
            this.router.navigate(['/']); // Substitua pela rota desejada
          }, 500);
        },
        error: (error) => {
          this.messageService.setErrorMessage('Erro ao criar o pássaro:', error);
          this.isLoading = false;
        },
        complete: () => {
          console.log('Requisição completa.');
        }
      });
    }
    }
