import { Component,Input } from '@angular/core';
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
  @Input() title: string="";
  searchTerm: string="";

  constructor(private router: Router) {}

  onSearch() {}
}