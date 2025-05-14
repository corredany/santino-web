import { ChangeDetectionStrategy, Component, OnInit, ElementRef, ViewChild, AfterViewInit,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { SwiperContainer } from 'swiper/element';

// Registra los elementos de Swiper (esto también puede hacerse en el módulo principal)
register();

@Component({
  selector: 'app-slider-inicio',
  standalone: true, // Ajusta según la configuración de tu proyecto
  imports: [CommonModule],
  templateUrl: './slider-inicio.component.html',
  styleUrls: ['./slider-inicio.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderInicioComponent implements OnInit, AfterViewInit {
  // Referencia al contenedor Swiper
  @ViewChild('swiper') swiperRef!: ElementRef<SwiperContainer>;
  
  // Datos para los slides (podrías moverlos a un servicio si fuera necesario)
  slides = [
    { image: 'img/img-1.jpg', name: 'Cocina'},
    { image: 'img/img-2.jpg', name: 'Closets'},
    { image: 'img/img-3.jpg', name: 'Vestidores'},
    { image: 'img/img-4.jpg', name: 'Muebles de Baño'},
    { image: 'img/img-5.jpg', name: 'Diseño de interiores'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Opciones de configuración del Swiper
    const swiperParams = {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      pagination: {
        clickable: true,
        dynamicBullets: true
      },
      navigation: true,
      
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        800: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1820: {
          slidesPerView: 4
        }
      }
    };

    // Aplica las opciones e inicializa
    Object.assign(this.swiperRef.nativeElement, swiperParams);
    this.swiperRef.nativeElement.initialize();
  }
}