
export class BirdDTO {
    name: string;
    scientificName: string;
    description: string;
    predominantColor: string;
  
    constructor(
      name: string,
      scientificName: string,
      description: string,
      predominantColor: string
    ) {
      this.name = name;
      this.scientificName = scientificName;
      this.description = description;
      this.predominantColor = predominantColor;
    }
  }
  