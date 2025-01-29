import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDownloadService {
  generateCardHTML(cardData: any): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }

          body {
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }

          .card-container {
            display: flex;
            justify-content: center;
            padding: 2rem;
            margin: 0 auto;
            max-width: 80%;
          }

          .card {
            background-color: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 10px;
            width: 320px;
            padding: 20px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-align: center;
          }

          .card:hover {
            transform: translateY(-10px);
          }

          .card img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 15px;
          }

          .card-header h2 {
            font-size: 1.8rem;
            color: #333;
            margin-bottom: 10px;
          }

          .card-body p {
            font-size: 1rem;
            color: #555;
            line-height: 1.6;
            margin-bottom: 10px;
          }

          .card-body p span {
            font-weight: bold;
            color: #333;
          }

          .read-more-button {
            margin-top: 15px;
          }

          .read-more-button button {
            font-size: 1rem;
            padding: 10px 15px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .read-more-button button:hover {
            background-color: #2980b9;
          }
        </style>
      </head>
      <body>
        <section class="card-container">
          <div class="card">
            <header class="card-header">
              <h2>${cardData.name}</h2>
            </header>
            <img src="${cardData.imageUrl}" alt="Image of ${cardData.name}">
            <div class="card-body">
              <p>${cardData.description}</p>
              <p><span>Nome Científico:</span> ${cardData.scientificName}</p>
              <p><span>Cor Predominante:</span> ${cardData.predominantColor}</p>
            </div>
          </div>
        </section>
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
