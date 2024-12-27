import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-bird',
  templateUrl: './create-bird.component.html',
  styleUrls: ['./create-bird.component.scss'],
  imports:[FormsModule, ReactiveFormsModule]
})
export class CreateBirdComponent {
  birdForm: FormGroup;
  selectedFile: File | null = null; 

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
  onSubmit(){
    if(this.birdForm.valid){
      const formData = new FormData();
      formData.append('name',this.birdForm.get('name')?.value);
      formData.append('scientificName', this.birdForm.get('scientificName')?.value);
      formData.append('description', this.birdForm.get('description')?.value);
      formData.append('predominantColor', this.birdForm.get('predominantColor')?.value);
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }
    }
  }
}
