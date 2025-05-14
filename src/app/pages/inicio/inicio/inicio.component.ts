import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../components/shared/button/button.component';
@Component({
  selector: 'app-inicio',
  imports: [
    ButtonComponent
  ],
  templateUrl:'./inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
