import {  } from './../../dto/bird.dto';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BirdDTO } from '../../dto/bird.dto';
import { ActivatedRoute } from '@angular/router';
import { BirdsService } from '../../services/bird/birds.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-update-bird',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './update-bird.component.html',
  styleUrl: './update-bird.component.scss'
})
export class UpdateBirdComponent {
  birdForm: FormGroup;
  selectedFile: File | null = null;
  birdDTO: BirdDTO = new BirdDTO ('','','','');
  birdId!: string;
  bird: any;

  constructor(private fb:FormBuilder, private route: ActivatedRoute, private birdService: BirdsService){
    this.birdForm = this.fb.group({
      name:[''],
      scientificName: [''],
      description: [''],
      predominantColor: [''],
      image: [null]
    })
  }
ngOnInit():void{
  this.route.queryParams.subscribe((params) => {
    this.birdId = params['id'];
    console.log('ID do parâmetro:', this.birdId);
  });
  this.bird = this.birdService.getBirdById(this.birdId).subscribe(data=>{
    this.bird =data;
  });
}
onSubmit(){
    const birdData = this.getBirdData();
    this.updateBirdDTO(birdData);

    const formData = new FormData();
    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    this.birdService.updateBird(this.birdDTO, formData, this.birdId);
}
onFileSelect(event: any){
  const file = event.target.files[0];
  if(file){
    this.selectedFile = file;
    this.birdForm.patchValue({image:file});
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
