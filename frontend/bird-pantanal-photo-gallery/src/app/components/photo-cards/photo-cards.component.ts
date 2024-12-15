import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-cards',
  imports: [CommonModule],
  templateUrl: './photo-cards.component.html',
  styleUrl: './photo-cards.component.scss'
})
export class PhotoCardsComponent {
  showMore = false;
  showMoreInfo(){
    this.showMore = !this.showMore;
  }
}
