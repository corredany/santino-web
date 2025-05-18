import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

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
        breakpoint: '1920px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1400px',
        numVisible: 2,
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
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}

