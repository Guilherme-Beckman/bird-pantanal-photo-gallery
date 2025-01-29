import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PhotoCardsComponent } from '../../components/photo-cards/photo-cards.component';
import { SummaryComponent } from '../../components/summary/summary.component';
import { SocialMediaSectionComponent } from '../../components/social-media-section/social-media-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-home',
  imports: [ NavbarComponent, PhotoCardsComponent, SummaryComponent, SocialMediaSectionComponent, FooterComponent, LoadingSpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchTerm: string = "";
  isLoading = false;
  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm; 
  }
  isLoadingByDeleteBird(event: boolean) {
    this.isLoading = event;
  }
  
}
