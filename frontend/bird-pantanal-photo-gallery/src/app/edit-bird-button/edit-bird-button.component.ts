import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-bird-button',
  imports: [],
  templateUrl: './edit-bird-button.component.html',
  styleUrl: './edit-bird-button.component.scss'
})
export class EditBirdButtonComponent {
  @Input() birdId: string = ''; 
  
  constructor(private route:Router){}
  goToUpdatePage(){
    this.route.navigate(['/update'], {queryParams: {id: this.birdId}});
  }
}
