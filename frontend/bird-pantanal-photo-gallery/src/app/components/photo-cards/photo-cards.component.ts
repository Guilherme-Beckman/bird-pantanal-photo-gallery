import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsService } from '../../services/cards/cards.service';

@Component({
  selector: 'app-photo-cards',
  imports: [CommonModule],
  templateUrl: './photo-cards.component.html',
  styleUrl: './photo-cards.component.scss'
})
export class PhotoCardsComponent {
  cards: any[] = [];
  visibleCards: any[] = [];
  constructor(private cardService: CardsService){}
  ngOnInit(){
    this.cardService.getAllBirdsForCards().subscribe(data=>{
      this.cards = data;
      this.visibleCards = this.cards.slice(0,6);
    });
  }
  showMoreInfo(index: number){
    this.visibleCards[index].showMore = !this.visibleCards[index].showMore;
  } 
  loadMore(){
    const nextCards = this.cards.slice(this.visibleCards.length, this.visibleCards.length + 6);
    this.visibleCards = [...this.visibleCards, ...nextCards]
  }
}
