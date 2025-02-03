import { CommonModule } from '@angular/common';
import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { BirdsService } from '../../services/bird/birds.service';
import { EditBirdButtonComponent } from '../edit-bird-button/edit-bird-button.component';
import { DeleteBirdButtonComponent } from '../delete-bird-button/delete-bird-button.component';
import { AuthService } from '../../services/auth/auth.service';
import { EventEmitter } from '@angular/core';
import { CardDownloadService } from '../../services/card-download/card-download.service';

@Component({
  selector: 'app-photo-cards',
  imports: [CommonModule, EditBirdButtonComponent, DeleteBirdButtonComponent],
  templateUrl: './photo-cards.component.html',
  styleUrl: './photo-cards.component.scss'
})
export class PhotoCardsComponent {
  @Input() searchTerm: string = ""; 
  @Output() isLoadingEvent = new EventEmitter<boolean>();

  cards: any[] = [];
  visibleCards: any[] = [];
  isLoggedIn: boolean = false;
  constructor(private birdsService: BirdsService, private authService: AuthService, private cardDownloadService: CardDownloadService){}
  ngOnInit(){
    this.isLoggedIn = this.authService.isAuthenticated();
    this.birdsService.getAllBirdsForCards().subscribe(data=>{
      this.cards = data;
      this.visibleCards = this.cards.slice(0,6);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchTerm']) {
      this.filterCards(this.searchTerm); 
    }
  }
  showMoreInfo(index: number){
      this.visibleCards[index].showMore = !this.visibleCards[index].showMore;
  } 
  loadMore(){
    const nextCards = this.cards.slice(this.visibleCards.length, this.visibleCards.length + 6);
    this.visibleCards = [...this.visibleCards, ...nextCards]
  }
  filterCards(searchTerm: string) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase(); 
    this.visibleCards = this.cards.filter(card => 
      card.name.toLowerCase().includes(lowerCaseSearchTerm) || 
      card.description.toLowerCase().includes(lowerCaseSearchTerm) ||
      card.predominantColor.toLowerCase().includes(lowerCaseSearchTerm) ||
      card.scientificName.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
  deleteBird(event: boolean){
    const boolean = event;
    this.isLoadingEvent.emit(event);
  }
  downloadCard(cardData: any): void {
    console.log(cardData);
    const htmlContent = this.cardDownloadService.generateCardHTML(cardData);
    const filename = `${cardData.name.replace(/\s+/g, '_')}_card.html`;
    this.cardDownloadService.downloadFile(htmlContent, filename);
  }
}
