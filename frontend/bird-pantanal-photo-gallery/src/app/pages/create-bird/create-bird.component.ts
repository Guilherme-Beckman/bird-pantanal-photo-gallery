import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BirdsService } from '../../services/bird/birds.service';
import { BirdDTO } from '../../dto/bird.dto';

@Component({
  selector: 'app-create-bird',
  templateUrl: './create-bird.component.html',
  styleUrls: ['./create-bird.component.scss'],
  imports:[FormsModule, ReactiveFormsModule]
})
export class CreateBirdComponent {
  birdForm: FormGroup;
  selectedFile: File | null = null; 
  birdDTO: BirdDTO = new BirdDTO('', '', '', '');

  constructor(private fb: FormBuilder, private birdService:BirdsService){
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
  
      this.birdService.createBird(this.birdDTO, formData);
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
