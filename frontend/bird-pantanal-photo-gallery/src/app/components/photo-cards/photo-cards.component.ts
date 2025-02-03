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

  cards: any[] = [
    {
      id: 1,
      name: 'Arara Azul',
      description: 'A arara azul é uma das aves mais icônicas do Brasil, com suas penas vibrantes.',
      predominantColor: 'Azul',
      scientificName: 'Anodorhynchus hyacinthinus',
      imageUrl: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/arara-azul.jpg'
    },
    {
      id: 2,
      name: 'Tucano Toco',
      description: 'Tucano Toco é uma espécie conhecida por seu bico alaranjado e grande.',
      predominantColor: 'Preto e Branco',
      scientificName: 'Ramphastos toco',
      imageUrl: 'https://static4.depositphotos.com/1017908/357/i/450/depositphotos_3578766-stock-photo-toco-toucan.jpg'
    },
    {
      id: 3,
      name: 'Canário da Terra',
      description: 'O canário da terra é pequeno, de cor amarela intensa, comum em todo o Brasil.',
      predominantColor: 'Amarelo',
      scientificName: 'Sicalis flaveola',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/11/08/23/36/saffron-finch-3805432_1280.jpg'
    },
    {
      id: 4,
      name: 'Papagaio Verdadeiro',
      description: 'Papagaio conhecido pela habilidade de imitar sons e sua cor verde viva.',
      predominantColor: 'Verde',
      scientificName: 'Amazona aestiva',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/08/09/09/55/amazon-parrot-3594532_1280.jpg'
    },
    {
      id: 5,
      name: 'Sabiá Laranjeira',
      description: 'Ave símbolo do Brasil, famosa pelo canto melodioso.',
      predominantColor: 'Marrom e Laranja',
      scientificName: 'Turdus rufiventris',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/09/43/bird-691296_1280.jpg'
    },
    {
      id: 6,
      name: 'Gavião Real',
      description: 'Maior ave de rapina das Américas, conhecida também como Harpia.',
      predominantColor: 'Cinza e Preto',
      scientificName: 'Harpia harpyja',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/06/13/14/32/harpy-eagle-2390313_1280.jpg'
    },
    {
      id: 7,
      name: 'Curió',
      description: 'Famoso pelo seu canto, o curió é muito apreciado por criadores de aves.',
      predominantColor: 'Preto e Vermelho',
      scientificName: 'Sporophila angolensis',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/10/29/14/52/canary-4585796_1280.jpg'
    },
    {
      id: 8,
      name: 'Periquito Verde',
      description: 'Periquitos verdes são aves pequenas, sociáveis e muito comuns em todo o Brasil.',
      predominantColor: 'Verde',
      scientificName: 'Brotogeris chiriri',
      imageUrl: 'https://cdn.pixabay.com/photo/2014/11/03/11/08/parakeet-515234_1280.jpg'
    }
  ];

;
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
