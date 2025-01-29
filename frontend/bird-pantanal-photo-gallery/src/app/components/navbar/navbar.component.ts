import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = "";
  @Input() title: string="";
  constructor(private router: Router) {}
  onSearch() {
    this.search.emit(this.searchTerm); // Emit the search term
  }
}