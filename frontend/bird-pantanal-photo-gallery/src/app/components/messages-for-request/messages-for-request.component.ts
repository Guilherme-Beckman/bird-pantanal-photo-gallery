import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages-for-request',
  imports: [CommonModule],
  templateUrl: './messages-for-request.component.html',
  styleUrl: './messages-for-request.component.scss'
})
export class MessagesForRequestComponent {
@Input() successMessage: string= '' ;    
@Input() errorMessage: string= '' ; 
}
