import { PhotoCardsComponent } from './components/photo-cards/photo-cards.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SocialMediaSectionComponent } from './components/social-media-section/social-media-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, PhotoCardsComponent, SummaryComponent, SocialMediaSectionComponent, FooterComponent, LoginComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bird-pantanal-photo-gallery';
}
