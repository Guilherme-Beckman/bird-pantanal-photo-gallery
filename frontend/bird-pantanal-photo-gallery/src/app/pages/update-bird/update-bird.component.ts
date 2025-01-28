import { Component } from '@angular/core';
import { MessageServiceService } from '../../services/message/message-service.service';
import { BirdsService } from '../../services/bird/birds.service';
import { BirdDTO } from '../../dto/bird.dto';
import { UpdateBirdFormComponent } from '../../components/update-bird-form/update-bird-form.component';
import { MessagesForRequestComponent } from '../../components/messages-for-request/messages-for-request.component';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

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
    
      constructor(private messageService: MessageServiceService, private birdService:BirdsService) {
        this.successMessage$ = this.messageService.sucessMessage$;
        this.errorMessage$ = this.messageService.errorMessage$;
      }
  
  onSubmit(eventData: { birdDTO: BirdDTO, formData: FormData, birdId: string}) {
    const { birdDTO, formData, birdId } = eventData;
  this.birdService.updateBird(birdDTO, formData, birdId).subscribe({
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
