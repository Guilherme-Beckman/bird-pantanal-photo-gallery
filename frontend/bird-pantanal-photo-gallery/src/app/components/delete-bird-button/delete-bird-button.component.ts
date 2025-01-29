import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BirdsService } from '../../services/bird/birds.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-bird-button',
  imports: [CommonModule],
  templateUrl: './delete-bird-button.component.html',
  styleUrl: './delete-bird-button.component.scss'
})
export class DeleteBirdButtonComponent {
  @Input() birdId: string = ''; 
  @Input() isLoggedIn: boolean =false;
  @Output() deleteBirdEvent = new EventEmitter<boolean>();
  constructor(private birdsService: BirdsService) {}

  deleteBird() {
    this.deleteBirdEvent.emit(true);
    this.birdsService.deleteBirdById(this.birdId).subscribe({
      next: () => {
        this.deleteBirdEvent.emit(false);
        console.log('Bird deleted successfully');
        window.location.reload();
      },
      error: (err) => {
        this.deleteBirdEvent.emit(false);
        console.error('Error deleting bird:', err);
      }
    });
  }
}  
