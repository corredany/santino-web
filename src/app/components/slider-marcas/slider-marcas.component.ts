import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { SliderInicioComponent } from '../slider-inicio/slider-inicio.component';
@Component({
  selector: 'app-slider-marcas',
  templateUrl: './slider-marcas.component.html',
  imports: [CommonModule, CarouselModule, ButtonModule],
  styleUrls: ['./slider-marcas.component.css']
})
export class SliderMarcasComponent extends SliderInicioComponent{
    
    override slides = [
        {image: 'img/blum.png', name: 'Blum'},
        {image: 'img/arauco.png', name: 'Arauco'}, 
        {image: 'img/brucco.jpg', name: 'Brucco'}, 
        {image: 'img/promob.jpg', name: 'Promob'}, 
        {image: 'img/krono.jpg', name: 'Kronospan'}, 
        {image: 'img/hafele.jpg', name: 'Hafele'},
        {image: 'img/rehau.jpg', name: 'Rehau'} 

    ];
}
