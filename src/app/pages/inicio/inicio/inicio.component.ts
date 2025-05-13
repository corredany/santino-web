import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SliderInicioComponent } from "../../../components/slider-inicio/slider-inicio.component";

@Component({
  selector: 'app-inicio',
  imports: [SliderInicioComponent],
  templateUrl:'./inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
