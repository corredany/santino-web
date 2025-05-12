import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl:'./inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { 

  counter = 10;
  counterSignarl = signal(10);

  constructor(){
      
  }


  increaseBy(value:number){
      this.counter += value;
      this.counterSignarl.update( (current) => current + value );
  }

  resetCounter(){
      this.counter = 0;
      this.counterSignarl.set(0);
  }


}
