import { ChangeDetectionStrategy, Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { SliderInicioComponent } from "../../../components/slider-inicio/slider-inicio.component";
import { ButtonComponent } from '../../../components/shared/button/button.component';
import { ImageCompareModule } from 'primeng/imagecompare';
import { SliderMarcasComponent } from '../../../components/slider-marcas/slider-marcas.component';
@Component({
  selector: 'app-inicio',
  imports: [
    SliderInicioComponent, 
    ButtonComponent, 
    ImageCompareModule, 
    SliderMarcasComponent
  ],
  templateUrl:'./inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {
  
}
