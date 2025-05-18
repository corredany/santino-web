import { ChangeDetectionStrategy, Component, OnInit, ElementRef, ViewChild, AfterViewInit,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
// Registra los elementos de Swiper (esto también puede hacerse en el módulo principal)//
//register();

@Component({
  selector: 'app-slider-inicio',
  standalone: true, // Ajusta según la configuración de tu proyecto
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule
  ],
  templateUrl: './slider-inicio.component.html',
  styleUrls: ['./slider-inicio.component.css'],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderInicioComponent implements OnInit {
  slides = [
    { image: 'img/img-1.jpg', name: 'Cocina' },
    { image: 'img/img-2.jpg', name: 'Closets' },
    { image: 'img/img-3.jpg', name: 'Vestidores' },
    { image: 'img/img-4.jpg', name: 'Muebles de Baño' },
    { image: 'img/img-5.jpg', name: 'Diseño de interiores' },
  ];

  responsiveOptions: any[] = [];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}

// export class SliderInicioComponent implements OnInit, AfterViewInit {
//   // Referencia al contenedor Swiper
//   @ViewChild('swiper') swiperRef!: ElementRef<SwiperContainer>;
  
//   // Datos para los slides (podrías moverlos a un servicio si fuera necesario)
//   slides = [
//     { image: 'img/img-1.jpg', name: 'Cocina'},
//     { image: 'img/img-2.jpg', name: 'Closets'},
//     { image: 'img/img-3.jpg', name: 'Vestidores'},
//     { image: 'img/img-4.jpg', name: 'Muebles de Baño'},
//     { image: 'img/img-5.jpg', name: 'Diseño de interiores'},
//   ];

//   constructor() { }

//   ngOnInit(): void {
//   }

//   ngAfterViewInit(): void {
//     // Opciones de configuración del Swiper
//     const swiperParams = {
//       loop: true,
//       grabCursor: true,
//       spaceBetween: 20,
//       pagination: {
//         clickable: true,
//         dynamicBullets: true
//       },
//       navigation: true,
      
//       breakpoints: {
//         0: {
//           slidesPerView: 1
//         },
//         800: {
//           slidesPerView: 2
//         },
//         1024: {
//           slidesPerView: 3
//         },
//       }
//     };

//     // Aplica las opciones e inicializa
//     Object.assign(this.swiperRef.nativeElement, swiperParams);
//     this.swiperRef.nativeElement.initialize();
//   }

  
// }
