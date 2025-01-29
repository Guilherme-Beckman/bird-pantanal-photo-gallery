// download.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  generateCardHTML(cardData: any): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 16px;
            max-width: 300px;
            font-family: Arial, sans-serif;
          }
          .card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 4px;
          }
          .card-title {
            font-size: 1.2em;
            margin: 10px 0;
            color: ${cardData.predominantColor};
          }
          .card-scientific {
            font-style: italic;
            color: #666;
          }
          .card-description {
            margin-top: 10px;
            font-size: 0.9em;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <img src="${cardData.imageUrl}" class="card-image" alt="${cardData.name}">
          <h2 class="card-title">${cardData.name}</h2>
          <p class="card-scientific">${cardData.scientificName}</p>
          <p class="card-description">${cardData.description}</p>
        </div>
      </body>
      </html>
    `;
  }

  downloadFile(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}