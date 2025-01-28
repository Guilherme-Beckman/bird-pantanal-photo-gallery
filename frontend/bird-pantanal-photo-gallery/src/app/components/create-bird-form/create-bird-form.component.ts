import { Component, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BirdsService } from '../../services/bird/birds.service';
import { BirdDTO } from '../../dto/bird.dto';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-bird-form',
  imports: [ReactiveFormsModule],
  templateUrl: './create-bird-form.component.html',
  styleUrl: './create-bird-form.component.scss'
})
export class CreateBirdFormComponent {
  birdForm: FormGroup;
  birdDTO: BirdDTO = new BirdDTO('', '', '', '');
  selectedFile: File | null = null;
  @Output() onCreateSubmit = new EventEmitter<{birdDTO: BirdDTO, formData: FormData}>(); 
    constructor(private fb: FormBuilder){
      this.birdForm = this.fb.group({
        name:['',[Validators.required]],
        scientificName: ['', [Validators.required]],
        description: ['', [Validators.required]],
        predominantColor: ['', [Validators.required]],
        image: [null, [Validators.required]]
      })
    }
    onFileSelect(event: any){
      const file = event.target.files[0];
      if(file){
        this.selectedFile = file;
        this.birdForm.patchValue({image:file});
      }
    }
    onSubmit() {
      if (this.birdForm.valid) {
        const birdData = this.getBirdData();
        this.updateBirdDTO(birdData);
    
        const formData = new FormData();
        if (this.selectedFile) {
          formData.append('image', this.selectedFile, this.selectedFile.name);
        }
        console.log('Formulário de pássaro:', this.birdForm);
        this.onCreateSubmit.emit({ birdDTO: this.birdDTO, formData });
      }
        
    }
    private getBirdData() {
      return {
        name: this.birdForm.get('name')?.value,
        scientificName: this.birdForm.get('scientificName')?.value,
        description: this.birdForm.get('description')?.value,
        predominantColor: this.birdForm.get('predominantColor')?.value
      };
    }
    private updateBirdDTO(birdData: any) {
      this.birdDTO.name = birdData.name;
      this.birdDTO.scientificName = birdData.scientificName;
      this.birdDTO.description = birdData.description;
      this.birdDTO.predominantColor = birdData.predominantColor;
    }  
}
