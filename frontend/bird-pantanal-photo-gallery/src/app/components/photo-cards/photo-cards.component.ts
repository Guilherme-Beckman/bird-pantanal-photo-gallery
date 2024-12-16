import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-cards',
  imports: [CommonModule],
  templateUrl: './photo-cards.component.html',
  styleUrl: './photo-cards.component.scss'
})
export class PhotoCardsComponent {
  cards = [
    { title: 'Card 1', image: 'assets/tuiuiu.jpg', alt: 'Description of the image', description: 'Description for Card 1', showMore: false },
    { title: 'Card 2', image: 'assets/tuiuiu.jpg', alt: 'Description of the image', description: 'Description for Card 2', showMore: false },
    { title: 'Card 3', image: 'assets/tuiuiu.jpg', alt: 'Description of the image', description: 'Description for Card 3', showMore: false },
    { title: 'Card 4', image: 'assets/tuiuiu.jpg', alt: 'Description of the image', description: 'Description for Card 4', showMore: false },
    { title: 'Card 5', image: 'assets/tuiuiu.jpg', alt: 'Description of the image', description: 'Description for Card 5', showMore: false },
    { title: 'Card 6', image: 'assets/tuiuiu.jpg', alt: 'Description of the image', description: 'Description for Card 6', showMore: false },
    { title: 'Card 7', image: 'assets/tuiuiu.jpg', alt: 'Description of the image', description: 'Description for Card 7', showMore: false },
    { title: 'Card 8', image: 'assets/tuiuiu.jpg', alt: 'Description of the image', description: 'Description for Card 8', showMore: false },
  ]
  visibleCards = this.cards.slice(0,6);

  showMoreInfo(index: number){
    this.visibleCards[index].showMore = !this.visibleCards[index].showMore;
  } 
  loadMore(){
    const nextCards = this.cards.slice(this.visibleCards.length, this.visibleCards.length + 6);
    this.visibleCards = [...this.visibleCards, ...nextCards]
  }
}
