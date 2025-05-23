import { Injectable } from '@angular/core';

export interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  /**
   * Método que obtiene un array de imágenes simulando una petición asíncrona
   * @returns Promise con array de imágenes
   */
  getImages(): Promise<Image[]> {
    // Reducimos el tiempo de retardo para hacer la prueba más rápida
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getData());
      }, 300); // Solo 300ms de retraso para simular una petición rápida
    });
  }

  /**
   * Datos de ejemplo para las imágenes
   * @returns Array de imágenes con propiedades (URL, título, etc)
   */
  private getData(): Image[] {
    return [
      {
        itemImageSrc: 'img/fondo.jpg',
        thumbnailImageSrc: 'img/fondo.jpg',
        alt: 'fondo',
        title: 'fondo'
      },
      {
        itemImageSrc: 'img/img-1.jpg',
        thumbnailImageSrc: 'img/img-1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'img/img-2.jpg',
        thumbnailImageSrc: 'img/img-2.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
      },
      {
        itemImageSrc: 'img/img-3.jpg',
        thumbnailImageSrc: 'img/img-3.jpg',
        alt: 'Descripción Producto 3',
        title: 'Producto 3'
      },
      {
        itemImageSrc: 'img/img-4.jpg',
        thumbnailImageSrc: 'img/img-4.jpg',
        alt: 'Descripción Producto 4',
        title: 'Producto 4'
      },
      {
        itemImageSrc: 'img/img-5.jpg',
        thumbnailImageSrc: 'img/img-5.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5'
      }
    ];
  }
}
