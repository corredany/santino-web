import { Injectable } from '@angular/core';

export interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  images: Image[];
  materials: {
    title: string;
    images: Image[];
  };
  accessories: {
    title: string;
    images: Image[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private sections: { [key: string]: Section } = {
    'cocinas': {
      id: 'cocinas',
      title: 'Cocinas',
      subtitle: 'Diseñamos closets personalizados que organizan tu espacio y reflejan tu estilo, con la calidad que mereces.',
      description: '',
      backgroundImage: 'img/cocinacomp.jpeg',
      images: [
        {
          itemImageSrc: 'img/cocina1.jpg',
          thumbnailImageSrc: 'img/cocina1.jpg',
          alt: 'Cocina moderna',
          title: 'Cocina Moderna'
        },
        {
          itemImageSrc: 'img/cocina2.jpeg',
          thumbnailImageSrc: 'img/cocina2.jpeg',
          alt: 'Cocina clásica',
          title: 'Cocina Clásica'
        }
      ],
      materials: {
        title: 'Materiales usados para el proyecto',
        images: [
          {
            itemImageSrc: 'img/material1.jpg',
            thumbnailImageSrc: 'img/material1.jpg',
            alt: 'Material 1',
            title: 'Material Premium'
          }
        ]
      },
      accessories: {
        title: 'Aditamentos usados para el proyecto',
        images: [
          {
            itemImageSrc: 'img/accesorio1.jpg',
            thumbnailImageSrc: 'img/accesorio1.jpg',
            alt: 'Accesorio 1',
            title: 'Accesorio Premium'
          }
        ]
      }
    },
    'closets': {
      id: 'closets',
      title: 'Closets',
      subtitle: 'Diseñamos muebles que transforman tus espacios en lugares únicos',
      description: 'Creamos muebles personalizados que combinan funcionalidad, durabilidad y diseño exclusivo.',
      backgroundImage: 'img/closetcomp.jpg',
      images: [
        {
          itemImageSrc: 'img/mueble1.jpg',
          thumbnailImageSrc: 'img/mueble1.jpg',
          alt: 'Mueble moderno',
          title: 'Mueble Moderno'
        }
      ],
      materials: {
        title: 'Materiales usados para el proyecto',
        images: [
          {
            itemImageSrc: 'img/material2.jpg',
            thumbnailImageSrc: 'img/material2.jpg',
            alt: 'Material 2',
            title: 'Material Premium'
          }
        ]
      },
      accessories: {
        title: 'Aditamentos usados para el proyecto',
        images: [
          {
            itemImageSrc: 'img/accesorio2.jpg',
            thumbnailImageSrc: 'img/accesorio2.jpg',
            alt: 'Accesorio 2',
            title: 'Accesorio Premium'
          }
        ]
      }
    },
    'proyectos': {
      id: 'proyectos',
      title: 'Proyectos',
      subtitle: 'Transformamos espacios con proyectos únicos y personalizados',
      description: 'Desarrollamos proyectos integrales que combinan diseño, funcionalidad y calidad.',
      backgroundImage: 'img/proyectos-fondo.jpg',
      images: [
        {
          itemImageSrc: 'img/proyecto1.jpg',
          thumbnailImageSrc: 'img/proyecto1.jpg',
          alt: 'Proyecto 1',
          title: 'Proyecto Residencial'
        }
      ],
      materials: {
        title: 'Materiales usados para el proyecto',
        images: [
          {
            itemImageSrc: 'img/material3.jpg',
            thumbnailImageSrc: 'img/material3.jpg',
            alt: 'Material 3',
            title: 'Material Premium'
          }
        ]
      },
      accessories: {
        title: 'Aditamentos usados para el proyecto',
        images: [
          {
            itemImageSrc: 'img/accesorio3.jpg',
            thumbnailImageSrc: 'img/accesorio3.jpg',
            alt: 'Accesorio 3',
            title: 'Accesorio Premium'
          }
        ]
      }
    }
  };

  constructor() { }

  /**
   * Obtiene los datos de una sección específica
   * @param sectionId Identificador de la sección
   * @returns Promise con los datos de la sección
   */
  getSection(sectionId: string): Promise<Section> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const section = this.sections[sectionId];
        if (!section) {
          throw new Error(`Section ${sectionId} not found`);
        }
        resolve(section);
      }, 300);
    });
  }

  /**
   * Obtiene todas las secciones disponibles
   * @returns Promise con array de secciones
   */
  getAllSections(): Promise<Section[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.values(this.sections));
      }, 300);
    });
  }
}
