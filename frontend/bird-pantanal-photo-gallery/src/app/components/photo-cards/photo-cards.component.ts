import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BirdsService } from '../../services/bird/birds.service';
import { EditBirdButtonComponent } from '../edit-bird-button/edit-bird-button.component';
import { DeleteBirdButtonComponent } from '../delete-bird-button/delete-bird-button.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-photo-cards',
  imports: [CommonModule, EditBirdButtonComponent, DeleteBirdButtonComponent],
  templateUrl: './photo-cards.component.html',
  styleUrl: './photo-cards.component.scss'
})
export class PhotoCardsComponent {
  cards: any[] = [];
  visibleCards: any[] = [];
  isLoggedIn: boolean = false;
  constructor(private birdsService: BirdsService, private authService: AuthService){}
  ngOnInit(){
    this.isLoggedIn = this.authService.isAuthenticated();
    this.birdsService.getAllBirdsForCards().subscribe(data=>{
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
