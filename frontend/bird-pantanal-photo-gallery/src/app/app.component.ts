import { PhotoCardsComponent } from './components/photo-cards/photo-cards.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, PhotoCardsComponent, SummaryComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bird-pantanal-photo-gallery';
}
