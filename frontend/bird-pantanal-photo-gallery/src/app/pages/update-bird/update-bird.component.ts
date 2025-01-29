import { Component } from '@angular/core';
import { MessageServiceService } from '../../services/message/message-service.service';
import { BirdsService } from '../../services/bird/birds.service';
import { BirdDTO } from '../../dto/bird.dto';
import { UpdateBirdFormComponent } from '../../components/update-bird-form/update-bird-form.component';
import { MessagesForRequestComponent } from '../../components/messages-for-request/messages-for-request.component';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-bird',
  imports: [UpdateBirdFormComponent, MessagesForRequestComponent, LoadingSpinnerComponent, CommonModule],
  templateUrl: './update-bird.component.html',
  styleUrl: './update-bird.component.scss'
})
export class UpdateBirdComponent {

   successMessage$;
      errorMessage$;
      isLoading = false;
    
      constructor(private messageService: MessageServiceService, private birdService:BirdsService, private router: Router) {    
        this.successMessage$ = this.messageService.sucessMessage$;
        this.errorMessage$ = this.messageService.errorMessage$;
      }
  
  onSubmit(eventData: { birdDTO: BirdDTO, formData: FormData, birdId: string}) {
    this.isLoading = true;
    const { birdDTO, formData, birdId } = eventData;
  this.birdService.updateBird(birdDTO, formData, birdId).subscribe({
    next: (response) => {
      this.messageService.setSuccessMessage('Pássaro atualizado com sucesso.', response);
      this.isLoading = false;
      setTimeout(() => {
        this.router.navigate(['/']); // Substitua pela rota desejada
      }, 500);
    },
    error: (error) => {
      this.messageService.setErrorMessage('Erro ao atualizar o pássaro.', error);
      this.isLoading = false;
    },
    complete: () => {
      console.log('Requisição completa.');
    }
  });
}
}
