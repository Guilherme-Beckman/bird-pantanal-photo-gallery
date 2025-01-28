import { Component } from '@angular/core';
import { CreateBirdFormComponent } from '../../components/create-bird-form/create-bird-form.component';
import { MessageServiceService } from '../../services/message/message-service.service';
import { Observable } from 'rxjs';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { MessagesForRequestComponent } from '../../components/messages-for-request/messages-for-request.component';
import { CommonModule } from '@angular/common';

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
  
    constructor(private messageService: MessageServiceService) {
      this.successMessage$ = this.messageService.sucessMessage$;
      this.errorMessage$ = this.messageService.errorMessage$;
    }
  
    sucessMessage(event: Observable<any>): void {
      this.isLoading = true;
      
      
    }
    errorMessage(event: Observable<any>): void {
      this.isLoading = true;
     
      
    }
}
