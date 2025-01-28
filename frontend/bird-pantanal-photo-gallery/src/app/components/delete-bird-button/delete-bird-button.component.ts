import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BirdsService } from '../../services/bird/birds.service';

@Component({
  selector: 'app-delete-bird-button',
  imports: [],
  templateUrl: './delete-bird-button.component.html',
  styleUrl: './delete-bird-button.component.scss'
})
export class DeleteBirdButtonComponent {
  @Input() birdId: string = ''; 

  constructor(private birdsService: BirdsService, private router: Router) {}

  deleteBird() {
    this.birdsService.deleteBirdById(this.birdId).subscribe({
      next: () => {
        console.log('Bird deleted successfully');
        window.location.reload();
      },
      error: (err) => {
        console.error('Error deleting bird:', err);
      }
    });
  }
}  
